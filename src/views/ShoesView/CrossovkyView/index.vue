<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <AppBreadcrumbs :breadcrumbs="breadcrumbs" />
  <app-page>
    <app-container>
      <app-left></app-left>
      <app-right>
        <app-heading title="Кроссовки" quantity="1746"></app-heading>
      </app-right>
    </app-container>
  </app-page>
</template>

<script setup>
import { ref } from 'vue'
import AppPage from '@/layouts/AppPage.vue'
import AppContainer from '@/layouts/AppContainer.vue'
import AppLeft from '@/layouts/AppLeft.vue'
import AppRight from '@/layouts/AppRight.vue'
import AppHeading from '@/components/AppHeading.vue'
import AppBreadcrumbs from '@/components/breadcrumbs/AppBreadcrumbs.vue'
import { PATH_SHOES, PATH_CROSSOVKY } from '@/mock/routes'

const breadcrumbs = ref([
  { name: 'Главная', path: '/', content: '1' },
  {
    name: 'Обувь',
    path: PATH_SHOES,
    content: '2',
  },
  {
    name: 'Кроссовки',
    path: PATH_CROSSOVKY,
    content: 'last',
  },
])
</script>

<style scoped></style>
