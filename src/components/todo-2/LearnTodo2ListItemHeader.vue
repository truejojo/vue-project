<script setup>
defineProps({
  priority: Boolean
})
</script>

<template>
  <h3 :class="[priority ? 'text-danger' : 'text-info']">
    <slot></slot>
  </h3>
</template>
