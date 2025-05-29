<!-- eslint-disable vue/multi-word-component-names -->
<!-- ShoesView -->
<template>
  <AppBreadcrumbs :breadcrumbs="breadcrumbs" />
  <app-page tag="main" class="container">
    <!-- <app-left></app-left> -->
    <!-- <app-right> -->
    <AppHeading title="Обувь" />
    <router-link :to="PATH_CROSSOVKY">Кроссовки</router-link>
    <router-link :to="PATH_KEDY">Кеды</router-link>
    <!-- <AppProductList v-if="shoes.length !== 0" :shoes="shoes" />
      <p v-else>Кроссовок не обнаружено</p> -->
    <!-- </app-right> -->
  </app-page>
</template>

<script setup>
import { ref } from 'vue'
import AppPage from '@/layouts/AppPage.vue'
// import AppContainer from '@/layouts/AppContainer.vue'
// import AppLeft from '@/layouts/AppLeft.vue'
// import AppRight from '@/layouts/AppRight.vue'
import AppHeading from '@/components/AppHeading.vue'
import AppBreadcrumbs from '@/components/breadcrumbs/AppBreadcrumbs.vue'
import { PATH_SHOES, PATH_CROSSOVKY, PATH_KEDY } from '@/mock/routes'

const breadcrumbs = ref([
  { name: 'Главная', path: '/', content: '1' },
  {
    name: 'Обувь',
    path: PATH_SHOES,
    content: 'last',
  },
])
</script>

<style scoped>
.container {
  display: flex;
  gap: 28px;
}
</style>
