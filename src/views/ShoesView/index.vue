<!-- ShoesView -->
<template>
  <AppBreadcrumbs :breadcrumbs="allShoesBreadcrumbs" />
  <app-page tag="main" class="container">
    <AppLoader v-if="isLoading" />

    <div v-else class="sliders">
      <div class="slider-container">
        <AppHeading
          fromPage="shoesView"
          title="Кроссовки"
          :link="PATH_CROSSOVKY"
          :linkText="isScreenMedium ? 'Больше' : 'Больше товаров'"
        />
        <AppProductEmbla :products="crossovky" />
      </div>

      <div class="slider-container">
        <AppHeading
          fromPage="shoesView"
          title="Кеды"
          :link="PATH_KEDY"
          :linkText="isScreenMedium ? 'Больше' : 'Больше товаров'"
        />
        <AppProductEmbla :products="kedy" />
      </div>

      <div class="slider-container">
        <AppHeading
          fromPage="shoesView"
          title="Наш блог"
          :link="PATH_BLOG"
          :linkText="isScreenMedium ? 'Больше' : 'Больше статей'"
        />
        <AppBlogEmbla :blogs="blogs" />
      </div>
    </div>
  </app-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import AppPage from '@/layouts/AppPage.vue'
import AppLoader from '@/components/loader/AppLoader.vue'
import AppHeading from '@/components/AppHeading.vue'
import AppBreadcrumbs from '@/components/breadcrumbs/AppBreadcrumbs.vue'
import { allShoesBreadcrumbs } from '@/components/breadcrumbs/breadcrumbs-pages/all-shoes-breadcrumbs'
import AppProductEmbla from '@/components/embla/AppProductEmbla.vue'
import AppBlogEmbla from '@/components/embla/AppBlogEmbla.vue'
import { PATH_CROSSOVKY, PATH_KEDY, PATH_BLOG } from '@/mock/routes'
import { useResizeMedium } from '@/use/useResizeMedium'

const { isScreenMedium } = useResizeMedium()

const isLoading = ref(false)
const crossovky = ref([])
const kedy = ref([])
const blogs = ref([])

onMounted(async () => {
  try {
    isLoading.value = true

    const serverShoes = await axios.get('https://vue-xwear-default-rtdb.firebaseio.com/shoes.json')
    const serverBlogs = await axios.get('https://vue-xwear-default-rtdb.firebaseio.com/blog.json')

    if (serverShoes.data) {
      // Создаем массив КРОССОВКИ из 8 позиций
      crossovky.value = Object.keys(serverShoes.data)
        .map((key) => {
          return {
            id: key,
            ...serverShoes.data[key],
          }
        })
        .filter((item) => item.category === 'crossovky')
        .slice(0, 8)

      // Создаем массив КЕДЫ из 8 позиций
      kedy.value = Object.keys(serverShoes.data)
        .map((key) => {
          return {
            id: key,
            ...serverShoes.data[key],
          }
        })
        .filter((item) => item.category === 'kedy')
        .slice(0, 8)
    }

    if (serverBlogs.data) {
      // Создаем массив БЛОГ СТАТЕЙ из 8 позиций
      blogs.value = Object.keys(serverBlogs.data)
        .map((key) => {
          return {
            id: key,
            ...serverBlogs.data[key],
          }
        })
        .slice(0, 8)
    }

    isLoading.value = false
  } catch (error) {
    console.log(error)
  }
})
</script>

<style scoped>
.container {
  display: flex;
  gap: 28px;
  overflow: hidden;
}
.sliders {
  display: flex;
  flex-direction: column;
  gap: 80px;
  width: 100%;
  max-width: 1360px;
}
@media (max-width: 1023px) {
  .sliders {
    gap: 60px;
  }
}
.slider-container {
  display: flex;
  flex-direction: column;
  gap: 38px;
  width: 100%;
}
@media (max-width: 1023px) {
  .slider-container {
    gap: 25px;
  }
}
@media (max-width: 767px) {
  .slider-container {
    gap: 15px;
  }
}
</style>
