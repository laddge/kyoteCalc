<script setup lang="ts">
  const colors: string[] = [  // 教科の色
    'bg-red-500',
    'bg-yellow-500',
    'bg-sky-500',
    'bg-green-500',
    'bg-violet-500',
  ]
  const subjects: [number, string, number][] = [
    // [色, 教科名, 配点]
    [0, '現代文', 100],
    [0, '古文', 50],
    [0, '漢文', 50],
    [1, '社会(1)', 100],
    [1, '社会(2)', 100],
    [2, '数学①', 100],
    [2, '数学②', 100],
    [3, '理科①(1)', 50],
    [3, '理科①(2)', 50],
    [3, '理科②(1)', 100],
    [3, '理科②(2)', 100],
    [4, '英語リーディング', 100],
    [4, '英語リスニング', 100],
    [4, '外国語(英語以外)', 200],
  ]
</script>

<template>
  <div class="p-6 rounded-box border border-neutral shadow mb-6">
    <div class="overflow-x-auto">
      <table class="table table-fixed">
        <tbody>
          <tr v-for="s in subjects" class="items-center">
            <th>
              <div class="flex items-center gap-2">
                <div :class="`${colors[s[0]]} flex-none h-3 w-3 rounded-full`" />
                  {{ s[1] }}
              </div>
            </th>
            <td class="w-24 pr-0">
              <input type="number" placeholder="0" class="input input-bordered input-sm text-right w-full" />
            </td>
            <td class="w-20">
              / {{ s[2] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
