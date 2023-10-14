<script setup lang="ts">
  import InputBlock from './components/InputBlock.vue'
  import OutputBlock from './components/OutputBlock.vue'
</script>

<template>
  <header class="navbar bg-base-100">
    <h1 class="btn btn-ghost normal-case text-xl">共通テスト配点計算ツール</h1>
  </header>
  <main class="p-4 max-w-xl mx-auto">
    <InputBlock />
    <OutputBlock />
  </main>
  <footer class="sticky top-[100vh] text-center text-sm p-4" style="top: 100dvh;">
    &copy; 2023 <a href="https://laddge.net" target="_blank" class="link">Laddge</a>
  </footer>
</template>
