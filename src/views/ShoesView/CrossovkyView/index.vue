<!-- eslint-disable vue/multi-word-component-names -->
<!-- CrossovkyView -->
<template>
  <AppBreadcrumbs :breadcrumbs="breadcrumbs" />
  <app-page class="container">
    <app-left></app-left>
    <app-right>
      <AppHeading title="Кроссовки" quantity="1746" sortBox="true" />
      <AppProductList v-if="shoes.length !== 0" :shoes="shoes" />
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
.container {
  display: flex;
  gap: 28px;
}
</style>
