<script setup lang="ts">
  import { colors, subjects } from '@/globals'
  import { useInputStore } from '@/stores/input'
  import { usePresetsStore } from '@/stores/presets'
  import AppendPreset from './AppendPreset.vue'

  const input = useInputStore()
  const presets = usePresetsStore()

  const sum = (list: number[]) => list.reduce((a, b) => a + b)
  const filter = (obj: { [key: string]: number }) => Object.keys(obj)
    .filter((k: string) => obj[k])
    .reduce((res: { [key: string]: number }, k: string) => {
      res[k] = obj[k]
      return res
    }, {})
</script>

<template>
  <div class="p-6 rounded-box border border-neutral shadow mb-6">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-lg font-bold">計算結果</h2>
      <AppendPreset />
    </div>
    <div v-for="p in presets.list" class="collapse collapse-arrow rounded-none border-b-2">
      <input type="checkbox" />
      <div class="collapse-title text-xl font-medium flex">
        {{ p.name }}
        <div class="ml-6">
          {{ sum(Object.keys(p.scores).map(k => (input.scores[k] / subjects[k].score * p.scores[k]) || 0)) }}
          <span class="text-sm">/ {{ sum(Object.values(p.scores)) }}</span>
          ({{ (Math.round(sum(Object.keys(p.scores).map(k => (input.scores[k] / subjects[k].score * p.scores[k]) || 0)) / sum(Object.values(p.scores)) * 1000) / 10) || 0 }}%)
        </div>
      </div>
      <div class="collapse-content">
        <table class="table table-fixed">
          <tbody>
            <tr v-for="(score, key) in filter(p.scores)" class="items-center">
              <th>
                <div class="flex items-center gap-2">
                  <div :class="`${colors[subjects[key].color]} flex-none h-3 w-3 rounded-full`" />
                  {{ subjects[key].name }}
                </div>
              </th>
              <td class="w-1/4 text-right">
                {{ (input.scores[key] / subjects[key].score * score) || 0 }} / {{ score }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
