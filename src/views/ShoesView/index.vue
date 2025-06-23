<!-- ShoesView -->
<template>
  <AppBreadcrumbs :breadcrumbs="breadcrumbs" />
  <app-page tag="main" class="container">
    <div class="sliders">
      <!-- <AppProductSwiper /> -->
      <AppProductSwiperTwo />
    </div>

    <!-- <AppHeading title="Обувь" /> -->

    <!-- <router-link :to="PATH_CROSSOVKY">Кроссовки</router-link> -->
    <!-- <router-link :to="PATH_KEDY">Кеды</router-link> -->
  </app-page>
</template>

<script setup>
import { ref } from 'vue'
import AppPage from '@/layouts/AppPage.vue'
// import AppHeading from '@/components/AppHeading.vue'
import AppBreadcrumbs from '@/components/breadcrumbs/AppBreadcrumbs.vue'
import {
  PATH_SHOES,
  // PATH_CROSSOVKY, PATH_KEDY
} from '@/mock/routes'
// import AppProductSwiper from '@/components/swiper/AppProductSwiper.vue'
import AppProductSwiperTwo from '@/components/swiper/AppProductSwiperTwo.vue'

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
  overflow: hidden;
}
.sliders {
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  /* max-width: 1360px; */
  /* overflow: hidden; */
  /* padding-right: 20px; */
}
</style>
