<template>
  <div class="filters-menu-overlay">
    <div class="filters-menu">
      <button class="filters-close" @click="$emit('closeFiltersForMobile')">
        <img src="/icons/icon-close-gray.svg" alt="Закрыть" />
      </button>

      <!-- <div class="filters-menu-content"> -->
      <slot />
      <!-- </div> -->
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['closeFiltersForMobile'])
</script>

<style scoped>
.filters-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(2px);
  z-index: 10;
}
@media (max-width: 767px) {
  .filters-menu-overlay {
    display: flex;
    justify-content: center;
    padding-top: 228px;
    padding-right: 10px;
    padding-left: 10px;
  }
}
.filters-menu {
  position: relative;
  width: 100%;
  max-width: 394px;
  background: var(--white-primary);
  height: 100%;
  animation: slide-in 300ms ease-in-out;
}
@media (max-width: 767px) {
  .filters-menu {
    border: 1px solid var(--gray-light-fivedary);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
}

.filters-close {
  position: absolute;
  top: 15px;
  right: -37px;
  cursor: pointer;
}
@media (max-width: 767px) {
  .filters-close {
    top: -37px;
    right: 0;
  }
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
