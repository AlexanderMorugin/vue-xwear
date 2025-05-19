<!-- eslint-disable vue/multi-word-component-names -->
<!-- CrossovkyView -->
<template>
  <AppBreadcrumbs :breadcrumbs="breadcrumbs" />
  <app-page class="container">
    <app-left></app-left>
    <app-right>
      <AppHeading
        title="Кроссовки"
        :quantity="crossovky.length"
        sortBox="true"
        @toggleSorting="toggleSorting"
        :isDesc="isDesc"
      />
      <AppProductList v-if="crossovky.length !== 0" :shoes="sortProductByPrice(crossovky)" />
      <p v-else>Кроссовок не обнаружено</p>
    </app-right>
  </app-page>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import AppPage from '@/layouts/AppPage.vue'
import AppLeft from '@/layouts/AppLeft.vue'
import AppRight from '@/layouts/AppRight.vue'
import AppHeading from '@/components/AppHeading.vue'
import AppBreadcrumbs from '@/components/breadcrumbs/AppBreadcrumbs.vue'
import AppProductList from '@/components/product/AppProductList.vue'
import { PATH_SHOES, PATH_CROSSOVKY } from '@/mock/routes'

const breadcrumbs = ref([
  { name: 'Главная', path: '/', content: '1' },
  {
    name: 'Обувь',
    path: PATH_SHOES,
    content: '2',
  },
  {
    name: 'Кроссовки',
    path: PATH_CROSSOVKY,
    content: 'last',
  },
])

const crossovky = ref([])
const isDesc = ref(false)

const sortProductByPrice = (args) => {
  if (!isDesc.value) {
    return args.sort((a, b) => b.price36 - a.price36) // DESC (по убыванию)
  } else {
    return args.sort((a, b) => a.price36 - b.price36) // ASC (по возрастанию)
  }
}

onMounted(async () => {
  try {
    const { data } = await axios.get('https://vue-xwear-default-rtdb.firebaseio.com/shoes.json')

    if (data) {
      crossovky.value = Object.keys(data)
        .map((key) => {
          return {
            id: key,
            ...data[key],
          }
        })
        .filter((item) => item.category === 'crossovky')
    }
  } catch (error) {
    console.log(error)
  }
})

const toggleSorting = () => {
  isDesc.value = !isDesc.value
}
</script>

<style scoped>
.container {
  display: flex;
  gap: 28px;
}
</style>
