import { ref } from 'vue'
import { defineStore } from 'pinia'
import { subjects } from '@/globals'

export const usePresetsStore = defineStore('presets', () => {
  const list = ref<{
    name: string,
    scores: { [key: keyof typeof subjects]: number },
  }[]>([
    {
      name: 'Example 0',
      scores: {
        ja0: 100,
        ja1: 50,
        ja2: 50,
        so0: 100,
        ma0: 100,
        ma1: 100,
        sc2: 100,
        sc3: 100,
        en0: 100,
        en1: 100,
      },
    },
    {
      name: 'Example 1',
      scores: {
        ja0: 50,
        ja1: 25,
        ja2: 25,
        so0: 50,
        ma0: 100,
        ma1: 100,
        sc2: 100,
        sc3: 100,
        en0: 120,
        en1: 80,
      },
    },
  ])

  return { list }
})
