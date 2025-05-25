<!-- CrossovkyView -->
<template>
  <AppLoader v-if="isLoading" />
  <div v-else>
    <AppBreadcrumbs :breadcrumbs="breadcrumbs" />
    <app-page>
      <AppHeading title="Корзина товаров" />
      <AppCartIsEmpty />
    </app-page>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppPage from '@/layouts/AppPage.vue'
import AppBreadcrumbs from '@/components/breadcrumbs/AppBreadcrumbs.vue'
import AppHeading from '@/components/AppHeading.vue'
import AppCartIsEmpty from '@/components/cart/AppCartIsEmpty.vue'
import { PATH_CART } from '@/mock/routes'

const breadcrumbs = ref([
  { name: 'Главная', path: '/', content: '1' },
  {
    name: 'Корзина',
    path: PATH_CART,
    content: 'last',
  },
])
</script>
