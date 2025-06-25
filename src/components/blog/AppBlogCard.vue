<template>
  <div class="blog-card">
    <img :src="props.item.imageSmall" :alt="props.item.title" class="blog-image" />
    <h4 class="blog-title">{{ props.item.title }}</h4>
    <p class="blog-description">{{ props.item.descriptionShort }}</p>

    <div class="blog-bottom">
      <!-- Роут на конкретный блог-->
      <router-link :to="`${PATH_BLOG}/${props.item.slug}`" class="blog-link"
        >Узнать подробнее</router-link
      >

      <span class="blog-date">{{ props.item.date }}</span>
    </div>
  </div>
</template>

<script setup>
import { PATH_BLOG } from '@/mock/routes'
const props = defineProps(['item'])
</script>

<style scoped>
.blog-card {
  display: flex;
  flex-direction: column;
  gap: 13px;
  width: 100%;
  max-width: 433px;
}
@media (max-width: 1023px) {
  .blog-card {
    max-width: 324px;
  }
}
@media (max-width: 767px) {
  .blog-card {
    max-width: 300px;
  }
}
.blog-image {
  width: 100%;
  border-radius: 5px;
}
.blog-title {
  min-height: 60px;
  line-height: 30px;
  font-size: 23px;
  font-weight: 700;
  color: var(--black-primary);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
@media (max-width: 767px) {
  .blog-title {
    min-height: 50px;
    line-height: 25px;
    font-size: 18px;
  }
}
.blog-description {
  line-height: 25px;
  font-size: 15px;
  font-weight: 400;
  color: var(--black-thirdary);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
}
.blog-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.blog-link {
  font-weight: 700;
  font-size: 14px;
  line-height: 15px;
  vertical-align: middle;
  text-transform: uppercase;
  color: var(--black-secondary);
  transition: 0.3s ease all;
}
.blog-link:hover {
  color: var(--blue-primary);
}
.blog-date {
  font-weight: 400;
  font-size: 11px;
  line-height: 23px;
  vertical-align: middle;
  text-transform: uppercase;
  color: var(--gray-primary);
  padding-right: 5px;
}
</style>
