<template>
  <div>
    <h2>Monthly Call Durations</h2>
    <div id="pies"></div>
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "MonthlyBar",
  props: {
    dataCsv: { type: String, required: true } // path to CSV
  },
  mounted() {
    d3.csv(this.dataCsv).then(data => {
      const cleaned = data
        .filter(d => d.value && d.date)
        .map(d => ({
          date: d3.timeParse("%-m/%-d/%Y")(d.date),
          value: +d.value
        }))
        .filter(d => d.date && !isNaN(d.value));



        
      // === Bar chart function from previous snippet ===
      function drawMonthlyBar(monthName, containerId) {
        const monthData = cleaned.filter(d => d3.timeFormat("%B")(d.date) === monthName);
        if (monthData.length === 0) return;

        const groups = {
          "<2m": monthData.filter(d => d.value < 120).length,
          "<5m": monthData.filter(d => d.value >= 120 && d.value < 300).length,
          "<10m": monthData.filter(d => d.value >= 300 && d.value < 600).length,
          "<20m": monthData.filter(d => d.value >= 600 && d.value < 1200).length,
          "<30m": monthData.filter(d => d.value >= 1200 && d.value < 1800).length,
          ">30m": monthData.filter(d => d.value >= 1800).length
        };

        const total = d3.sum(Object.values(groups));
        if (total === 0) return;

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
          .attr("x", d => x(d[0]) + x.bandwidth() / 2)
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

        
        // Optional: legend below the chart
        const legend = barDiv.append("div")
            .style("text-align", "center")
            .style("font-size", "13px")
            .style("margin-top", "6px");

        legend.html(
        Object.entries(groups)
            .map(([label, count]) => {
            const pct = ((count / total) * 100).toFixed(1);
            return `<span style="color:${color(label)};">&#9679;</span> ${label}: ${count} calls (${pct}%)`;
            })
            .join("<br>")
        );
      }

      // Draw months
      ["November", "October", "September", "August", "July"].forEach(m =>
        drawMonthlyBar(m, "pies")
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
