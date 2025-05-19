<!-- eslint-disable vue/multi-word-component-names -->
<!-- KedyView -->
<template>
  <AppBreadcrumbs :breadcrumbs="breadcrumbs" />
  <app-page class="container">
    <app-left></app-left>
    <app-right>
      <AppHeading
        title="Кеды"
        :quantity="kedy.length"
        sortBox="true"
        @toggleSorting="toggleSorting"
        :isDesc="isDesc"
      />
      <AppProductList v-if="kedy.length !== 0" :shoes="sortProductByPrice(kedy)" />
      <p v-else>Кед не обнаружено</p>
    </app-right>
  </app-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import AppPage from '@/layouts/AppPage.vue'
import AppLeft from '@/layouts/AppLeft.vue'
import AppRight from '@/layouts/AppRight.vue'
import AppBreadcrumbs from '@/components/breadcrumbs/AppBreadcrumbs.vue'
import AppHeading from '@/components/AppHeading.vue'
import AppProductList from '@/components/product/AppProductList.vue'
import { PATH_SHOES, PATH_KEDY } from '@/mock/routes'

const breadcrumbs = ref([
  { name: 'Главная', path: '/', content: '1' },
  {
    name: 'Обувь',
    path: PATH_SHOES,
    content: '2',
  },
  {
    name: 'Кеды',
    path: PATH_KEDY,
    content: 'last',
  },
])

const kedy = ref([])
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
      kedy.value = Object.keys(data)
        .map((key) => {
          return {
            id: key,
            ...data[key],
          }
        })
        .filter((item) => item.category === 'kedy')
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
