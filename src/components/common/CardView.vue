<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div v-if="props.product" class="card">
    <div class="p-3 p-lg-5">
      <img :src="props.product.image" class="card-img-top" :alt="props.product.title" />
    </div>
    <div class="card-body">
      <div class="fw-bold d-flex justify-content-between mb-3 mb-md-4 mb-lg-5">
        <span>Preis: {{ props.product.price }}€</span>
        <span>Kategorie: {{ props.product.category }}</span>
      </div>
      <h3 class="card-title">{{ props.product.title }}</h3>
      <p class="card-text">{{ props.product.description }}</p>
    </div>
    <div class="text-center">
      <p>
        <!-- Rate: <span>{{ product.rating.rate }}</span> | Count:
        <span>{{ product.rating.count }}</span> -->
      </p>
    </div>
  </div>
</template>
