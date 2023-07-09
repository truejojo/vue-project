<!-- Not working!!! -->
<script setup>
defineProps({
  todo: Object
})
const emits = defineEmits(['deleteTodo', 'toggleDone'])
</script>

<template>
  <li class="d-flex justify-content-between p-2 mb-2 border rounded" :class="{ 'bg-success': todo.done }">
    <h3 :class="[todo.priority ? 'text-danger' : 'text-info']">{{ todo.task }}</h3>
    <div class="buttons">
      <button
        @click="emits('toggleDone', todo.id)"
        class="btn me-2 me-md-3"
        :class="[todo.done ? 'btn-primary' : 'btn-info']"
      >
        &check;
      </button>
      <button @click="emits('deleteTodo', todo.id)" class="btn btn-danger" :disabled="!todo.done">
        &cross;
      </button>
    </div>
  </li>
</template>
