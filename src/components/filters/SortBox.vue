<template>
  <div class="sort-box">
    <span class="text sort-text">Сортировать по </span>
    <button class="btn text btn-text" @click="$emit('toggleSorting')">
      {{ isDesc ? 'От дешевых к дорогим' : 'От дорогих к дешевым' }}
      <img
        src="/icons/icon-arrow-gray.svg"
        alt="Стрелка"
        class="arrow"
        :class="{ 'arrow-desc': props.isDesc }"
      />
    </button>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['toggleSorting'])
const props = defineProps(['isDesc'])
</script>

<style scoped>
.sort-box {
  display: flex;
  align-items: center;
  gap: 6px;
  width: fit-content;
}
@media (max-width: 767px) {
  .sort-box {
    align-self: center;
  }
}
.text {
  line-height: 38px;
  font-size: 13px;
  font-weight: 600;
}
.sort-text {
  color: var(--color-text-sort-box);
}
.btn {
  display: flex;
  gap: 6px;
  cursor: pointer;
}
.btn-text {
  color: var(--color-text-sort-button);
  transition: 0.3s ease all;
}
.btn-text:hover {
  color: var(--color-text-sort-button-active);
}
.arrow {
  width: 10px;
  transition: 0.8s ease all;
}
.arrow-desc {
  transform: rotate(180deg);
}
</style>
