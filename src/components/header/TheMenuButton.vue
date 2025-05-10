<template>
  <div class="menu-buttons">
    <img
      src="/icons/icon-mobile-menu.svg"
      alt="Кнопка меню"
      class="btn"
      :class="{ active: isToggle }"
      v-if="isScreenLarge"
      @click="toggleButton"
    />
    <router-link to="/search">
      <img src="/icons/icon-search.svg" alt="Кнопка поиска" v-if="isScreenMedium" />
    </router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useResizeLarge } from '../../use/useResizeLarge'
import { useResizeMedium } from '../../use/useResizeMedium'

const isToggle = ref(false)
const { isScreenLarge } = useResizeLarge()
const { isScreenMedium } = useResizeMedium()

const toggleButton = () => {
  isToggle.value = !isToggle.value
}
</script>

<style scoped>
.menu-buttons {
  grid-area: button;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

@media (max-width: 1023px) {
  .menu-buttons {
    width: 22px;
  }
}

@media (max-width: 767px) {
  .menu-buttons {
    width: 75px;
  }
}

.btn {
  cursor: pointer;
  transition: 0.8s ease all;
}
.active {
  transform: rotate(180deg);
}
</style>
