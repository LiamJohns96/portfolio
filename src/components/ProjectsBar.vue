<script setup>
import { computed, ref } from 'vue'
import { useSelectionStore } from '../stores/selection'
import ProjectFoost from './ProjectFoost.vue'
import ProjectDesigns from './ProjectDesigns.vue'
import ProjectBuilds from './ProjectBuilds.vue'

const store = useSelectionStore()
store.selectedPage = 'foost'


</script>


<template>
  <div>
  
    <section class="image-links">
      <div class="image-wrapper" @click="store.selectedPage = 'foost'">
        <img src="../assets/foost_0.png" alt="ProjectFoost" class="image" />
        <div class="overlay"></div>
        <div class="overlay-text">Project Showcase</div>
        <span v-if="store.selectedPage === 'foost'" class="symbol">•</span>
      </div>

     

      <div class="image-wrapper" @click="store.selectedPage = 'designs'">
        <img src="../assets/3D_Bike2.png" alt="Designs" class="image" />
        <div class="overlay"></div>
        <div class="overlay-text">Design</div>
        <span v-if="store.selectedPage === 'designs'" class="symbol">•</span>
      </div>

       

      <div class="image-wrapper" @click="store.selectedPage = 'builds'">
        <img src="../assets/builds_1.png" alt="Builds" class="image" />
        <div class="overlay"></div>
        <div class="overlay-text">Code, Builds, & Projects</div>
        <span v-if="store.selectedPage === 'builds'" class="symbol">•</span>
      </div>


      
    </section>

    <!-- Dynamic component displayed separately, not affecting image layout -->
    <section class="content-area">
      <ProjectFoost v-if="store.selectedPage === 'foost'" />
      <ProjectDesigns v-if="store.selectedPage === 'designs'" />
      <ProjectBuilds v-if="store.selectedPage === 'builds'" /> 
    </section>
  </div>
</template>

<style scoped>
.image {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  border-radius: 2rem;
  /* padding: 7%; */
}

.image-links {
  display: flex;
  /* background-color: #aa88cc; */
  margin: 10px;
  padding: 5px;
  justify-content: center;
  gap: 1rem;
  /* padding: 2rem; */
  height: 100%;
  max-width: 100%;
  /* min-height: 500px; */
  /* flex-wrap: nowrap; */
}

.image-wrapper {
  position: relative;
  display: block;
  width: 30%;
  aspect-ratio: 3/4;
  /* height: 400px; */
  transition: transform 0.3s ease;
}

.image-wrapper:hover {
  transform: scale(1.05);
}

/* Semi-transparent overlay */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; 
  border-radius: 2rem;
  background-color: rgba(229, 202, 255, 0.15); 
  z-index: 1;
}

.overlay-text {
  position: absolute;
  top: 50%;
  justify-content: center;
  color: rgb(255, 255, 255);
  background-color: rgba(178, 103, 215, 0.705);
  /* background: linear-gradient(
    to right,
    transparent 0%,
    rgba(243, 188, 255, 0.582) 10%,
    rgba(166, 107, 194, 0.582) 55%,
    rgba(243, 188, 255, 0.582) 90%,
    transparent 100%
  ); */
  /* border-radius: 2rem; */
  /* left: 5%; */
  width: 100%;
  font-size: 1.2rem;
  font-weight: bold;
  z-index: 2;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .overlay-text {
    position: absolute; /* Remove absolute positioning */
    top: -3rem;
    background-color: transparent; /* Remove background if not needed */
    color: #333; /* Adjust for readability */
    font-size: 0.75rem; /* Smaller font for mobile */
    font-weight: bold;
    text-align: center;

  }
  .image-links {
    margin-top: 30%;
  }
  .image-wrapper{
    min-height: 0px;

  }
}

.symbol {
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  top: 95%;
  transform: translateX(-50%);
  font-size: 2.5rem;
  color: #aa88cc;
  pointer-events: none;
}

img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.content-area {
  margin-top: 3rem;
  max-width: 960px;
  margin-inline: auto;
}


</style>
