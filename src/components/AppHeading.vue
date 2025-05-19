<template>
  <div class="heading">
    <div class="title-box">
      <h1 class="title">{{ props.title }}</h1>
      <span class="quantity" v-if="props.quantity">{{ props.quantity }} товаров</span>
    </div>
    <SortBox v-if="props.sortBox" @toggleSorting="$emit('toggleSorting')" :isDesc="props.isDesc" />
  </div>
</template>

<script setup>
import SortBox from '@/components/filters/SortBox.vue'

const props = defineProps(['title', 'quantity', 'sortBox', 'isDesc'])
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['toggleSorting'])
</script>

<style scoped>
.heading {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
@media (max-width: 767px) {
  .heading {
    flex-direction: column;
  }
}
.title-box {
  display: flex;
  flex-direction: column;
}
.title {
  line-height: 42px;
  font-size: 31px;
  font-weight: 900;
  color: var(--color-main-heading);
  text-transform: uppercase;
}
@media (max-width: 1023px) {
  .title {
    line-height: 40px;
    font-size: 25px;
  }
}
@media (max-width: 767px) {
  .title {
    line-height: 22px;
    font-size: 19px;
  }
}
.quantity {
  line-height: 19px;
  font-size: 13px;
  font-weight: 600;
  color: var(--color-text-quantity);
}
</style>
