<!-- BlogView -->
<template>
  <AppLoader v-if="isLoading" />
  <div v-else>
    <AppBreadcrumbs :breadcrumbs="allBlogBreadcrumbs" />
    <app-page tag="main" class="container">
      <AppHeading title="Блог" />
      <ul class="blog-view">
        <li v-for="item in blogs" :key="item.id">
          <AppBlogCard :item="item" />
        </li>
      </ul>
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
import { allBlogBreadcrumbs } from '@/components/breadcrumbs/breadcrumbs-pages/all-blog-breadcrumbs'
import AppBlogCard from '@/components/blog/AppBlogCard.vue'

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
    }

    isLoading.value = false
  } catch (error) {
    console.log(error)
  }
})
</script>

<style scoped>
.blog-view {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 40px;
  padding-top: 30px;
}
@media (max-width: 1023px) {
  .blog-view {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    padding-top: 25px;
  }
}
@media (max-width: 767px) {
  .blog-view {
    grid-template-columns: 1fr;
    padding-top: 15px;
  }
}
</style>
