<template>
  <sidebar class="left" v-if="!isScreenLarge">
    <slot />
  </sidebar>
</template>

<script setup>
import { useResizeLarge } from '@/use/useResizeLarge'

const { isScreenLarge } = useResizeLarge()
</script>

<style scoped>
.left {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 318px;
}
</style>
