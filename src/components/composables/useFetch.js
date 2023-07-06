import { ref, onMounted } from 'vue';

const useFetch = (url) => {
  const data = ref(null);
  const error = ref(null);
  const isLoading = ref(false);

  onMounted(async () => {
    isLoading.value = true;

    try {
      const response = await fetch(url);
      // const jsonData = await response.json();
      // data.value = jsonData;
      data.value = await response.json();
    } catch (err) {
      error.value = err.message;
    }

    isLoading.value = false;
  });

  return  [data, error, isLoading] ;
};

export default useFetch;