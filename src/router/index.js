import { createRouter, createWebHistory } from 'vue-router'
import Clientes from '../views/Clientes/index.vue'
import Produtos from '../views/Produtos/index.vue'
import Tabela from '../components/Tabela.vue'

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
  },
  {
    path: '/',
    name: 'tabela',
    component: Tabela
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
