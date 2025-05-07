<template>
  <section class="designs-page">

    <!-- 🎥 3D Design Section -->
    <section class="design-section">
      <h2>3D Design Showcase</h2>
      <p>
        This section includes stages from my 3D modeling workflow, including wireframe, occlusion, and final renders. Tools used: Blender, Maya.
      </p>
      <ul>
        <li>Wireframe modeling to establish form</li>
        <li>Ambient occlusion to preview lighting and shadow detail</li>
        <li>Final render with textures, lighting, and post-processing</li>
      </ul>

      <h3>Scene Animating Stages:</h3>
      <div class="image-row">
        <img src="../assets/3D_5.jpg" alt="Blocking View" />
        <img src="../assets/3D_3.jpg" alt="Wireframe View" />
        <img src="../assets/3D_4.jpg" alt="Occlusion View" />
      <p class="caption">Hover/ tap to enlarge photos</p>

      </div>

      <div>        
        <p>These images demonstrate a key stage of the 3D modelling process:</p>
        <ol>
          <li>Blocking Stage: The initial placement of basic models to help visualise the layout</li>
          <li>Modelling Stage: Creating the detailed models and buildig out the scene</li>
          <li>Texture/ Lighting Stages: Implementing the textures for all elements, and careful placement of lighting for the scene</li>
        </ol>
        <br>
      </div>

      <div class="image-full">
        <h3>Final 3D Render with Postproduction:</h3>
        <img src="../assets/3D_1.jpg" alt="Final Render" />
      </div>
    </section>

    <!-- 🎬 Film Section -->
    <section class="design-section">
      <h2>Film & Video Projects</h2>
      <p>
        A selection of film projects where I worked on editing, visual effects & design. Tools used: Adobe Premiere, After Effects, Photoshop, & Illustrator.
      </p>
      <ul>
        <li>Visual effects and video editing</li>
        <li>Color grading and motion graphics</li>
        <li>Have also worked in a variety of filmmaking roles: Script writing, directing, sound, and cinematography.</li>
      </ul>

      <div class="image-row">
        <img src="../assets/Film_1.png" alt="Film Still 1" />
        <img src="../assets/Film_2.png" alt="Film Still 2" />
        <img src="../assets/Film_3.png" alt="Film Still 3" />
      </div>
    </section>

    <!-- 🌀 More Sections can follow the same pattern -->

  </section>
</template>


<style scoped>
h3 {
  font-weight: bold;
}


.designs-page {
  /* padding: 2rem; */
  /* font-family: 'Helvetica Neue', sans-serif; */
  color: #333;
}

.design-section {
  margin-bottom: 5rem;
}

.design-section h2 {
  /* font-size: 2rem; */
  color: #000000;
  margin-bottom: 1rem;
}

p {
  font-size: 1.1rem;

}

.design-section p {
  margin-bottom: 0.5rem;
}

.caption {
  font-style: italic;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  font-size: 0.9rem;
  color: rgb(59, 59, 59);
}


.design-section ul {
  margin-left: 1.5rem;
  margin-bottom: 2rem;
}

.design-section ul li {
  list-style-type: disc;
  margin-bottom: 0.5rem;
}

.image-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1%;
  margin-bottom: 2%;
}

.image-row img {
  flex: 1 1 32%;
  border-radius: 12px;
  object-fit: contain;
  max-width: 32%;
  height: auto;
  transition: transform 0.3s ease;
}

.image-row img:hover {
  transform: scale(2.1);
  z-index: 1;
  transition-delay: 200ms;
}

.image-full img {
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  margin-top: 3px;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.image-grid img {
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
}
</style>
