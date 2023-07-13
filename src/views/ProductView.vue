<script setup>
import { ref, computed } from 'vue'
import ItemsLayout from '../layouts/ItemsLayout.vue'
import { FAKE_STORE_API_PRODUCTS } from '../components/api/httpEndpoints.js'
import HeaderView from '../components/common/HeaderView.vue'
import CardView from '../components/common/CardView.vue'
import ButtonView from '../components/common/ButtonView.vue'
import useFetch from '../components/composables/useFetch'
import ErrorView from '../components/error/ErrorView.vue'
import LoadingView from '../components/error/LoadingView.vue'

const DEFAULT_CATEGORY = 'all'
const [products, errorProducts, isLoadingProducts] = useFetch(FAKE_STORE_API_PRODUCTS)
const currentCategory = ref(DEFAULT_CATEGORY)

const categories = computed(() => [
  DEFAULT_CATEGORY,
  ...new Set(products.value.map((product) => product.category))
])

const filteredProducts = computed(() =>  
  currentCategory.value === DEFAULT_CATEGORY
    ? products.value
    : products.value.filter((product) => product.category === currentCategory.value)
)
</script>

<template>
  <div>
    <HeaderView title="Alle Produkte" class="text-center">
      <template #subTitle>Unsere aktuellen und neuesten Produkte</template>
    </HeaderView>

    <div class="d-flex gap-2 py-3">
      <ButtonView
        @click="currentCategory = category"
        v-for="category in categories"
        :key="category"
        class="btn btn-info py-1 px-3"
      >
        {{ category }}
      </ButtonView>
    </div>

    <LoadingView v-if="isLoadingProducts" />
    <ErrorView v-if="errorProducts" />
    <ItemsLayout v-if="products">
      <div v-for="product in filteredProducts" :key="product.id">
        <CardView v-if="product" :product="product" />
      </div>
    </ItemsLayout>
  </div>
</template>
