import { ref } from 'vue'
import { defineStore } from 'pinia'
import { subjects } from '@/globals'

export const useInputStore = defineStore('input', () => {
  const scores = ref<{ [key: keyof typeof subjects]: number }>({})

  return { scores }
})
