<script setup>
defineProps({
  classNames: String,
  to: String,
})
</script>

<template>
  <RouterLink :class="classNames" :to="to">
    <slot></slot>
  </RouterLink>
</template>