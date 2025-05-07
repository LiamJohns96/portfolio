import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSelectionStore = defineStore('selection', () => {
  const selectedPage = ref(null) // 'about' or 'contact'
  return { selectedPage }
})
