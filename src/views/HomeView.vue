<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import useLearnTodoApi from '../components/api/useLearnTodoApi'
import HeaderView from '../components/common/HeaderView.vue'
import LearnTodoList from '../components/todo/LearnTodoList.vue'
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

    <div class="row row-cols-md-2 mb-5">
      <div class="mb-3 d-grid align-content-center">
        <h2 class="display-2 mb-0">Unser Produkt der Woche</h2>
        <p class="lead text-info mb-0">
          Unsere ganzen Produkte finden Ihr hier
          <RouterLink class="text-warning" to="/product">Produkte</RouterLink>
        </p>
      </div>
      <!-- <div v-if="isProductLoading">Loading...</div> -->
      <!-- <div v-else-if="productError">Sorry, da ist etwas schief gelaufen...</div> -->
      <!-- <div v-else class="card"> -->
      <div class="card">
        <div class="p-3 p-lg-5">
          <img :src="product.image" class="card-img-top" :alt="product.title" />
        </div>
        <div class="card-body">
          <div class="fw-bold d-flex justify-content-between mb-3 mb-md-4 mb-lg-5">
            <span>Preis: {{ product.price }}€</span>
            <span>Kategorie: {{ product.category }}</span>
          </div>
          <h3 class="card-title">{{ product.title }}</h3>
          <p class="card-text">{{ product.description }}</p>
        </div>
        <div class="text-center">
          <p>
            Rate: <span>{{ product.rating.rate }}</span> | Count:
            <span>{{ product.rating.count }}</span>
          </p>
        </div>
      </div>
    </div>

    <!--HeaderView mit h2 anstatt h1, div anstatt header, wie?-->
    <div class="d-md-flex flex-md-row-reverse gap-5">
      <div class="mb-3 d-grid align-content-center w-100">
        <h2 class="display-2 mb-0">Meine Lern Todo's</h2>
        <p class="lead text-info mb-0">
          Für neue Todo's, geh bitte auf die Seite:
          <RouterLink class="text-warning" to="/todo">Todo</RouterLink>
        </p>
      </div>
      <LearnTodoList :todos="todos" @deleteTodo="deleteTodo" @toggleDone="toggleDone" class="w-100"/>
    </div>
  </div>
</template>


