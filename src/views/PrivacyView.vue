<!-- PrivacyView -->
<template>
  <AppLoader v-if="isLoading" />
  <div v-else>
    <AppBreadcrumbs :breadcrumbs="breadcrumbs" />
    <app-page tag="main" class="container">
      <AppHeading title="Политика конфиденциальности" />
      <AppFavoriteIsEmpty />
    </app-page>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppLoader from '@/components/loader/AppLoader.vue'
import AppPage from '@/layouts/AppPage.vue'
import AppBreadcrumbs from '@/components/breadcrumbs/AppBreadcrumbs.vue'
import AppHeading from '@/components/AppHeading.vue'
import AppFavoriteIsEmpty from '@/components/favorite/AppFavoriteIsEmpty.vue'
import { PATH_PRIVACY } from '@/mock/routes'

const breadcrumbs = ref([
  { name: 'Главная', path: '/', content: '1' },
  {
    name: 'Политика конфиденциальности',
    path: PATH_PRIVACY,
    content: 'last',
  },
])
</script>
