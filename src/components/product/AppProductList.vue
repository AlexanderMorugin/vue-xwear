<template>
  <ul class="product-list">
    <AppProductCard v-for="item in shoes" :key="item.name" :item="item" />
  </ul>
</template>

<script setup>
import AppProductCard from '@/components/product/AppProductCard.vue'
import axios from 'axios'
import { onMounted, ref } from 'vue'

const shoes = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get('https://vue-xwear-default-rtdb.firebaseio.com/shoes.json')

    if (data) {
      shoes.value = Object.keys(data).map((key) => {
        return {
          id: key,
          ...data[key],
        }
      })
    }

    shoes.value.map((item) => item.brand)
  } catch (error) {
    console.log(error)
  }
})
</script>

<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 50px;
  column-gap: 30px;
  justify-items: center;
  padding-top: 13px;
}
@media (max-width: 1023px) {
  .product-list {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 30px;
    padding-top: 27px;
  }
}
@media (max-width: 767px) {
  .product-list {
    row-gap: 20px;
    column-gap: 10px;
    padding-top: 25px;
  }
}
</style>
