<template>
  <ul class="header-nav">
    <li v-for="link in headerNavLinks" :key="link.name">
      <router-link :to="link.path" class="link">{{ link.name }}</router-link>
    </li>
  </ul>
</template>

<script setup>
import { headerNavLinks } from '@/mock/header-nav-links'
</script>

<style scoped>
.header-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  width: 100%;
  /* max-width: 797px; */
  max-width: 597px;
}

.link {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.8px;
  color: var(--color-link-header);
  transition: 0.3s ease all;
}

.link:hover {
  color: var(--color-link-header-hover);
}
</style>
