<script setup>
import { ref } from 'vue'
import HeaderView from '../components/common/HeaderView.vue'
import ButtonView from '../components/common/ButtonView.vue'
import LearnTodoInputForm from '../components/todo/LearnTodoInputForm.vue'
import LearnTodoList from '../components/todo/LearnTodoList.vue'
import useLearnTodoApi from '../components/api/useLearnTodoApi.js'

const { todos, addTodo, deleteTodo, toggleDone } = useLearnTodoApi()

const title = ref("Meine Lern todo's")
const isInputForm = ref(false)

const toggleIsShowInputForm = () => (isInputForm.value = !isInputForm.value)
</script>

<template>
  <div>
    <HeaderView :title="title" class="text-center">
      <template #subTitle>Das lerne ich gerade</template>
      <ButtonView
        @click="toggleIsShowInputForm"
        :class="isInputForm ? 'btn-secondary' : 'btn-info text-danger fw-bold'"
      >
        {{ isInputForm ? 'Fertig' : 'Neues Todo' }}
      </ButtonView>
    </HeaderView>

    <LearnTodoInputForm @addTodo="addTodo" v-show="isInputForm" />

    <LearnTodoList :todos="todos" @deleteTodo="deleteTodo" @toggleDone="toggleDone" />
  </div>
</template>
