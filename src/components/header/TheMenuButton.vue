<template>
  <img
    src="/icons/icon-mobile-menu.svg"
    alt="Кнопка меню"
    class="btn"
    :class="{ active: isToggle }"
    v-if="isScreenLarge"
    @click="toggleButton"
  />
</template>

<script setup>
import { ref } from 'vue'
import { useResizeLarge } from '../../use/useResizeLarge'

const isToggle = ref(false)
const { isScreenLarge } = useResizeLarge()

const toggleButton = () => {
  isToggle.value = !isToggle.value
}
</script>

<style scoped>
.btn {
  cursor: pointer;
  transition: 0.8s ease all;
}
.active {
  transform: rotate(180deg);
}
</style>
