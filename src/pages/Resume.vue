<template>
   <a
        href="/Liam_Johns_Resume_2025.pdf"
        download
        class="download-btn"
        >
        ⬇ Download PDF Resume
    </a>
    <section class="resume">
      <h1>L. Johns</h1>
      <p class="contact">Melbourne · L.Johns.Work@gmail.com · 0450 901 484</p>
  
     

      <section class="resume-section">
        <h2>Education</h2>
        <div class="entry">
          <h3>Swinburne University of Technology</h3>
          <p>Bachelor of Computer Science (Software Design) · Aug 2020 – July 2024</p>
          <ul>
            <li>Team Leader of final year cross-platform mobile app project for a real client</li>
            <li>Worked with React Native, TypeScript, GraphQL, Hygraph CMS, and Svelte</li>
            <li>Managed team coordination, development, and direct client communication</li>
          </ul>
        </div>
        <div class="entry">
          <h3>Swinburne University – TAFE</h3>
          <p>Diploma of Screen & Media (Film & TV) · 2015</p>
          <ul>
            <li>Focused on creative production, Adobe Creative Suite, and digital storytelling</li>
          </ul>
        </div>
      </section>
  
      <section class="resume-section">
        <h2>Technical & Creative Skills</h2>
        <ul class="columns">
          <li>HTML, CSS, JavaScript, TypeScript</li>
          <li>React, .NET (C#), Node.js, Git</li>
          <li>GraphQL, Svelte, Supabase</li>
          <li>Adobe Photoshop, Premiere, After Effects</li>
          <li>Figma, Hygraph, Wix</li>
          <li>SQL, PostgreSQL, CI/CD, GitHub Actions</li>
          <li>UX/UI Design, Branding, Responsive Layouts</li>
        </ul>
      </section>
  
      <section class="resume-section">
        <h2>Professional Experience</h2>
        <div class="entry">
          <h3>Mind Body Pain Specialists</h3>
          <p>Medical Receptionist · March 2024 – Present</p>
          <ul>
            <li>Managed scheduling, patient records, referrals, billing, and communication</li>
          </ul>
        </div>
        <div class="entry">
          <h3>City Orthopaedics</h3>
          <p>Medical Secretary & IT Specialist · March 2018 – 2024</p>
          <ul>
            <li>Developed protocol guides and trained new staff</li>
            <li>Created digital systems, improved workflows, and implemented backup plans</li>
          </ul>
        </div>
        <div class="entry">
          <h3>Freelance Digital Creator</h3>
          <p>Web & Media Design · 2016 – 2017</p>
          <ul>
            <li>Designed and launched a skincare brand website using Wix</li>
            <li>Produced videos and content using Adobe Suite</li>
          </ul>
        </div>
      </section>
  
      <section class="resume-section">
        <h2>Achievements & Projects</h2>
        <ul>
          <li>Finalist – My Story My Content National Film Competition</li>
          <li>Winner – Best Picture, Swinburne Diploma Screening Night</li>
          <li>Gaffer – “Mermaid Homesick” (Short Film)</li>
          <li>Producer & Editor – “Service Not Included” (Short Film)</li>
        </ul>
      </section>
  
      <section class="resume-section">
        <h2>Soft Skills</h2>
        <ul>
          <li>Strong communicator across technical and creative teams</li>
          <li>Efficient self-manager and team leader</li>
          <li>Quick learner with solid troubleshooting ability</li>
          <li>Adaptable, organised, and delivery-focused</li>
          <li>Driven by clean, user-centered design</li>
        </ul>
      </section>
    </section>
  </template>
  
  <style scoped> 

.resume {
    max-width: 900px;
    margin: auto;
    padding: 2rem;
    font-family: 'Helvetica Neue', sans-serif;
    color: #333;
  }
  
  h1 {
    text-align: center;
    font-size: 2.5rem;
    color: #aa88cc;
  }
  
  .contact {
    text-align: center;
    font-size: 0.95rem;
    color: #666;
    margin-bottom: 2rem;
  }
  
  .resume-section {
    margin-bottom: 2rem;
  }
  
  .resume-section h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #444;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid #eee;
    padding-bottom: 0.3rem;
  }
  
  .entry h3 {
    font-size: 1.1rem;
    color: #222;
    margin-bottom: 0.2rem;
  }
  
  .entry p {
    margin-bottom: 0.5rem;
    color: #000000;
    font-style: italic;
    font-weight: bold;
  }
  
  ul {
    margin-left: 1.2rem;
    padding-left: 0;
  }
  
  ul li {
    margin-bottom: 0.4rem;
  }
  
  .columns {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    max-width: 80%;
    gap: 0.5rem 4rem;
  }


  .download-btn {
  display: inline-block;
  margin: auto auto 2rem;
  padding: 0.75rem 1.2rem;
  background-color: #aa88cc;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s ease;
  margin-left: 40%;
  text-align: center;

}

.download-btn:hover {
  background-color: #9444b0;
}

  
</style>
  