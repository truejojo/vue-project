<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import useLearnTodoApi from '../components/api/useLearnTodoApi'
import LearnTodoList from '../components/todo/LearnTodoList.vue'
import HeaderView from '../components/common/HeaderView.vue'
import Header2View from '../components/common/Header2View.vue'
import CardView from '../components/common/CardView.vue'
import HeadlineLeft2ColumnLayout from '../layouts/HeadlineLeft2ColumnLayout.vue'
import HeadlineRight2ColumnLayout from '../layouts/HeadlineRight2ColumnLayout.vue'
import { FAKE_STORE_API_PRODUCTS } from '../components/api/httpEndpoints'
import useFetch from '../components/composables/useFetch'

const { todos, deleteTodo, toggleDone } = useLearnTodoApi()

const title = ref('Vue Projekt')
const subTitle = ref('Willkommen auf dieser Webseite')

// const product = ref(null)
const [product] = useFetch(FAKE_STORE_API_PRODUCTS+"/1")

// onMounted(async () => {
//   try {
//     const response = await fetch(`${FAKE_STORE_API_PRODUCTS}/1`)
//     product.value = await response.json()
//   } catch (err) {
//     console.log(err.message)
//   }
// })
</script>

<template>
  <div>
    <HeaderView :title="title" class="text-center">
      <template #subTitle>{{ subTitle }}</template>
    </HeaderView>

    <HeadlineLeft2ColumnLayout>
      <template #headline>
        <Header2View title="Unser Produkt der Woche">
          <template #subTitle>
            Unsere ganzen Produkte finden Ihr hier
            <RouterLink class="text-warning" to="/product">Produkte</RouterLink>
          </template>
        </Header2View>
      </template>
      <CardView v-if="product" :product="product" />
    </HeadlineLeft2ColumnLayout>

    <HeadlineRight2ColumnLayout>
      <template #headline>
        <Header2View title="Meine Lern Todo's">
          <template #subTitle>
            Für neue Todo's, geh bitte auf die Seite:
            <RouterLink class="text-warning" to="/todo">Todo</RouterLink>
          </template>
        </Header2View>
      </template>
      <LearnTodoList
        :todos="todos"
        @deleteTodo="deleteTodo"
        @toggleDone="toggleDone"
        class="w-100"
      />
    </HeadlineRight2ColumnLayout>
  </div>
</template>
