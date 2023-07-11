<script setup>
// import {ref, onMounted} from 'vue'
// import getFirstTenWordsOfString from '../../utilities/helper.js'
defineProps({
  product: Object
})
// const subDescription = ref("")
//  onMounted(() => {
// subDescription.value = getFirstTenWordsOfString(product.description)
// })
</script>

<template>
  <div v-if="product" class="card">
    <div class="p-3 p-lg-5">
      <img :src="product.image" class="card-img-top" :alt="product.title" />
    </div>
    <div class="card-body">
      <div class="fw-bold d-flex justify-content-between mb-3 mb-md-4 mb-lg-5">
        <span>Preis: {{ product.price }}€</span>
        <span>Kategorie: {{ product.category }}</span>
      </div>
      <h3 class="card-title">{{ product.title }}</h3>
      <p class="card-text">{{ product.description.split(' ').slice(0, 10).join(' ') }}</p>
      <!-- <p class="card-text">{{ subDescription }}</p> -->
    </div>
    <div class="text-center">
      <p>
        <!-- Rate: <span>{{ product.rating.rate }}</span> | Count:
        <span>{{ product.rating.count }}</span> -->
      </p>
    </div>
  </div>
</template>
