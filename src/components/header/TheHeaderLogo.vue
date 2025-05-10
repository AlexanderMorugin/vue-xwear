<template>
  <div class="logo-box">
    <AppLogo place="header" />
    <TheMenuButton />
  </div>
</template>

<script setup>
import AppLogo from '@/components/logo/AppLogo.vue'
import TheMenuButton from '@/components/header/TheMenuButton.vue'
</script>

<style scoped>
.logo-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 85px;
}
@media (max-width: 1023px) {
  .logo-box {
    max-width: 160px;
  }
}
@media (max-width: 767px) {
  .logo-box {
    display: grid;
    grid-template-columns: 1fr 1fr 84px;
    grid-template-areas: 'button logo';
  }
}
</style>
