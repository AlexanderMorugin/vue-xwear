<template>
  <div class="menu-buttons">
    <img
      src="/icons/icon-mobile-menu.svg"
      alt="Кнопка меню"
      class="btn"
      :class="{ active: props.isToggle }"
      v-if="isScreenLarge"
      @click="$emit('toggleHeaderMobileMenuModal')"
    />
    <!-- <router-link :to="`${PATH_SEARCH}`">
      <img src="/icons/icon-search.svg" alt="Кнопка поиска" v-if="isScreenMedium" />
    </router-link> -->
  </div>
</template>

<script setup>
import { useResizeLarge } from '@/use/useResizeLarge'

// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['toggleHeaderMobileMenuModal'])
const props = defineProps(['isToggle'])

const { isScreenLarge } = useResizeLarge()
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
