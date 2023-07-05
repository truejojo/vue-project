<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import useLearnTodoApi from '../components/api/useLearnTodoApi'
import HeaderView from '../components/common/HeaderView.vue'
import LearnTodoList from '../components/todo/LearnTodoList.vue'

const {todos, deleteTodo, toggleDone} = useLearnTodoApi()

const title = ref('Vue Projekt')
const subTitle = ref('Willkommen auf dieser Webseite')
</script>

<template>
  <div>
    <HeaderView :title="title" class="text-center">
      <template #subTitle>{{ subTitle }}</template>
    </HeaderView>

    <!--HeaderView mit h2 anstatt h1, div anstatt header, wie?-->
    <div class="mb-3">
      <h2 class="display-2 mb-0">Meine Lern Todo's</h2>
      <p class="lead text-info mb-0">Für neue Todo's, geh bitte auf die Seite: <RouterLink class="text-warning" to="/todo">Todo</RouterLink></p>
    </div>

    <LearnTodoList :todos="todos" @deleteTodo="deleteTodo" @toggleDone="toggleDone" />
  </div>
</template>
