<template>
  <div class="filter-box">
    <p class="filter-title">{{ props.title }}</p>
    <ul class="filter-checkbox-list">
      <li class="filter-checkbox-item" v-for="(item, index) in props.filterList" :key="index">
        <input
          type="checkbox"
          :id="item"
          :value="item"
          v-model="selectedBrands"
          class="checkbox-input"
        />
        <label for="item" class="checkbox-label">{{ item }}</label>
      </li>
    </ul>
  </div>
</template>

<script setup>
const selectedBrands = defineModel()
const props = defineProps(['title', 'filterList'])
</script>

<style scoped></style>
