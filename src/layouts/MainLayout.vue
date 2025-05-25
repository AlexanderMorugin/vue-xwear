<template>
  <AppHeader />
  <div class="main-layout">
    <router-view />
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/header/AppHeader.vue'
import AppFooter from '@/components/footer/AppFooter.vue'
</script>

<style scoped>
.main-layout {
  min-height: 100vh;
  margin: 0;
  display: grid;
  grid-template-rows: auto 1fr;
}
</style>
