<script setup>
import ButtonView from '../common/ButtonView.vue'
// import LearnTodoListItem from './LearnTodoListItem.vue';
// const props = defineProps({
//   todos: Array,
//   deleteTodo: Function,
//   onToggleDone: Function,
// })
defineProps({
  todos: Array
})
const emits = defineEmits(['deleteTodo', 'toggleDone'])
</script>

<template>
  <ul class="list-unstyled">
    <!-- <div
      v-for="todo in props.todos"
      :key="todo.id">
      <LearnTodoListItem :todo="todo" @deleteTodo="props.deleteTodo" @toggleDone="props.toggleDone" ></LearnTodoListItem>
    </div> -->
    <li
      v-for="todo in todos"
      :key="todo.id"
      class="d-flex justify-content-between p-2 mb-2 border rounded"
      :class="{ 'bg-success': todo.done }"
    >
      <h3 :class="[todo.priority ? 'text-danger' : 'text-info']" class="task">{{ todo.task }}</h3>
      <div class="buttons ms-2 d-flex">
        <ButtonView
          @click="emits('toggleDone', todo)"
          :class="[todo.done ? 'btn-primary' : 'btn-info']"
          class="me-2 me-md-2"
        >
          &check;
        </ButtonView>
        <ButtonView @click="emits('deleteTodo', todo)" class="btn-danger" :disabled="!todo.done">
          &cross;
        </ButtonView>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.task {
  word-break: break-all !important;
}
</style>
