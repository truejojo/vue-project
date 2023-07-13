<script setup>
import { ref } from 'vue'
import HeaderView from '../components/common/HeaderView.vue'
import useLearnTodoApi from '../components/api/useLearnTodoApi.js'
/** with slots */
import LearnTodo2List from '../components/todo-2/LearnTodo2List.vue'
import LearnTodo2ListItem from '../components/todo-2/LearnTodo2ListItem.vue'
import LearnTodo2ListItemHeader from '../components/todo-2/LearnTodo2ListItemHeader.vue'
import LearnTodo2Button from '../components/todo-2/LearnTodo2Button.vue'

const NEW_TODO_MIN_LENGTH = 3
const NEW_TODO_MAX_LENGTH = 25

const { todos, addTodo, deleteTodo, toggleDone } = useLearnTodoApi()
const title = ref('Todo 2')
const isInputForm = ref(false)
const placeholder = ref('Mein neues Todo...')
const newTodoInput = ref('')
const newTodoPriority = ref(false)

const toggleIsShowInputForm = () => {
  isInputForm.value = !isInputForm.value
}

const emitAddTodo = () => {
  const newTodo = newTodoInput.value
  const newPriority = newTodoPriority.value

  newTodoInput.value = ''
  newTodoPriority.value = false

  addTodo({ newTodo, newPriority })
}
</script>

<template>
  <div>
    <HeaderView :title="title" class="text-center">
      <template #subTitle>Das lerne ich gerade</template>
      <LearnTodo2Button
        @click="toggleIsShowInputForm"
        class="text-uppercase"
        :class="isInputForm ? 'btn-secondary' : 'btn-info text-danger fw-bold'"
      >
        {{ isInputForm ? 'Fertig' : 'Neues Todo' }}
      </LearnTodo2Button>
    </HeaderView>

    <form
      @submit.prevent="emitAddTodo"
      v-show="isInputForm"
      class="border rounded p-2 p-md-4 mb-2 mb-md-4"
    >
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
        <LearnTodo2Button
          class="btn-primary text-white border-0"
          :disabled="newTodoInput.length < NEW_TODO_MIN_LENGTH"
        >
          Add
        </LearnTodo2Button>
      </div>
      <div>
        <p class="m-0">Neues Todo: {{ newTodoInput.length }} / {{ NEW_TODO_MAX_LENGTH }}</p>
      </div>
    </form>

    <LearnTodo2List v-if="todos">
      <div v-for="todo in todos" :key="todo.id">
        <LearnTodo2ListItem>
          <template #task>
            <LearnTodo2ListItemHeader :priority="todo.priority">
              {{ todo.task }}
            </LearnTodo2ListItemHeader>
          </template>

          <template #button-group>
            <LearnTodo2Button
              @click="toggleDone(todo)"
              class="me-2 me-md-3"
              :class="[todo.done ? 'btn-primary' : 'btn-info']"
            >
              &check;
            </LearnTodo2Button>
            <LearnTodo2Button @click="deleteTodo(todo)" class="btn-danger" :disabled="!todo.done">
              &cross;
            </LearnTodo2Button>
          </template>
        </LearnTodo2ListItem>
      </div>
    </LearnTodo2List>
  </div>
</template>
