<script setup>
import { ref } from 'vue'
import ButtonView from '../common/ButtonView.vue'

const NEW_TODO_MIN_LENGTH = 3
const NEW_TODO_MAX_LENGTH = 25

const placeholder = ref('Mein neues Todo...')
const newTodoInput = ref('')
const newTodoPriority = ref(false)

const emit = defineEmits(['addTodo'])

const emitAddTodo = () => {
  const newTodo = newTodoInput.value
  const newPriority = newTodoPriority.value

  newTodoInput.value = ''
  newTodoPriority.value = false

  return emit('addTodo', { newTodo, newPriority })
}
</script>

<template>
  <form @submit.prevent="emitAddTodo" class="border rounded p-2 p-md-4 mb-2 mb-md-4">
    <div class="lead mb-2">
      <input
        v-model.trim="newTodoInput"
        type="text"
        :placeholder="placeholder"
        :maxlength="NEW_TODO_MAX_LENGTH"
        class="me-2 me-md-5 p-1"
      />
      <label class="me-2 me-md-5">
        <input v-model="newTodoPriority" type="checkbox" />
        Hohe Priorität
      </label>
      <ButtonView
        type="submit"
        class="btn-primary border-0"
        :disabled="newTodoInput.length < NEW_TODO_MIN_LENGTH"
      >
        Add
      </ButtonView>
    </div>
    <div>
      <p class="m-0">Neues Todo: {{ newTodoInput.length }} / {{ NEW_TODO_MAX_LENGTH }}</p>
    </div>
  </form>
</template>
