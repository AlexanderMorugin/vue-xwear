<template>
  <div class="filter-box">
    <p class="filter-title">{{ props.title }}</p>
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
    <div class="range-values">
      <input v-model="minPrice" type="number" />
      <input v-model="maxPrice" type="number" />
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
  /* margin: auto 0; */
  text-align: center;
  position: relative;
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
}
.range-slider input[type='range'] {
  position: absolute;
  left: 0;
  bottom: 0;
}
input[type='range']::-webkit-slider-thumb {
  z-index: 20;
  position: relative;
  /* top: 2px; */
  /* margin-top: -7px; */
}
.range-values {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>
