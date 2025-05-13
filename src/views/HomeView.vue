<template>
  <app-page>
    <h1>Home View</h1>
    <router-link :to="PATH_SHOES">Обувь</router-link>
    <router-link :to="PATH_CROSSOVKY">Кроссовки</router-link>
    <router-link :to="PATH_KEDY">Кеды</router-link>
  </app-page>
</template>

<script setup>
import AppPage from '@/layouts/AppPage.vue'
import { PATH_SHOES, PATH_CROSSOVKY, PATH_KEDY } from '@/mock/routes'
</script>
