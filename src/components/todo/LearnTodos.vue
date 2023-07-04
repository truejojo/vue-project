<script setup>
import { ref } from 'vue'
import LearnTodoInputForm from './LearnTodoInputForm.vue'

const todos = ref([
  {
    id: 1,
    task: 'Vue',
    done: false,
    priority: true
  },
  {
    id: 2,
    task: 'Linux',
    done: false,
    priority: false
  },
  {
    id: 3,
    task: 'Docker',
    done: false,
    priority: false
  }
])

const addTodo = ({newTodo, newPriority}) => {
  newTodo.length > 0 &&
    (todos.value = [
      {
        id: todos.value.length + 1,
        task: newTodo,
        done: false,
        priority: newPriority
      },
      ...todos.value
    ])
}
</script>

<template>
  <div>
    <LearnTodoInputForm @addTodo="addTodo"/>
    <ul class="list-unstyled">
      <li v-for="todo in todos" :key="todo.id">
        <h3 :class="[todo.priority ? 'text-danger' : 'text-info']">{{ todo.task }}</h3>
      </li>
    </ul>
  </div>
</template>
