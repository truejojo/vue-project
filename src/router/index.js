import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoView from '../views/TodoView.vue'
import ProductView from '../views/ProductView.vue'
import Todo2View from '../views/Todo2View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/todos',
      name: 'todos',
      component: TodoView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductView
    },
    {
      path: '/todos2',
      name: 'todos2',
      component: Todo2View
    },
  ]
})

export default router
