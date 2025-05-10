<template>
  <app-page>
    <AppBreadcrumbs :breadcrumbs="breadcrumbs" />
    <h1>FavoriteView</h1>
  </app-page>
</template>

<script setup>
import { ref } from 'vue'
import AppPage from '@/layouts/AppPage.vue'
import AppBreadcrumbs from '../components/breadcrumbs/AppBreadcrumbs.vue'
import { PATH_FAVORITE } from '../mock/routes'

const breadcrumbs = ref([
  { name: 'Главная', path: '/', content: '1' },
  {
    name: 'Избранные',
    path: PATH_FAVORITE,
    content: 'last',
  },
])
</script>
