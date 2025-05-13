<!-- eslint-disable vue/multi-word-component-names -->
<!-- ShoesView -->
<template>
  <AppBreadcrumbs :breadcrumbs="breadcrumbs" />
  <app-page>
    <!-- <app-container>
      <app-left></app-left>
      <app-right> -->
    <AppHeading title="Обувь" />
    <ul>
      <li>
        <router-link :to="PATH_CROSSOVKY"><h2>Кроссовки</h2></router-link>
      </li>
      <li>
        <router-link :to="PATH_KEDY"><h2>Кеды</h2></router-link>
      </li>
    </ul>

    <!-- </app-right>
    </app-container> -->
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
.title {
  padding-top: 48px;
}
</style>
