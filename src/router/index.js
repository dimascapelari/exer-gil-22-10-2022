import { createRouter, createWebHistory } from 'vue-router'
import Clientes from '../views/Clientes/index.vue'
import Produtos from '../views/Produtos/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Clientes
  },
  {
    path: '/about',
    name: 'about',
    component: Produtos
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
