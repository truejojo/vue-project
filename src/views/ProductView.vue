<script setup>
import { FAKE_STORE_API_PRODUCTS } from '../components/api/httpEndpoints.js'
import useFetch from '../components/composables/useFetch.js'
import HeaderView from '../components/common/HeaderView.vue'
import CardView from '../components/common/CardView.vue'
import LoadingView from '../components/error/LoadingView.vue'
import ErrorView from '../components/error/ErrorView.vue'
import ItemsLayout from '../layouts/ItemsLayout.vue'

const [products, productsError, isProductsLoading] = useFetch(FAKE_STORE_API_PRODUCTS)
</script>

<template>
  <div>
    <HeaderView title="Alle Produkte" class="text-center">
      <template #subTitle>Unsere aktuellen und neuesten Produkte</template>
    </HeaderView>

    <LoadingView v-if="isProductsLoading" />
    <ErrorView v-if="productsError" />

    <ItemsLayout v-if="products">
      <div v-for="product in products" :key="product.id">
        <CardView v-if="product" :product="product" />
      </div>
    </ItemsLayout>
  </div>
</template>
