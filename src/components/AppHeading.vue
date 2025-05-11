<template>
  <div class="heading">
    <div class="title-box">
      <h1 class="title">{{ props.title }}</h1>
      <span class="quantity" v-if="props.quantity">{{ props.quantity }} товаров</span>
    </div>
    <SortBox />
  </div>
</template>

<script setup>
import SortBox from '@/components/filters/SortBox.vue'

const props = defineProps(['title', 'quantity'])
</script>

<style scoped>
.heading {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  width: 100%;
}
.title {
  line-height: 42px;
  font-size: 31px;
  font-weight: 900;
  color: var(--color-main-heading);
  text-transform: uppercase;
}
.quantity {
  line-height: 19px;
  font-size: 13px;
  font-weight: 600;
  color: var(--color-text-quantity);
}
</style>
