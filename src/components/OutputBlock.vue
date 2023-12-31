<script setup lang="ts">
  import { ref } from 'vue'
  import { colors, subjects } from '@/globals'
  import { useInputStore } from '@/stores/input'
  import { usePresetsStore } from '@/stores/presets'
  import AppendPreset from './AppendPreset.vue'

  const input = useInputStore()
  const presets = usePresetsStore()
  const removeIndex = ref<number | null>(null)
  const removeModal = ref<HTMLDialogElement | null>(null)

  const sum = (list: number[]) => list.reduce((a, b) => a + b, 0)
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
    <div v-for="(p, i) in presets.list" class="collapse collapse-arrow rounded-none border-b-2">
      <input type="checkbox" :aria-label="p.name" />
      <div class="collapse-title text-xl font-medium flex">
        {{ p.name }}
        <div class="ml-6">
          {{ sum(Object.keys(p.scores).map(k => (input.scores[k] * p.scores[k] / subjects[k].score) || 0)) }}
          <span class="text-sm">/ {{ sum(Object.values(filter(p.scores))) }}</span>
          ({{ (Math.round(sum(Object.keys(p.scores).map(k => (input.scores[k] * p.scores[k] / subjects[k].score) || 0)) / sum(Object.values(filter(p.scores))) * 1000) / 10) || 0 }}%)
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
                {{ (input.scores[key] * score / subjects[key].score) || 0 }} / {{ score }}
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-end mt-2">
          <button @click="removeIndex = i; removeModal?.showModal()" class="btn btn-outline btn-error btn-sm">削除する</button>
        </div>
      </div>
    </div>
    <dialog ref="removeModal" class="modal">
      <div v-if="removeIndex != null" class="modal-box">
        <p class="py-4">「{{ presets.list[removeIndex]?.name }}」を削除しますか？</p>
        <div class="modal-action">
          <form method="dialog">
            <button class="btn">キャンセル</button>
          </form>
          <button @click="presets.remove(removeIndex); removeModal?.close()" class="btn btn-error">削除</button>
        </div>
      </div>
    </dialog>
  </div>
</template>
