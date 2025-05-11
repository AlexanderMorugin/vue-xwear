<template>
  <sidebar class="left" v-if="!isScreenLarge"></sidebar>
</template>

<script setup>
import { useResizeLarge } from '@/use/useResizeLarge'

const { isScreenLarge } = useResizeLarge()
</script>

<style scoped>
.left {
  display: flex;
  width: 318px;
  /* height: 318px; */
  border: 1px solid blue;
}
</style>
