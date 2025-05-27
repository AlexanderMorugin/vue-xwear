<template>
  <div class="filter-box">
    <p class="filter-title">{{ props.title }}</p>
    <div class="range-values">
      <div class="range-value">
        <input id="minPriceNumber" v-model="minPrice" type="number" />
        <span class="range-value-currency">₽</span>
      </div>
      <span>-</span>
      <div class="range-value">
        <input id="maxPriceNumber" v-model="maxPrice" type="number" />
        <span class="range-value-currency">₽</span>
      </div>
    </div>
    <div class="range-slider">
      <input
        id="minPrice"
        type="range"
        min="0"
        max="20000"
        step="10"
        v-model.number="minPrice"
        @change="setRangeSliders"
      />
      <input
        id="maxPrice"
        type="range"
        min="0"
        max="20000"
        step="10"
        v-model.number="maxPrice"
        @change="setRangeSliders"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['title'])
const minPrice = defineModel('minPrice', { required: true })
const maxPrice = defineModel('maxPrice', { required: true })

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
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
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
.range-value {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 116px;
  height: 42px;
  background: var(--white-fourdary);
  border-radius: 5px;
  padding-left: 16px;
  padding-right: 30px;
}
.range-value-currency {
  line-height: 30px;
  font-size: 13px;
  font-weight: 400;
  color: var(--gray-light-sevendary);
  text-align: right;
}
.range-values input[type='number'] {
  width: 60px;
  line-height: 30px;
  font-size: 13px;
  font-weight: 400;
  color: var(--gray-dark-secondary);
}
.range-values input[type='number']:focus {
  outline: 0;
}
</style>
