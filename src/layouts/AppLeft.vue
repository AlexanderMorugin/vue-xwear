<template>
  <sidebar class="left">
    <slot />
  </sidebar>
</template>

<script setup></script>

<style scoped>
.left {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 318px;
}
</style>
