<template>
  <div class="sort-box">
    <span class="text sort-text">Сортировать по </span>
    <button class="text btn-text">От дешевых к дорогим</button>
  </div>
</template>

<style scoped>
.sort-box {
  display: flex;
  align-items: center;
  gap: 6px;
  width: fit-content;
}
.text {
  line-height: 38px;
  font-size: 13px;
  font-weight: 600;
}
.sort-text {
  color: var(--color-text-sort-box);
}

.btn-text {
  color: var(--color-text-sort-button);
}
</style>
