<template>
  <div class="filter-box">
    <p class="filter-title">{{ props.title }}</p>
    <ul class="filter-checkbox-list">
      <li class="filter-checkbox-item" v-for="(item, index) in props.filterList" :key="index">
        <input
          type="checkbox"
          :id="item"
          :value="item"
          v-model="selectedColor"
          class="checkbox-input"
        />
        <label :for="item" class="checkbox-label">{{ colorNameFormater(item) }}</label>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { colorNameFormater } from '@/utils/color-name-formater'

const selectedColor = defineModel()
const props = defineProps(['title', 'filterList'])
</script>

<style scoped></style>
