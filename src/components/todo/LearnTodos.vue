<script setup>
import { ref } from 'vue'
import HeaderView from '../../components/common/HeaderView.vue'
import LearnTodoInputForm from './LearnTodoInputForm.vue'
import LearnTodoList from './LearnTodoList.vue'
import useLearnTodoApi from '../api/useLearnTodoApi'

const { todos, addTodo, deleteTodo, toggleDone } = useLearnTodoApi()

const title = ref("Meine Lern todo's")
const isInputForm = ref(false)

const toggleIsShowInputForm = () => (isInputForm.value = !isInputForm.value)
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

    <LearnTodoList :todos="todos" @deleteTodo="deleteTodo" @toggleDone="toggleDone" />
  </div>
</template>
