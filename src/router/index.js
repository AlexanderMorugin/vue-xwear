import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('../views/HomeView.vue'),
    meta: { layout: 'main' },
  },
  {
    path: '/clothes',
    name: 'ClothesView',
    component: () => import('../views/ClothesView.vue'),
    meta: { layout: 'main' },
  },
  {
    path: '/shoes',
    name: 'ShoesView',
    component: () => import('../views/ShoesView.vue'),
    meta: { layout: 'main' },
  },
  {
    path: '/accessories',
    name: 'AccessoriesView',
    component: () => import('../views/AccessoriesView.vue'),
    meta: { layout: 'main' },
  },
  {
    path: '/brands',
    name: 'BrandsView',
    component: () => import('../views/BrandsView.vue'),
    meta: { layout: 'main' },
  },
  {
    path: '/calculation',
    name: 'CalculationView',
    component: () => import('../views/CalculationView.vue'),
    meta: { layout: 'main' },
  },
  {
    path: '/information',
    name: 'InformationView',
    component: () => import('../views/InformationView.vue'),
    meta: { layout: 'main' },
  },
  {
    path: '/search',
    name: 'SearchView',
    component: () => import('../views/SearchView.vue'),
    meta: { layout: 'main' },
  },
  {
    path: '/favorite',
    name: 'FavoriteView',
    component: () => import('../views/FavoriteView.vue'),
    meta: { layout: 'main' },
  },
  {
    path: '/profile',
    name: 'ProfileView',
    component: () => import('../views/ProfileView.vue'),
    meta: { layout: 'main' },
  },
  {
    path: '/cart',
    name: 'CartView',
    component: () => import('../views/CartView.vue'),
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
