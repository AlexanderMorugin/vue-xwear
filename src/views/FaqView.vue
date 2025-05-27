<!-- FaqView -->
<template>
  <AppLoader v-if="isLoading" />
  <div v-else>
    <AppBreadcrumbs :breadcrumbs="breadcrumbs" />
    <app-page>
      <AppHeading title="FAQ" />
      <AppCurrentProductFaq isPage="true" />
    </app-page>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppPage from '@/layouts/AppPage.vue'
import AppBreadcrumbs from '@/components/breadcrumbs/AppBreadcrumbs.vue'
import AppHeading from '@/components/AppHeading.vue'
import AppCurrentProductFaq from '@/components/product/AppCurrentProductFaq.vue'
import { PATH_FAQ } from '@/mock/routes'

const breadcrumbs = ref([
  { name: 'Главная', path: '/', content: '1' },
  {
    name: 'FAQ',
    path: PATH_FAQ,
    content: 'last',
  },
])
</script>
