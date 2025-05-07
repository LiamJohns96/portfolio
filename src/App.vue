<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>


<style>
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  height: 100%;
}
body, html {
  height: 100%;
  margin: 0;
  font-family: 'Inter', sans-serif;
  background-color: #fefefe;
  color: #333;
}

main {
  flex: 1;
  width: 100%;
  /* max-width: 960px; */
  margin: 0 auto;
  display: block;
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
