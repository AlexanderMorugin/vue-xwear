<template>
  <AppBreadcrumbs :breadcrumbs="breadcrumbs" />
  <app-page tag="main" class="container">
    <AppHeading title="Админ панель" />
    <ProductAddForm />
  </app-page>
</template>

<script setup>
import { ref } from 'vue'
import AppPage from '@/layouts/AppPage.vue'
import AppBreadcrumbs from '@/components/breadcrumbs/AppBreadcrumbs.vue'
import AppHeading from '@/components/AppHeading.vue'
import { PATH_ADMIN } from '@/mock/routes'
import ProductAddForm from '@/components/admin/ProductAddForm.vue'

const breadcrumbs = ref([
  { name: 'Главная', path: '/', content: '1' },

  {
    name: 'Админ панель',
    path: PATH_ADMIN,
    content: 'last',
  },
])
</script>
