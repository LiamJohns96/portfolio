<template>
  <section>     
    <!-- Section 1: Image Right -->
    <section class="element">
      <div class="textBox">
        <h2>Mobile App - Capstone Project</h2>
        <p>
          I led the development and design direction for a cross-platform mobile app, as part of my university capstone team, with a focus on UI/UX, interactivity, and development coordination.
        </p>
        <br>
        <ul>
          <li>Worked with a real small Australian business to design and develop the app.</li>
          <li>Frameworks: React Native, TypeScript</li>
          <li>Backend: Firebase (Auth + Storage), Headless CMS</li>
          <li>Tools: Git, Trello, Figma</li>
          <li>Contributions: Visual design, responsive layout, component architecture, implementing audio player, team coordination</li>
        </ul>
      </div>
      <img src="../assets/foost_1.png" alt="Foost intro screen" class="image" />
    </section>

    <!-- Section 2: Image Left -->
    <section class="imageDisplay">
      <img src="../assets/foost_2.png" alt="Foost features screen" class="image" style="margin-left: 0; margin-right: auto;" />
      <img src="../assets/foost_3.png" alt="Foost CMS dashboard" class="image" />
      <img src="../assets/foost_4.png" alt="Foost CMS dashboard" class="image" />
      <div class="textBox">
        
      </div>
    </section>

    <!-- Section 3: Image Right -->
    <section class="element">
      <div>
        <h3>Technical Detail</h3>
        <p>
          Foost was built using React Native and TypeScript, with Firebase handling authentication and cloud storage.
          I also integrated a headless CMS that allowed educators and team members to manage app content dynamically
          without editing code. My component system was designed to be scalable, modular, and easy to style.
        </p>
        <p>
          Notable features I developed include a custom-built audio player,
          gamification 'garden' element to help visualise the user's education journey, and component development/ integration.
          Every component was tested for responsiveness and accessibility, particularly for young children and families.
        </p>

        <br>
        <h3>Reflections</h3>
        <p>
          This project was an opportunity to take on a leadership role, balancing visual design with technical execution.
          I learned how to align a cross-functional team around a shared vision while producing production-ready code under deadlines.
          Foost remains one of the projects I'm most proud of — not just for what I built, but for how I helped guide the team creatively and technically.
        </p>
      </div>
    </section>
  </section>
</template>

<style scoped>

.element {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10%;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .element {
    flex-direction: column;
  }

  .image {
    max-width: 100%;
    height: auto;
    object-fit: contain;
    margin-left: auto;
    margin-right: auto;
    padding: 2px;
    border-radius: 1rem;
  }

  .textBox {
    max-width: 100%;
    margin-right: 0;
  }

  .imageDisplay {
    display: flex;
    flex-wrap: nowrap;

    margin-bottom: 10%;
    margin-left: 1%;
    margin-right: 1%;
  }
  .imageDisplay .image {
    width: 30%; /* 2 images per row on mobile with small gap */
  }
}
@media screen and (min-width: 768px) {

  .image {
    max-width: 40%;
    height: auto;
    object-fit: contain;
    margin-left: auto;
    margin-right: auto;
    padding: 2px;
    border-radius: 1rem;
    /* padding: 5px; */
  }
  .imageDisplay {
    display: flex;
    flex-wrap: nowrap;
    /* height: 28em; */
    margin-bottom: 8%;
    margin-left: 1%;
    margin-right: 1%;
  }
  .imageDisplay .image {
    width: 30%; /* 2 images per row on mobile with small gap */
  }
  .textBox {
    max-width: 50%;
    /* margin-left: 5%; */
    margin-right: 5%;;
  }
  li {
    margin: 0.5rem;
  }
}
</style>
