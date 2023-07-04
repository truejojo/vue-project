<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div class="vue-app bg-dark text-white">
    <TheHeader />
    <main class="container">
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>

<style lang="scss" scoped>
.vue-app {
  min-height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
