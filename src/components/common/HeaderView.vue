<script setup>
defineProps({
  title: String
})
</script>

<template>
  <header class="my-3 my-md-5">
    <h1 class="display-1">{{ title }}</h1>
    <slot></slot>
  </header>
</template>
