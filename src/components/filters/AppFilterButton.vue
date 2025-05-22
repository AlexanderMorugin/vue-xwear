<template>
  <button class="filter-button" @click="$emit('openFiltersForMobile')">
    <span class="filter-button-text">
      {{ isScreenMedium ? 'Фильтры' : 'Открыть фильтры' }}
    </span>
    <img src="/icons/icon-arrow-filter-button.svg" alt="Стрелка" />
  </button>
</template>

<script setup>
import { useResizeMedium } from '@/use/useResizeMedium'
const { isScreenMedium } = useResizeMedium()

// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['openFiltersForMobile'])
</script>

<style scoped>
.filter-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 329px;
  border: 1px solid var(--gray-light-fivedary);
  border-radius: 5px;
  padding: 21px 18px;
  transition: 0.3s ease all;
  cursor: pointer;
}
.filter-button:hover {
  border: 1px solid var(--blue-primary);
}
@media (max-width: 767px) {
  .filter-button {
    padding: 13px 10px;
  }
}
.filter-button-text {
  line-height: 20px;
  font-size: 13px;
  font-weight: 900;
  color: var(--black-primary);
  text-transform: uppercase;
}
@media (max-width: 767px) {
  .filter-button-text {
    font-size: 12px;
  }
}
</style>
