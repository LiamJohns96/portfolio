<template>
    <main>
        <CallsScatter dataCsv="/data.csv"/>
       <!-- <Calls dataCsv="/data.csv"/> -->
    </main>

  </template>
  
  <script setup>
  import Calls from '@/components/Calls.vue';
import CallsScatter from '@/components/CallsScatter.vue';
  </script>
  