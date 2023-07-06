<script setup>
import useFetch from '../../../my-second-vue-project/src/composables/useFetch'
import HeaderView from '../components/common/HeaderView.vue'

const [products, productsError, isProductLoading] = useFetch('https://fakestoreapi.com/products')
</script>

<template>
  <div class="container">
    <HeaderView title="Über mich" class="text-center">
      <template #subTitle>Willkommen auf der About Seite</template>
    </HeaderView>

    <!-- <div class="row gy-3 gy-md-4 gx-4"> -->
    <div class="row row-cols-md-2 row-cols-lg-3 g-3 g-lg-4">
      <div v-if="isProductLoading">Loading...</div>
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
