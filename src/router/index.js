import { createRouter, createWebHistory } from 'vue-router'
import {
  PATH_CLOTHES,
  PATH_SHOES,
  PATH_KEDY,
  PATH_CROSSOVKY,
  PATH_ACCESSORIES,
  PATH_BRANDS,
  PATH_CALCULATION,
  PATH_INFORMATION,
  PATH_SEARCH,
  PATH_FAVORITE,
  PATH_PROFILE,
  PATH_CART,
  PATH_ADMIN,
} from '@/mock/routes'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('../views/HomeView.vue'),
    meta: { layout: 'main' },
  },
  {
    path: PATH_CLOTHES,
    name: 'ClothesView',
    component: () => import('../views/ClothesView.vue'),
    meta: { layout: 'main' },
  },
  {
    path: PATH_SHOES,
    name: 'ShoesView',
    component: () => import('../views/ShoesView/index.vue'),
    meta: { layout: 'main' },
  },
  {
    path: PATH_KEDY,
    name: 'KedyView',
    component: () => import('../views/ShoesView/KedyView/index.vue'),
    meta: { layout: 'main' },
  },
  {
    path: PATH_CROSSOVKY,
    name: 'CrossovkyView',
    component: () => import('../views/ShoesView/CrossovkyView/index.vue'),
    meta: { layout: 'main' },
  },
  {
    path: PATH_ACCESSORIES,
    name: 'AccessoriesView',
    component: () => import('../views/AccessoriesView.vue'),
    meta: { layout: 'main' },
  },
  {
    path: PATH_BRANDS,
    name: 'BrandsView',
    component: () => import('../views/BrandsView.vue'),
    meta: { layout: 'main' },
  },
  {
    path: PATH_CALCULATION,
    name: 'CalculationView',
    component: () => import('../views/CalculationView.vue'),
    meta: { layout: 'main' },
  },
  {
    path: PATH_INFORMATION,
    name: 'InformationView',
    component: () => import('../views/InformationView.vue'),
    meta: { layout: 'main' },
  },
  {
    path: PATH_SEARCH,
    name: 'SearchView',
    component: () => import('../views/SearchView.vue'),
    meta: { layout: 'main' },
  },
  {
    path: PATH_FAVORITE,
    name: 'FavoriteView',
    component: () => import('../views/FavoriteView.vue'),
    meta: { layout: 'main' },
  },
  {
    path: PATH_PROFILE,
    name: 'ProfileView',
    component: () => import('../views/ProfileView.vue'),
    meta: { layout: 'main' },
  },
  {
    path: PATH_CART,
    name: 'CartView',
    component: () => import('../views/CartView.vue'),
    meta: { layout: 'main' },
  },
  {
    path: PATH_ADMIN,
    name: 'AdminView',
    component: () => import('../views/AdminView.vue'),
    meta: { layout: 'main' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // linkActiveClass: 'active',
  // linkExactActiveClass: 'active',
})

export default router
