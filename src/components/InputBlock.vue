<script setup lang="ts">
  import { colors, subjects } from '@/globals'
  import { useInputStore } from '@/stores/input'

  const input = useInputStore()
</script>

<template>
  <div class="p-6 rounded-box border border-neutral shadow mb-6">
    <h2 class="text-lg font-bold mb-4">得点入力</h2>
    <div class="overflow-x-auto">
      <table class="table table-fixed">
        <tbody>
          <tr v-for="(s, key) in subjects" class="items-center">
            <th>
              <div class="flex items-center gap-2">
                <div :class="`${colors[s.color]} flex-none h-3 w-3 rounded-full`" />
                  {{ s.name }}
              </div>
            </th>
            <td class="w-24 pr-0">
              <input type="number" placeholder="0" v-model="input.scores[key]" class="input input-bordered input-sm text-right w-full" />
            </td>
            <td class="w-20">
              / {{ s.score }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
