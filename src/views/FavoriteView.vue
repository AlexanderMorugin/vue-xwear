<!-- FavoriteView
<template>
  <AppLoader v-if="isLoading" />
  <div v-else>
    <AppBreadcrumbs :breadcrumbs="breadcrumbs" />
    <app-page tag="main" class="container">
      <AppHeading title="Избранные товары" />
      <AppFavoriteIsEmpty />
    </app-page>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppPage from '@/layouts/AppPage.vue'
import AppBreadcrumbs from '@/components/breadcrumbs/AppBreadcrumbs.vue'
import AppHeading from '@/components/AppHeading.vue'
import AppFavoriteIsEmpty from '@/components/favorite/AppFavoriteIsEmpty.vue'
import { PATH_FAVORITE } from '@/mock/routes'

const breadcrumbs = ref([
  { name: 'Главная', path: '/', content: '1' },
  {
    name: 'Избранные',
    path: PATH_FAVORITE,
    content: 'last',
  },
])
</script> -->
