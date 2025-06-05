<template>
  <div class="sort-box">
    <span class="text sort-text">Сортировать: </span>
    <button class="btn" @click="$emit('toggleSorting')">
      <span class="text btn-text">{{
        isDesc ? 'От дешевых к дорогим' : 'От дорогих к дешевым'
      }}</span>
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
  grid-area: sorting;
  display: flex;
  align-items: center;
  gap: 6px;
  width: fit-content;
  padding-top: 20px;
}
/* @media (max-width: 767px) {
  .sort-box {
    justify-self: center;
    align-self: center;
  }
} */
.text {
  /* line-height: 38px; */
  font-size: 13px;
  font-weight: 600;
}
.sort-text {
  color: var(--color-text-sort-box);
}
.btn {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}
.btn-text {
  /* font-size: 13px;
  font-weight: 600; */
  color: var(--color-text-sort-button);
  transition: 0.3s ease all;
}
.btn-text:hover {
  color: var(--color-text-sort-button-active);
}
.arrow {
  width: 10px;
  height: 10px;
  /* object-fit: contain; */
  transition: 0.8s ease all;
}
.arrow-desc {
  transform: rotate(180deg);
}
</style>
