<script setup>
defineProps({
  title: String
})
</script>

<template>
  <header class="my-3 my-md-5">
    <h2 class="display-2 mb-0">{{ title }}</h2>
    <p class="lead text-info mb-0">
      <slot name="subTitle"></slot>
    </p>
    <slot></slot>
  </header>
</template>
