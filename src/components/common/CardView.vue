<script setup>
defineProps({
  product:Object
})
</script>

<template>

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
</template>
