<script setup>
import { ref, computed } from 'vue'
import { FAKE_STORE_API_PRODUCTS } from '../components/api/httpEndpoints.js'
import HeaderView from '../components/common/HeaderView.vue'
import CardView from '../components/common/CardView.vue'
import ItemsLayout from '../layouts/ItemsLayout.vue'
import useFetch from '../components/composables/useFetch'

const [products] = useFetch(FAKE_STORE_API_PRODUCTS)

const currentCategory = ref('all')

const categories = computed(() => [
  'all',
  ...new Set(products.value.map((product) => product.category))
])

const filteredProducts = computed(() =>
  currentCategory.value === 'all'
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
      <button
        type="button"
        @click="currentCategory = category"
        v-for="category in categories"
        :key="category"
        class="btn btn-info py-1 px-3"
      >
        {{ category }}
      </button>
    </div>

    <ItemsLayout v-if="products">
      <div v-for="product in filteredProducts" :key="product.id">
        <CardView v-if="product" :product="product" />
      </div>
    </ItemsLayout>
  </div>
</template>
