<template>
  <div class="filter-box">
    <p class="filter-title">{{ props.title }}</p>
    <ul class="filter-checkbox-list">
      <li v-for="(item, index) in props.brandList" :key="index" class="filter-checkbox-item">
        <input
          type="checkbox"
          :id="item"
          :value="item"
          v-model="selectedBrands"
          @input="$emit('update:modelValue', $event.target.value)"
        />
        <label :for="item">{{ item }}</label>
      </li>
      <!-- <li>{{ selectedBrands }}</li> -->
    </ul>
  </div>
</template>

<script setup>
// import { ref } from 'vue'

const props = defineProps(['title', 'brandList'])
// eslint-disable-next-line no-unused-vars
let emit = defineEmits(['update:modelValue'])

// const selectedBrands = ref([])
</script>

<style scoped>
.filter-box {
  display: flex;
  flex-direction: column;
  gap: 21px;
  width: 100%;
  height: 300px;
  border: 1px solid var(--gray-light-fivedary);
  border-radius: 5px;
  padding: 25px;
}
.filter-title {
  line-height: 20px;
  font-size: 13px;
  font-weight: 900;
  color: var(--black-primary);
  text-transform: uppercase;
}
.filter-checkbox-list {
}
.filter-checkbox-item {
}
</style>
