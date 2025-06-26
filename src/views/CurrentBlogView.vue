<template>
  <AppBreadcrumbs :breadcrumbs="breadcrumbs" />
  <app-page tag="main" class="container current-blog">
    <AppLoader v-if="isLoading" />
    <div v-else>
      <h1 class="current-blog-title">{{ currentBlogTitle }}</h1>
      <span class="current-blog-date">{{ currentBlogDate }}</span>

      <!-- Размер картинки меняется в соответствии с шириной экрана -->
      <img
        :src="isScreenMedium ? currentImageNormal : currentImageBig"
        alt="currentBlogTitle"
        class="current-blog-image"
      />

      <p v-if="currentBlog" class="current-blog-text">{{ currentBlog.descriptionOne }}</p>
      <p v-if="currentBlog" class="current-blog-text">{{ currentBlog.descriptionTwo }}</p>
      <p v-if="currentBlog" class="current-blog-text">{{ currentBlog.descriptionThree }}</p>
      <p v-if="currentBlog" class="current-blog-text">{{ currentBlog.descriptionFour }}</p>

      <div class="sliders">
        <AppBlogEmbla />
      </div>
    </div>
  </app-page>
</template>

<script setup>
import { onMounted, watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import AppPage from '@/layouts/AppPage.vue'
import AppBreadcrumbs from '@/components/breadcrumbs/AppBreadcrumbs.vue'
import AppLoader from '@/components/loader/AppLoader.vue'
import { PATH_BLOG } from '@/mock/routes'
import { useResizeMedium } from '@/use/useResizeMedium'
import AppBlogEmbla from '@/components/embla/AppBlogEmbla.vue'

const route = useRoute()
const { isScreenMedium } = useResizeMedium()

const isLoading = ref(false)
const currentBlog = ref(null)
const currentBlogTitle = ref(null)
const currentBlogDate = ref(null)
const currentImageNormal = ref(null)
const currentImageBig = ref(null)

const getCurrentBlogData = async (id) => {
  try {
    isLoading.value = true

    const { data } = await axios.get(
      `https://vue-xwear-default-rtdb.firebaseio.com/blog/${id}.json`,
    )

    currentBlog.value = data
    currentBlogTitle.value = data.title
    currentBlogDate.value = data.date
    currentImageNormal.value = data.imageNormal
    currentImageBig.value = data.imageBig

    isLoading.value = false
  } catch (error) {
    console.log(error)
  }
}

watch(
  () => route.params.id,
  async (newId) => {
    await getCurrentBlogData(newId)
  },
)

onMounted(async () => {
  await getCurrentBlogData(route.params.id)
})

const breadcrumbs = ref([
  { name: 'Главная', path: '/', content: '1' },
  {
    name: 'Блог',
    path: PATH_BLOG,
    content: '2',
  },
  {
    name: currentBlogTitle,
    content: 'last',
  },
])
</script>

<style scoped>
.current-blog {
  overflow: hidden;
}
.current-blog-title {
  line-height: 42px;
  font-size: 31px;
  font-weight: 900;
  color: var(--color-main-heading);
  text-transform: uppercase;
}
@media (max-width: 1023px) {
  .current-blog-title {
    line-height: 40px;
    font-size: 25px;
  }
}
@media (max-width: 767px) {
  .current-blog-title {
    line-height: 22px;
    font-size: 19px;
  }
}
.current-blog-date {
  font-weight: 400;
  line-height: 22px;
  font-size: 14px;
  color: var(--gray-fivedary);
}
.current-blog-image {
  width: 100%;
  border-radius: 10px;
  margin-top: 40px;
}
@media (max-width: 767px) {
  .current-blog-image {
    margin-top: 20px;
  }
}
.current-blog-text {
  font-weight: 400;
  line-height: 26px;
  font-size: 18px;
  color: var(--black-primary);
  padding-top: 40px;
}
@media (max-width: 767px) {
  .current-blog-text {
    font-size: 16px;
    padding-top: 30px;
  }
}
.sliders {
  margin-top: 40px;
}
@media (max-width: 767px) {
  .sliders {
    margin-top: 30px;
  }
}
</style>
