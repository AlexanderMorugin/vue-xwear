<!-- ClothesView -->
<template>
  <AppLoader v-if="isLoading" />
  <div v-else>
    <AppBreadcrumbs :breadcrumbs="breadcrumbs" />
    <app-page tag="main" class="container">
      <AppHeading title="Одежда" />
      <AppClothesIsEmpty />
    </app-page>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppLoader from '@/components/loader/AppLoader.vue'
import AppPage from '@/layouts/AppPage.vue'
import AppBreadcrumbs from '@/components/breadcrumbs/AppBreadcrumbs.vue'
import AppHeading from '@/components/AppHeading.vue'
import AppClothesIsEmpty from '@/components/clothes/AppClothesIsEmpty.vue'
import { PATH_CLOTHES } from '../mock/routes'

const breadcrumbs = ref([
  { name: 'Главная', path: '/', content: '1' },
  {
    name: 'Одежда',
    path: PATH_CLOTHES,
    content: 'last',
  },
])
</script>
