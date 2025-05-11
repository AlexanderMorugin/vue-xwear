<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <app-page>
    <AppBreadcrumbs :breadcrumbs="breadcrumbs" />
    <h1 class="title">Shoes View</h1>
  </app-page>
</template>

<script setup>
import { ref } from 'vue'
import AppPage from '@/layouts/AppPage.vue'
import AppBreadcrumbs from '@/components/breadcrumbs/AppBreadcrumbs.vue'
import { PATH_SHOES, PATH_KEDY } from '@/mock/routes'

const breadcrumbs = ref([
  { name: 'Главная', path: '/', content: '1' },
  {
    name: 'Обувь',
    path: PATH_SHOES,
    content: '2',
  },
  {
    name: 'Кеды',
    path: PATH_KEDY,
    content: 'last',
  },
])
</script>

<style scoped>
.title {
  padding-top: 48px;
}
</style>
