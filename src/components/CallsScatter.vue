<template>
  <div>
    <h2>L Johns - Call Data as of 12th Nov</h2>
    <!-- Scatter plot -->
    <svg id="scatter" width="900" height="800"></svg>

    <h3>Average Call Times per Month</h3>
    <div id="monthly-summary"></div>

    <h3>Call Duration Breakdown (Bar Charts)</h3>
    <div id="pies"></div>
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "CallCharts",
  props: {
    dataCsv: { type: String, required: true } // CSV path, e.g., "/data.csv"
  },
  mounted() {
    d3.csv(this.dataCsv).then(data => {
      const parseDate = d3.timeParse("%-m/%-d/%Y");
      const cleaned = data
        .filter(d => d.value && d.date)
        .map(d => ({
          date: parseDate(d.date),
          value: +d.value
        }))
        .filter(d => d.date && !isNaN(d.value));

      if (!cleaned.length) return;

      // --- Scatter plot ---
      const scatterSvg = d3.select("#scatter"),
            margin = {top: 30, right: 30, bottom: 100, left: 80},
            width = +scatterSvg.attr("width") - margin.left - margin.right,
            height = +scatterSvg.attr("height") - margin.top - margin.bottom;

      const g = scatterSvg.append("g")
          .attr("transform", `translate(${margin.left},${margin.top})`);

      const tooltip = d3.select("body").append("div")
        .style("position", "absolute")
        .style("background", "white")
        .style("border", "1px solid #ccc")
        .style("padding", "6px 10px")
        .style("border-radius", "6px")
        .style("font-size", "13px")
        .style("box-shadow", "0 2px 6px rgba(0,0,0,0.1)")
        .style("opacity", 0);

      const x = d3.scaleBand()
        .domain(cleaned.map(d => d3.timeFormat("%-m/%-d/%Y")(d.date)).reverse())
        .range([0, width])
        .padding(0.1);

      const y = d3.scaleLinear()
        .domain([0, d3.max(cleaned, d => d.value / 60)]).nice()
        .range([height, 0]);

      // X-axis
      g.append("g")
        .attr("transform", `translate(0,${height})`)
        .attr("class", "x-axis")
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "rotate(-45)")
        .style("text-anchor", "end");

      // Y-axis with grid
      g.append("g")
        .call(d3.axisLeft(y)
          .ticks(10)
          .tickSize(-width)
          .tickPadding(10))
        .selectAll("line")
        .attr("stroke", "#ccc");

      // Y-axis label
      g.append("text")
        .attr("x", -height / 2)
        .attr("y", -50)
        .attr("fill", "black")
        .attr("text-anchor", "middle")
        .attr("transform", "rotate(-90)")
        .text("Minutes");

      // Scatter circles
      g.selectAll("circle")
        .data(cleaned)
        .enter()
        .append("circle")
        .attr("cx", d => x(d3.timeFormat("%-m/%-d/%Y")(d.date)) + x.bandwidth()/2)
        .attr("cy", d => y(d.value / 60))
        .attr("r", 4)
        .attr("fill", "#80c444")
        .on("mouseover", (event, d) => {
          const mins = Math.floor(d.value / 60);
          const secs = d.value % 60;
          const dateStr = d3.timeFormat("%-m/%-d/%Y")(d.date);
          tooltip.transition().duration(150).style("opacity", 1);
          tooltip.html(`<strong>Date:</strong> ${dateStr}<br><strong>Time:</strong> ${mins}m ${secs}s`)
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 30) + "px");
        })
        .on("mousemove", event => {
          tooltip
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 30) + "px");
        })
        .on("mouseout", () => tooltip.transition().duration(200).style("opacity", 0));

      // X-axis label
      g.append("text")
        .attr("x", width / 2)
        .attr("y", height + 80)
        .attr("text-anchor", "middle")
        .text("Date (m/d/yyyy)");

      // --- Monthly averages ---
      const monthly = d3.rollups(
        cleaned,
        v => d3.mean(v, d => d.value / 60),
        d => d3.timeFormat("%B %Y")(d.date)
      );

      const summaryDiv = d3.select("#monthly-summary");
      summaryDiv.selectAll("p")
        .data(monthly)
        .enter()
        .append("p")
        .html(d => `<strong>${d[0]}:</strong> ${d[1].toFixed(2)} mins average`);

      // --- Monthly bar charts (replacing pie charts) ---
      function drawMonthlyBar(monthName, containerId) {
        const monthData = cleaned.filter(d => d3.timeFormat("%B")(d.date) === monthName);
        if (!monthData.length) return;

        const groups = {
          "<2m": monthData.filter(d => d.value < 120).length,
          "<5m": monthData.filter(d => d.value >= 120 && d.value < 300).length,
          "<10m": monthData.filter(d => d.value >= 300 && d.value < 600).length,
          "<20m": monthData.filter(d => d.value >= 600 && d.value < 1200).length,
          "<30m": monthData.filter(d => d.value >= 1200 && d.value < 1800).length,
          ">30m": monthData.filter(d => d.value >= 1800).length
        };

        const total = d3.sum(Object.values(groups));
        if (!total) return;

        const barWidth = 400, barHeight = 300;
        const margin = {top: 30, right: 20, bottom: 50, left: 50};

        const barDiv = d3.select("#" + containerId)
          .append("div")
          .style("display", "inline-block")
          .style("margin", "20px");

        barDiv.append("div")
          .text(`${monthName} Call Duration Breakdown`)
          .style("text-align", "center")
          .style("margin-bottom", "6px");

        const svg = barDiv.append("svg")
          .attr("width", barWidth)
          .attr("height", barHeight);

        const x = d3.scaleBand()
          .domain(Object.keys(groups))
          .range([margin.left, barWidth - margin.right])
          .padding(0.2);

        const y = d3.scaleLinear()
          .domain([0, d3.max(Object.values(groups))]).nice()
          .range([barHeight - margin.bottom, margin.top]);

        const color = d3.scaleOrdinal()
          .domain(Object.keys(groups))
          .range(["#00cc44", "#66cc66", "#99cc66", "#cccc66", "#ff9966", "#ff3333"]);

        svg.selectAll("rect")
          .data(Object.entries(groups))
          .enter()
          .append("rect")
          .attr("x", d => x(d[0]))
          .attr("y", d => y(d[1]))
          .attr("width", x.bandwidth())
          .attr("height", d => y(0) - y(d[1]))
          .attr("fill", d => color(d[0]));

        svg.selectAll("text.label")
          .data(Object.entries(groups))
          .enter()
          .append("text")
          .attr("class", "label")
          .attr("x", d => x(d[0]) + x.bandwidth()/2)
          .attr("y", d => y(d[1]) - 5)
          .attr("text-anchor", "middle")
          .style("font-size", "11px")
          .text(d => {
            const pct = ((d[1]/total)*100).toFixed(1);
            return `${d[1]} (${pct}%)`;
          });

        svg.append("g")
          .attr("transform", `translate(0,${barHeight - margin.bottom})`)
          .call(d3.axisBottom(x));

        svg.append("g")
          .attr("transform", `translate(${margin.left},0)`)
          .call(d3.axisLeft(y).ticks(5));

        barDiv.append("div")
          .style("text-align", "center")
          .style("margin-top", "6px")
          .html(`<strong>Total calls:</strong> ${total}`);
      }

      ["November","October","September","August","July"].forEach(m =>
        drawMonthlyBar(m,"pies")
      );
    });
  }
};
</script>

<style scoped>
#pies div {
  display: inline-block;
}
</style>
