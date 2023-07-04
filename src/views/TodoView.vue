<script setup>
import { ref } from 'vue'
import HeaderView from '../components/common/HeaderView.vue';
import LearnTodos from '../components/todo/LearnTodos.vue';

const title = ref("Meine Lern todo's")
</script>

<template>
  <div>
    <HeaderView :title="title" class="text-center">
      <p class="lead text-info text-uppercase">Das lerne ich gerade</p>
    </HeaderView>
    <LearnTodos />
  </div>
</template>
