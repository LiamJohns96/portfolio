<template>
    <main>
        <Intro />
        <ProjectsBar />
      <!-- <Projects /> -->
       <Calls dataCsv="/data.csv"/>
    </main>

  </template>
  
  <script setup>
  import Calls from '@/components/Calls.vue';
import Intro from '../components/Intro.vue'
  import ProjectsBar from '../components/ProjectsBar.vue'
//   import Projects from '../components/Projects.vue'
  </script>
  