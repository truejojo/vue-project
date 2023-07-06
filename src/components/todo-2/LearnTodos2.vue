<script setup>
import { ref } from 'vue'
import HeaderView from '../common/HeaderView.vue'
import useLearnTodoApi from '../api/useLearnTodoApi'
/** with slots */
import LearnTodo2Button from './LearnTodo2Button.vue'
import LearnTodo2ListItem from './LearnTodo2ListItem.vue'
// import LearnTodo2List from './LearnTodo2List.vue'

const { todos, addTodo, deleteTodo, toggleDone } = useLearnTodoApi()

const title = ref('Todo 2')
const isInputForm = ref(false)

const toggleIsShowInputForm = () => {
  isInputForm.value = !isInputForm.value
}

const MIN_NEW_TODO_LENGTH = 3
const MAX_NEW_TODO_LENGTH = 25

const placeholder = ref('Mein neues Todo...')
const newTodoInput = ref('')
const newTodoPriority = ref(false)

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
        <template #label>
          {{ isInputForm ? 'Fertig' : 'Neues Todo' }}
        </template>
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
          :maxlength="MAX_NEW_TODO_LENGTH"
          class="me-2 me-md-5 p-1"
        />
        <label class="me-2 me-md-5">
          <input v-model="newTodoPriority" type="checkbox" />
          Hohe Priorität
        </label>
        <LearnTodo2Button
          class="btn-primary text-white border-0"
          :disabled="newTodoInput.length < MIN_NEW_TODO_LENGTH"
        >
          <template #label> Add </template>
        </LearnTodo2Button>
      </div>
      <div>
        <p class="m-0">Neues Todo: {{ newTodoInput.length }} / {{ MAX_NEW_TODO_LENGTH }}</p>
      </div>
    </form>

    <ul class="list-unstyled">
    <!-- <LearnTodo2List :todos="{todos}"> -->
      <!-- <template name="item"> -->
      <LearnTodo2ListItem v-for="todo in todos" :key="todo.id" :class="{ 'bg-success': todo.done }">
        <template #task>
          <h3 :class="[todo.priority ? 'text-danger' : 'text-info']">{{ todo.task }}</h3>
        </template>
        <template #button-group>
          <div class="buttons">
            <LearnTodo2Button
              @click="toggleDone(todo)"
              class="me-2 me-md-3"
              :class="[todo.done ? 'btn-primary' : 'btn-info']"
            >
              <template #label> &check; </template>
            </LearnTodo2Button>
            <LearnTodo2Button @click="deleteTodo(todo)" class="btn-danger" :disabled="!todo.done">
              <template #label> &cross; </template>
            </LearnTodo2Button>
          </div>
        </template>
      </LearnTodo2ListItem>
    <!-- </template> -->
    <!-- </LearnTodo2List> -->
    </ul>
  </div>
</template>
