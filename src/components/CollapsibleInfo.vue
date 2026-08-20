<!-- CollapsibleInfo.vue -->
<script setup>
import { ref } from "vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
});

const isOpen = ref(false);
</script>

<template>
  <section class="info-block">
    <button class="info-header" @click="isOpen = !isOpen">
      <span>{{ title }}</span>
      <span>{{ isOpen ? "−" : "+" }}</span>
    </button>

    <div v-if="isOpen" class="info-content">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.info-block {
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 12px;
  overflow: hidden;
}

.info-header {
  width: 100%;
  padding: 20px 16px;
  border: none;
  background: #fbeef3;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 18px;
  font-weight: 900;
}

.info-content {
  padding: 16px;
}
</style>
