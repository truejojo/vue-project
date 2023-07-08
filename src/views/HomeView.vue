<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import useLearnTodoApi from '../components/api/useLearnTodoApi'
import LearnTodoList from '../components/todo/LearnTodoList.vue'
import HeaderView from '../components/common/HeaderView.vue'
import Header2View from '../components/common/Header2View.vue'
import CardView from '../components/common/CardView.vue'
import TextHeadlineLeft2Column from '../layouts/TextHeadlineLeft2Column.vue'
import TextHeadlineRight2Column from '../layouts/TextHeadlineRight2Column.vue'
// import useFetch from '../components/composables/useFetch.js'
// import { FAKE_STORE_API_PRODUCTS } from '../components/api/httpEndpoints.js'

const { todos, deleteTodo, toggleDone } = useLearnTodoApi()

const title = ref('Vue Projekt')
const subTitle = ref('Willkommen auf dieser Webseite')

// const [product, productError, isProductLoading] = useFetch(`${FAKE_STORE_API_PRODUCTS}/1`)
const product = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: { rate: 3.9, count: 120 }
}
</script>

<template>
  <div>
    <HeaderView :title="title" class="text-center">
      <template #subTitle>{{ subTitle }}</template>
    </HeaderView>

    <TextHeadlineLeft2Column>
      <template #headline>
        <Header2View title="Unser Produkt der Woche">
          <template #subTitle>
            Unsere ganzen Produkte finden Ihr hier
            <RouterLink class="text-warning" to="/product">Produkte</RouterLink>
          </template>
        </Header2View>
      </template>
      <CardView v-if="product" :product="product" />
    </TextHeadlineLeft2Column>

    <TextHeadlineRight2Column>
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
    </TextHeadlineRight2Column>
  </div>
</template>
