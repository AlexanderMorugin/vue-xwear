import { createRouter, createWebHistory } from 'vue-router'
import {
  PATH_CLOTHES,
  PATH_SHOES,
  PATH_KEDY,
  PATH_CURRENT_KEDA,
  PATH_CROSSOVKY,
  PATH_CURRENT_CROSSOVKA,
  PATH_ACCESSORIES,
  PATH_BRANDS,
  PATH_CALCULATION,
  PATH_INFORMATION,
  PATH_SEARCH,
  PATH_PROFILE,
  PATH_CART,
  PATH_ORDER,
  PATH_ADMIN,
  PATH_BLOG,
  PATH_CONTACTS,
  PATH_DELIVERY,
  PATH_PAYMENT,
  PATH_FAQ,
  PATH_PRIVACY,
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
    path: PATH_CURRENT_KEDA,
    name: 'CurrentKedaView',
    component: () => import('../views/ShoesView/CurrentShoesView.vue'),
    meta: { layout: 'main' },
  },
  {
    path: PATH_CROSSOVKY,
    name: 'CrossovkyView',
    component: () => import('../views/ShoesView/CrossovkyView/index.vue'),
    meta: { layout: 'main' },
  },
  {
    path: PATH_CURRENT_CROSSOVKA,
    name: 'CurrentCrossovkaView',
    component: () => import('../views/ShoesView/CurrentShoesView.vue'),
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
    path: PATH_BLOG,
    name: 'BlogView',
    component: () => import('../views/BlogView.vue'),
    meta: { layout: 'main' },
  },
  {
    path: PATH_CONTACTS,
    name: 'ContactView',
    component: () => import('../views/ContactView.vue'),
    meta: { layout: 'main' },
  },
  {
    path: PATH_DELIVERY,
    name: 'DeliveryView',
    component: () => import('../views/DeliveryView.vue'),
    meta: { layout: 'main' },
  },
  {
    path: PATH_PAYMENT,
    name: 'PaymentView',
    component: () => import('../views/PaymentView.vue'),
    meta: { layout: 'main' },
  },
  {
    path: PATH_FAQ,
    name: 'FaqView',
    component: () => import('../views/FaqView.vue'),
    meta: { layout: 'main' },
  },
  {
    path: PATH_PRIVACY,
    name: 'PrivacyView',
    component: () => import('../views/PrivacyView.vue'),
    meta: { layout: 'main' },
  },
  {
    path: PATH_SEARCH,
    name: 'SearchView',
    component: () => import('../views/SearchView.vue'),
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
    path: PATH_ORDER,
    name: 'OrderView',
    component: () => import('../views/OrderView.vue'),
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
  // linkActiveClass: 'active',
  // linkExactActiveClass: 'active',
})

export default router
