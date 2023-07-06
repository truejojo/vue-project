<script setup>
import { ref, onMounted } from 'vue'
import HeaderView from '../components/common/HeaderView.vue'

// const photos = ref([])
const data = ref([])

onMounted(() => {
  const fetchData = async (url) => {
    const response = await fetch(url)
    data.value = await response.json()
    console.log(data.value.photo)
    console.log(data.value.photo.title)
  }

  const URL = 'https://api.slingacademy.com/v1/sample-data/photos/1'
  fetchData(URL)
})
</script>

<template>
  <div>
    <HeaderView title="Über mich" class="text-center">
      <template #subTitle>Willkommen auf der About Seite</template>
    </HeaderView>

    <section class="row">
      <!-- <p v-if="isLoading">Loading...</p> -->
      <div class="posts"></div>
      <div class="card">
        <div class="card-body">
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <!-- <p v-if="error">Opssss, da ist was schief gelaufen...</p> -->
    </section>
  </div>
</template>
