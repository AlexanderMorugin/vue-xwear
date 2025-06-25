<!-- BlogView -->
<template>
  <AppLoader v-if="isLoading" />
  <div v-else>
    <AppBreadcrumbs :breadcrumbs="allBlogBreadcrumbs" />
    <app-page tag="main" class="container">
      <AppHeading title="Блог" />
      {{ blogs }}
      <AppCartIsEmpty />
    </app-page>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import AppLoader from '@/components/loader/AppLoader.vue'
import AppPage from '@/layouts/AppPage.vue'
import AppBreadcrumbs from '@/components/breadcrumbs/AppBreadcrumbs.vue'
import AppHeading from '@/components/AppHeading.vue'
import AppCartIsEmpty from '@/components/cart/AppCartIsEmpty.vue'
import { allBlogBreadcrumbs } from '@/components/breadcrumbs/breadcrumbs-pages/all-blog-breadcrumbs'

const isLoading = ref(false)
const blogs = ref([])

onMounted(async () => {
  try {
    isLoading.value = true

    const { data } = await axios.get('https://vue-xwear-default-rtdb.firebaseio.com/blog.json')

    if (data) {
      // Создаем массив КРОССОВКИ из 8 позиций
      blogs.value = Object.keys(data).map((key) => {
        return {
          id: key,
          ...data[key],
        }
      })
      // .filter((item) => item.category === 'crossovky')
      // .slice(0, 8)

      // Создаем массив КЕДЫ из 8 позиций
      // kedy.value = Object.keys(data)
      //   .map((key) => {
      //     return {
      //       id: key,
      //       ...data[key],
      //     }
      //   })
      //   .filter((item) => item.category === 'kedy')
      //   .slice(0, 8)
    }

    isLoading.value = false
  } catch (error) {
    console.log(error)
  }
})
</script>
