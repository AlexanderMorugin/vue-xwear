<template>
  <app-page>
    <AppBreadcrumbs :breadcrumbs="breadcrumbs" />
    <h1>AccessoriesView</h1>
  </app-page>
</template>

<script setup>
import { ref } from 'vue'
import AppPage from '@/layouts/AppPage.vue'
import AppBreadcrumbs from '../components/breadcrumbs/AppBreadcrumbs.vue'
import { PATH_ACCESSORIES } from '../mock/routes'

const breadcrumbs = ref([
  { name: 'Главная', path: '/', content: '1' },
  {
    name: 'Аксессуары',
    path: PATH_ACCESSORIES,
    content: 'last',
  },
])
</script>
