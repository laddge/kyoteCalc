<script setup lang="ts">
  import { ref } from 'vue'
  import { colors, subjects } from '@/globals'
  import { usePresetsStore } from '@/stores/presets'

  const presets = usePresetsStore()
  const data = ref<{
    name: string,
    scores: { [key: keyof typeof subjects]: number },
  }>({
    name: '',
    scores: {},
  })

  const init = () => {
    data.value = {
      name: '',
      scores: {},
    }
  }
  const append = () => {
    presets.list.push(data.value)
  }
</script>

<template>
  <button onclick="appendPresetModal.showModal()" @click="init" class="btn btn-sm btn-ghost aspect-square p-0">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  </button>
  <dialog id="appendPresetModal" class="modal">
    <div class="modal-box">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-bold">プリセット追加</h2>
        <form method="dialog">
          <button onclick="appendPresetModal.showModal()" class="btn btn-sm btn-ghost aspect-square p-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </form>
      </div>
      <div class="form-control w-full mb-2">
        <label class="label">
          <span class="label-text">プリセット名</span>
        </label>
        <input type="text" placeholder="○○大△△学部□□学科☆期など" autofocus v-model="data.name" class="input input-bordered w-full" />
      </div>
      <table class="table table-fixed">
        <tbody>
          <tr v-for="(s, key) in subjects" class="items-center">
            <th>
              <div class="flex items-center gap-2">
                <div :class="`${colors[s.color]} flex-none h-3 w-3 rounded-full`" />
                {{ s.name }}
              </div>
            </th>
            <td class="w-1/4 pr-0">
              <div class="flex justify-end items-center gap-2">
                {{ s.score }}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </td>
            <td class="w-1/4">
              <input type="number" placeholder="0" v-model="data.scores[key]" class="input input-bordered input-sm text-right w-full" />
            </td>
          </tr>
        </tbody>
      </table>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn">キャンセル</button>
        </form>
        <button onclick="appendPresetModal.close()" @click="append" :disabled="!data.name || !Object.values(data.scores).reduce((a, b) => a + b)" class="btn btn-primary">追加</button>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
