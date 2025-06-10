<!-- PaymentView -->
<template>
  <AppLoader v-if="isLoading" />
  <div v-else>
    <AppBreadcrumbs :breadcrumbs="breadcrumbs" />
    <app-page tag="main" class="container">
      <AppHeading title="Оплата" />
      <AppCartIsEmpty />
    </app-page>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppLoader from '@/components/loader/AppLoader.vue'
import AppPage from '@/layouts/AppPage.vue'
import AppBreadcrumbs from '@/components/breadcrumbs/AppBreadcrumbs.vue'
import AppHeading from '@/components/AppHeading.vue'
import AppCartIsEmpty from '@/components/cart/AppCartIsEmpty.vue'
import { PATH_PAYMENT } from '@/mock/routes'

const breadcrumbs = ref([
  { name: 'Главная', path: '/', content: '1' },
  {
    name: 'Оплата',
    path: PATH_PAYMENT,
    content: 'last',
  },
])
</script>
