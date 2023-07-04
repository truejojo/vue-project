<script setup>
import { ref } from 'vue'
const MIN_NEW_TODO_LENGTH = 3
const MAX_NEW_TODO_LENGTH = 25

const placeholder = ref('Mein neues Todo...')

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
const newTodoInput = ref('')
const newTodoPriority = ref(false)

const addTodo = () => {
  newTodoInput.value.length > 0 &&
    (todos.value = [
      {
        id: todos.value.length + 1,
        task: newTodoInput.value,
        done: false,
        priority: newTodoPriority.value
      },
      ...todos.value
    ])
  newTodoInput.value = ''
  newTodoPriority.value = false
}
</script>

<template>
  <div>
   <form @submit.prevent="addTodo" class="border rounded p-2 p-md-4 mb-2 mb-md-4">
    <div>
      <input
        v-model.trim="newTodoInput"
        type="text"
        :placeholder="placeholder"
        :maxlength="MAX_NEW_TODO_LENGTH"
        class="me-2 me-md-5"
      />
      <label class="me-2 me-md-5">
        <input v-model="newTodoPriority" type="checkbox" />
        Hohe Priorität
      </label>
      <button
        class="btn btn-primary text-white border-0"
        :disabled="newTodoInput.length < MIN_NEW_TODO_LENGTH"
      >
        Add
      </button>
    </div>
    <div>
      <p class="m-0">Neues Todo: {{ newTodoInput.length }} / {{ MAX_NEW_TODO_LENGTH }}</p>
    </div>
  </form>
    <ul class="list-unstyled">
      <li v-for="todo in todos" :key="todo.id">
        <h3 :class="[todo.priority ? 'text-danger' : 'text-info']">{{ todo.task }}</h3>
      </li>
    </ul>
  </div>
</template>
