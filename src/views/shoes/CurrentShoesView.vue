<template>
  <AppBreadcrumbs :breadcrumbs="breadcrumbs" />
  <app-page tag="main" class="container current-shoes">
    <AppCurrentProductCard v-if="product" :product="product" :currentId="currentId" />

    <!-- Слайдер показывает подобную по цвету обувь  -->
    <div class="current-shoes-slider">
      <h2 class="current-shoes-slider-title">Интересные предложения</h2>
      <AppProductEmbla :products="emblaProducts" />
    </div>
  </app-page>
</template>

<script setup>
import { watch, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import AppPage from '@/layouts/AppPage.vue'
import AppBreadcrumbs from '@/components/breadcrumbs/AppBreadcrumbs.vue'
import AppCurrentProductCard from '@/components/product/AppCurrentProductCard.vue'
import { PATH_SHOES, PATH_CROSSOVKY, PATH_KEDY } from '@/mock/routes'
import AppProductEmbla from '@/components/embla/AppProductEmbla.vue'

const route = useRoute()
const product = ref(null)
const productName = ref(null)
const productCategory = ref(null)
const productColor = ref(null)
const categoryName = ref(null)
const categoryPath = ref(null)
const emblaProducts = ref(null)
const currentId = route.params.id

const getCurrentProduct = async (id) => {
  try {
    const currentProduct = await axios.get(
      `https://vue-xwear-default-rtdb.firebaseio.com/shoes/${id}.json`,
    )

    product.value = currentProduct.data
    productName.value = currentProduct.data.name
    productCategory.value = currentProduct.data.category
    productColor.value = currentProduct.data.color

    if (productCategory.value === 'crossovky') {
      categoryName.value = 'Кроссовки'
      categoryPath.value = PATH_CROSSOVKY
    }
    if (productCategory.value === 'kedy') {
      categoryName.value = 'Кеды'
      categoryPath.value = PATH_KEDY
    }

    await getSameProducts(productColor.value)
  } catch (error) {
    console.log(error)
  }
}

const getSameProducts = async (indexColor) => {
  const sameProducts = await axios.get('https://vue-xwear-default-rtdb.firebaseio.com/shoes.json')

  if (sameProducts.data) {
    emblaProducts.value = Object.keys(sameProducts.data)
      .map((key) => {
        return {
          id: key,
          ...sameProducts.data[key],
        }
      })
      .filter((item) => item.color === indexColor)
  }
}

watch(
  () => route.params.id,
  async (newId) => {
    await getCurrentProduct(newId)
  },
)

onMounted(async () => {
  await getCurrentProduct(route.params.id)
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

<style scoped>
.current-shoes {
  overflow: hidden;
}
.current-shoes-slider {
  display: flex;
  flex-direction: column;
  gap: 49px;
  margin-top: 94px;
}
@media (max-width: 1023px) {
  .current-shoes-slider {
    gap: 25px;
    margin-top: 60px;
  }
}
@media (max-width: 767px) {
  .current-shoes-slider {
    margin-top: 39px;
  }
}
.current-shoes-slider-title {
  font-weight: 800;
  font-size: 31px;
  line-height: 42px;
  text-transform: uppercase;
  color: var(--black-primary);
}
@media (max-width: 1023px) {
  .current-shoes-slider-title {
    font-size: 25px;
  }
}
@media (max-width: 767px) {
  .current-shoes-slider-title {
    font-size: 19px;
    line-height: 28px;
  }
}
</style>
