<script setup>
import { ref } from 'vue'
import HeadlineLeft2ColumnLayout from '../layouts/HeadlineLeft2ColumnLayout.vue'
import HeadlineRight2ColumnLayout from '../layouts/HeadlineRight2ColumnLayout.vue'
import useLearnTodoApi from '../components/api/useLearnTodoApi'
import { FAKE_STORE_API_PRODUCTS } from '../components/api/httpEndpoints'
import HeaderView from '../components/common/HeaderView.vue'
import Header2View from '../components/common/Header2View.vue'
import LinkView from '../components/common/LinkView.vue'
import LearnTodoList from '../components/todo/LearnTodoList.vue'
import CardView from '../components/common/CardView.vue'
import useFetch from '../components/composables/useFetch'
import ErrorView from '../components/error/ErrorView.vue'
import LoadingView from '../components/error/LoadingView.vue'

const { todos, deleteTodo, toggleDone } = useLearnTodoApi()

const title = ref('Vue Projekt')
const subTitle = ref('Willkommen auf dieser Webseite')

const [product, errorProduct, isLoadingProduct] = useFetch(FAKE_STORE_API_PRODUCTS + '/1')
</script>

<template>
  <div>
    <HeaderView :title="title" class="text-center">
      <template #subTitle>{{ subTitle }}</template>
    </HeaderView>

    <LoadingView v-if="isLoadingProduct" />
    <ErrorView v-if="errorProduct" />
    <HeadlineLeft2ColumnLayout>
      <template #headline>
        <Header2View title="Unser Produkt der Woche">
          <template #subTitle>
            Unsere ganzen Produkte finden Ihr hier
            <LinkView classNames="text-warning" to="/products">Products</LinkView>
          </template>
        </Header2View>
      </template>
      <CardView v-if="product" :product="product" />
    </HeadlineLeft2ColumnLayout>

    <HeadlineRight2ColumnLayout>
      <template #headline>
        <Header2View title="Meine Lern Todo's">
          <template #subTitle>
            Für neue Todo's, geh bitte auf die Seite:
            <LinkView classNames="text-warning" to="/todos">Todos</LinkView>
          </template>
        </Header2View>
      </template>
      <LearnTodoList
        :todos="todos"
        @deleteTodo="deleteTodo"
        @toggleDone="toggleDone"
        class="w-100"
      />
    </HeadlineRight2ColumnLayout>
  </div>
</template>
