<template>
  <header class="header">
    <div class="header-container">
      <TheHeaderLogo />
      <TheHeaderNav v-if="!isScreenLarge" />
      <TheHeaderProfilePanel />
    </div>
  </header>
</template>

<script setup>
import TheHeaderLogo from '../header/TheHeaderLogo.vue'
import TheHeaderNav from '../header/TheHeaderNav.vue'
import TheHeaderProfilePanel from '../header/TheHeaderProfilePanel.vue'
import { useResizeLarge } from '../../use/useResizeLarge'

const { isScreenLarge } = useResizeLarge()
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  min-height: 100px;
  background: var(--color-background-header);
  padding-left: 10px;
  padding-right: 10px;
}

@media (max-width: 1023px) {
  .header {
    padding-left: 50px;
    padding-right: 50px;
  }
}

@media (max-width: 767px) {
  .header {
    padding-left: 10px;
    padding-right: 13px;
  }
}
.header-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
}
</style>
