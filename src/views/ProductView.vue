<script setup>
import HeaderView from '../components/common/HeaderView.vue'
import useFetch from '../components/composables/useFetch.js'
import { FAKE_STORE_API_PRODUCTS } from '../components/api/httpEndpoints.js'

const [products, productsError, isProductsLoading] = useFetch(FAKE_STORE_API_PRODUCTS)
</script>

<template>
  <div class="container">
    <HeaderView title="Alle Produkte" class="text-center">
      <template #subTitle>Unsere aktuellen und neuesten Produkte - Sehen Sie selbst!</template>
    </HeaderView>

    <!-- <div class="row gy-3 gy-md-4 gx-4"> -->
    <div class="row row-cols-md-2 row-cols-lg-3 g-3 g-lg-4">
      <div v-if="isProductsLoading">Loading...</div>
      <div v-else-if="productsError">Sorry, da ist etwas schief gelaufen...</div>
      <div v-else class="card" v-for="product in products" :key="product.id">
        <!-- <div class="col-12 col-md-6 col-lg-4 card" v-for="product in products" :key="product.id"> -->
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
  </div>
</template>
