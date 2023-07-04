<script setup>
import { ref } from 'vue'

const MIN_NEW_TODO_LENGTH = 3
const MAX_NEW_TODO_LENGTH = 25

const placeholder = ref('Mein neues Todo...')
</script>

<template>
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
</template>
