<script setup>
import { ref } from 'vue'
import HeaderView from '../../components/common/HeaderView.vue'
import LearnTodoInputForm from './LearnTodoInputForm.vue'
import LearnTodoList from './LearnTodoList.vue'

const title = ref("Meine Lern todo's")
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
const isInputForm = ref(false)

const toggleIsShowInputForm = () => isInputForm.value = !isInputForm.value

const addTodo = ({ newTodo, newPriority }) => {
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

const deleteTodo = (id) => (todos.value = todos.value.filter((todo) => todo.id !== id))

const toggleDone = (id) => todos.value = todos.value.map(todo => todo.id === id ? ({...todo, done: !todo.done}) : todo)
</script>

<template>
  <div>
    <HeaderView :title="title" class="text-center">
      <template #secondary>Das lerne ich gerade</template>
      <button
        @click="toggleIsShowInputForm"
        class="btn text-uppercase"
        :class="isInputForm ? 'btn-secondary' : 'btn-info text-danger fw-bold'"
      >
        {{ isInputForm ? 'Fertig' : 'Neues Todo' }}
      </button>
    </HeaderView>

    <LearnTodoInputForm @addTodo="addTodo" v-show="isInputForm" />

    <LearnTodoList :todos="todos" @deleteTodo="deleteTodo" @toggleDone="toggleDone"/>
  </div>
</template>
