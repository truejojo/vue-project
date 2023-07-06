<script setup>
defineProps({
  todos: Array
})

const emits = defineEmits(['deleteTodo', 'toggleDone'])
</script>

<template>
  <ul class="list-unstyled">
    <li
      v-for="todo in todos"
      :key="todo.id"
      class="d-flex justify-content-between p-2 mb-2 border rounded"
      :class="{ 'bg-success': todo.done }"
    >
      <h3 :class="[todo.priority ? 'text-danger' : 'text-info']" class="task">{{ todo.task }}</h3>
      <div class="buttons ms-2 d-flex">
        <button
          @click="emits('toggleDone', todo)"
          :class="[todo.done ? 'btn-primary' : 'btn-info']"
          class="btn me-2 me-md-3"
        >
          &check;
        </button>
        <button @click="emits('deleteTodo', todo)" class="btn btn-danger" :disabled="!todo.done">
          &cross;
        </button>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.task {
  color: orange!important;
  word-break: break-all!important;
}
</style>

<!-- 
import LearnTodoListItem from './LearnTodoListItem.vue'
<LearnTodoListItem v-for="todo in todos" :key="todo.id" :class="{ 'bg-success': todo.done }" :todo="todo" @deleteTodo="deleteTodo" @toggleDone="toggleDone" />
-->
