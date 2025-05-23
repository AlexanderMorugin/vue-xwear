<template>
  <button class="filter-close" @click="$emit('closeFiltersForMobile')">
    <p class="filter-close-title">Закрыть</p>
  </button>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['closeFiltersForMobile'])
</script>

<style scoped>
.filter-close {
  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 8px; */
  width: 100%;
  max-width: 318px;
  background: var(--blue-primary);
  border: 1px solid var(--gray-light-fivedary);
  border-radius: 5px;
  padding: 13px;
  cursor: pointer;
  transition: 0.3s ease all;
}
.filter-close:hover {
  border: 1px solid var(--white-primary);
}
.filter-close-title {
  line-height: 20px;
  font-size: 12px;
  font-weight: 800;
  color: var(--black-primary);
  letter-spacing: 1.2px;
  text-transform: uppercase;
}
</style>
