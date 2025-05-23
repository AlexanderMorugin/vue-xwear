<template>
  <div class="filter-box">
    <p class="filter-title">{{ props.title }}</p>
    <div class="range-values">
      <input v-model="minPrice" type="number" />
      <span>-</span>
      <input v-model="maxPrice" type="number" />
    </div>
    <div class="range-slider">
      <input
        type="range"
        min="0"
        max="18000"
        step="50"
        v-model.number="minPrice"
        @change="setRangeSliders"
      />
      <input
        type="range"
        min="0"
        max="18000"
        step="50"
        v-model.number="maxPrice"
        @change="setRangeSliders"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['title'])
const minPrice = ref(0)
const maxPrice = ref(18000)

const setRangeSliders = () => {
  if (minPrice.value > maxPrice.value) {
    let temp = maxPrice.value
    maxPrice.value = minPrice.value
    minPrice.value = temp
  }
}
</script>

<style scoped>
.range-slider {
  width: 100%;
  text-align: center;
  position: relative;
  margin-top: 21px;
}
.range-slider input[type='range'] {
  appearance: none;
  /* position: relative; */

  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
/* .range-slider input[type='range']::-webkit-slider-thumb {
  z-index: 20;
  position: relative;
} */
/* .range-slider input[type='range'] {
  position: relative;
  appearance: none;
  border-radius: 999px;
  z-index: 0;
} */
.range-slider input[type='range']::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 4px;
  background: var(--white-fivedary);
  pointer-events: none;
  border-radius: 999px;
}
.range-slider input[type='range']::-webkit-slider-runnable-track {
  appearance: none;
  background: var(--white-fivedary);
  height: 4px;
  border-radius: 999px;
}
.range-slider input[type='range']::-moz-range-track {
  appearance: none;
  background: var(--white-fivedary);
  height: 4px;
  border-radius: 999px;
}
.range-slider input[type='range']::-webkit-slider-thumb {
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
  width: 17px;
  height: 17px;
  background: var(--white-primary);
  border-radius: 999px;
  border: 1px solid var(--gray-light-sixdary);
  box-shadow: 0px 4px 9px 0px #0000001c;
  pointer-events: all;
  appearance: none;
  z-index: 1;
}

.range-values {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.range-values input[type='number'] {
  width: 116px;
  height: 42px;
  background: var(--white-fourdary);
  border-radius: 5px;
  line-height: 30px;
  font-size: 13px;
  font-weight: 400;
  color: var(--gray-dark-secondary);
  padding-left: 16px;
}
</style>

<!-- <style scoped>
.range-slider {
  width: 100%;
  position: relative;
}

.range-slider input[type='range'] {
  position: relative;
  appearance: none;
  border-radius: 999px;
  z-index: 0;
}
.range-slider input[type='range']::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: #00865a;
  pointer-events: none;
  border-radius: 999px;
}
.range-slider input[type='range']::-webkit-slider-runnable-track {
  appearance: none;
  background: #005a3c;
  height: 5px;
  border-radius: 999px;
}
.range-slider input[type='range']::-moz-range-track {
  appearance: none;
  background: #005a3c;
  height: var(--trackHeight);
  border-radius: 999px;
}
.range-slider input[type='range']::-webkit-slider-thumb {
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
  width: 20px;
  height: 20px;
  background: #00bd7e;
  border-radius: 999px;
  pointer-events: all;
  appearance: none;
  z-index: 1;
}
</style> -->
