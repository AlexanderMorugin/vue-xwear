<template>
  <header class="header">
    <div class="container">
      <AppLogo place="header" />
      <TheHeaderNav />
      <TheHeaderProfilePanel />
    </div>
  </header>
</template>

<script setup>
import AppLogo from '../logo/AppLogo.vue'
import TheHeaderNav from '../header/TheHeaderNav.vue'
import TheHeaderProfilePanel from '../header/TheHeaderProfilePanel.vue'
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  background: var(--color-background-header);
  padding-left: 10px;
  padding-right: 10px;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1460px;
  border: 1px solid red;
}
</style>
