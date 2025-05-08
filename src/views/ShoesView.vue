<template>
  <AppBreadcrumbs :breadcrumbs="breadcrumbs" />
  <h1 class="title">Shoes View</h1>
</template>

<script setup>
import { ref } from 'vue'
import AppBreadcrumbs from '../components/breadcrumbs/AppBreadcrumbs.vue'

const breadcrumbs = ref([
  { name: 'Главная', path: '/', content: '1' },
  {
    name: 'Обувь',
    path: '/shoes',
    content: 'last',
  },
])
</script>

<style scoped>
.title {
  padding-top: 48px;
}
</style>
