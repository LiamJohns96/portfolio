<template>
    <section class="build-portfolio">
  
      <!-- <h2>Projects</h2> -->
  
      <!-- Example Project Block -->
      <section class="project-block">
        <img src="../assets/chart.png" alt="Chart" class="project-image" />
  
        <div class="project-info">
          <h3>Graphing Data</h3>
          <br>
          <ul>
            <li>Built interactive data visualisations using D3.js, including bar charts, scatter plots, and animated transitions  
</li>
            <li>Used D3 to bind data to SVG elements and dynamically update visuals based on user input or API data  
            </li>
            <li>Customised axes, tooltips, and transitions for responsive, visually appealing visualisations  
            </li>
          </ul>
        </div>
      </section>
  
      <!-- Another Project -->
      <section class="project-block">
        <img src="../assets/DevOps.png" alt="DevOps" class="project-image" />
  
        <div class="project-info">
          <h3>DevOps CI/CD Pipeline – AWS CodeBuild</h3>
            <p>
            Used AWS CodeBuild within a CI/CD pipeline to automate build and test stages for a Node.js app, triggered by GitHub commits.
            </p>
            <ul>
                <li>Configured AWS-managed environments to streamline builds and reduce manual setup.</li>
                <li>Created custom buildspec.yml and testspec.yml files for precise control over pipeline tasks.</li>
                <li>Integrated seamlessly with CodePipeline for continuous delivery on source updates.</li>
                <li>Ran unit tests using Mocha to ensure code reliability before deployment.</li>
            </ul>

        </div>
      </section>

      <section class="project-block">

      </section>

      
      </section>
  </template>
  

  <style scoped>
.build-portfolio {
  /* padding: 2rem; */
  max-width: 1000px;
  margin: 0 auto;
  font-family: 'Helvetica Neue', sans-serif;
}



h2 {
    margin-bottom: 2rem;
}

.project-block {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 3rem;
  gap: 1.5rem;
  border-top: 1px solid black;
  padding-top: 4rem;
}

.project-image {
  flex: 1 1 40%;
  max-width: 50%;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

/* === MOBILE STYLES === */
@media screen and (max-width: 768px) {
    .project-block {
        display: block;
        align-items: center;
        margin-bottom: 3rem;
        gap: 1.5rem;
        border-bottom: 1px solid black;
        padding-bottom: 4rem;
    }
    .project-image {
        max-width: 100%;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    }
}

.project-info {
  flex: 1 1 40%;
}

.project-info h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.project-info p {
  margin-bottom: 0.5rem;
  font-size: 1.05rem;
}

.project-info ul {
  list-style-type: disc;
  padding-left: 1.2rem;
}

.project-info ul li {
  margin-bottom: 0.3rem;
}
</style>
