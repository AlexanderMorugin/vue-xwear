<template>
  <button class="filter-reset" @click="$emit('resetFilters')">
    <img src="/icons/icon-close-filters.svg" alt="Сбросить фильтры" />
    <p class="filter-reset-title">Сбросить все фильтры</p>
  </button>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['resetFilters'])
</script>

<style scoped>
.filter-reset {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  border: 1px solid var(--gray-light-fivedary);
  border-radius: 5px;
  padding: 13px;
  cursor: pointer;
  transition: 0.3s ease all;
}
.filter-reset:hover {
  border: 1px solid var(--blue-primary);
}
.filter-reset-title {
  line-height: 20px;
  font-size: 12px;
  font-weight: 800;
  color: var(--black-primary);
  text-transform: uppercase;
}
</style>
