<template>
  <Teleport to="body" v-if="props.isFiltersForMobileOpen">
    <div class="filters-menu-overlay" @click="$emit('closeFiltersForMobile')">
      <!-- Блок верхних кнопок, показывается при разрешении менее 768px -->
      <div v-if="isScreenMedium" @click.stop class="filters-menu-top-buttons">
        <!-- Сброс фильтров -->
        <AppFilterClose @closeFiltersForMobile="$emit('closeFiltersForMobile')" />
        <AppFilterReset @resetFilters="$emit('resetFilters')" />
      </div>

      <div @click.stop class="filters-menu">
        <!-- Кнопка крестик, показывается при разрешении более 768px -->
        <button
          v-if="!isScreenMedium"
          class="filters-close"
          @click="$emit('closeFiltersForMobile')"
        >
          <img src="/icons/icon-close-gray.svg" alt="Закрыть" />
        </button>

        <slot />
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { useResizeMedium } from '@/use/useResizeMedium'
import AppFilterReset from '@/components/filters/AppFilterReset.vue'
import AppFilterClose from '@/components/filters/AppFilterClose.vue'

// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['closeFiltersForMobile', 'resetFilters'])
const props = defineProps(['isFiltersForMobileOpen'])

const { isScreenMedium } = useResizeMedium()
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
  display: flex;
  flex-direction: column;
  gap: 30px;
}
@media (max-width: 767px) {
  .filters-menu-overlay {
    align-items: center;
    padding-top: 50px;
    padding-right: 10px;
    padding-left: 10px;
  }
}
.filters-menu-top-buttons {
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: slide-out 300ms ease-in-out;
}
.filters-menu {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 394px;
  background: var(--white-primary);
  height: 100%;
  padding: 34px 38px;
  animation: slide-in 300ms ease-in-out;
}
@media (max-width: 767px) {
  .filters-menu {
    gap: 15px;
    max-height: 100%;
    border: 1px solid var(--gray-light-fivedary);
    border-radius: 5px;
    padding: 21px 12px;
    overflow-y: scroll;
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
@keyframes slide-out {
  from {
    opacity: 0;
    transform: translateX(100%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
