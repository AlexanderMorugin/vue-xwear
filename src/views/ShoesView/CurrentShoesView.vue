<template>
  <AppBreadcrumbs :breadcrumbs="breadcrumbs" />
  <app-page>
    <AppCurrentProductCard v-if="product" :product="product" :currentId="currentId" />
  </app-page>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import AppPage from '@/layouts/AppPage.vue'
import AppBreadcrumbs from '@/components/breadcrumbs/AppBreadcrumbs.vue'
import AppCurrentProductCard from '@/components/product/AppCurrentProductCard.vue'
import { PATH_SHOES, PATH_CROSSOVKY, PATH_KEDY } from '@/mock/routes'

const route = useRoute()
const product = ref(null)
const productName = ref(null)
const productCategory = ref(null)
const categoryName = ref(null)
const categoryPath = ref(null)
const currentId = route.params.id

onMounted(async () => {
  try {
    const { data } = await axios.get(
      `https://vue-xwear-default-rtdb.firebaseio.com/shoes/${currentId}.json`,
    )

    product.value = data
    productName.value = data.name
    productCategory.value = data.category

    if (productCategory.value === 'crossovky') {
      categoryName.value = 'Кроссовки'
      categoryPath.value = PATH_CROSSOVKY
    }
    if (productCategory.value === 'kedy') {
      categoryName.value = 'Кеды'
      categoryPath.value = PATH_KEDY
    }
  } catch (error) {
    console.log(error)
  }
})

const breadcrumbs = ref([
  { name: 'Главная', path: '/', content: '1' },
  {
    name: 'Обувь',
    path: PATH_SHOES,
    content: '2',
  },
  {
    name: categoryName,
    path: categoryPath,
    content: '3',
  },
  {
    name: productName,
    content: 'last',
  },
])
</script>

<style scoped></style>
