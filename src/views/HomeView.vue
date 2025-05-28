<template>
  <app-page>
    <h1>Home View</h1>
    <ul>
      <li>
        <router-link :to="PATH_SHOES"><h2>Обувь</h2></router-link>
      </li>
      <li>
        <router-link :to="PATH_CROSSOVKY"><h2>Кроссовки</h2></router-link>
      </li>
      <li>
        <router-link :to="PATH_KEDY"><h2>Кеды</h2></router-link>
      </li>
      <li>
        <router-link :to="PATH_CONTACTS"><h2>Контакты</h2></router-link>
      </li>
    </ul>
  </app-page>
</template>

<script setup>
import AppPage from '@/layouts/AppPage.vue'
import { PATH_SHOES, PATH_CROSSOVKY, PATH_KEDY, PATH_CONTACTS } from '@/mock/routes'
</script>
