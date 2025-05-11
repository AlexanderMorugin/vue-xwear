<template>
  <ul class="breadcrumbs-list">
    <li v-for="item in props.breadcrumbs" :key="item.name">
      <div v-if="item.content !== 'last'">
        <router-link :to="item.path" class="breadcrumb link">{{ item.name }} </router-link>
        <span class="breadcrumb slash">/</span>
      </div>
      <div v-else class="breadcrumb active">{{ item.name }}</div>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps(['breadcrumbs'])
</script>

<style scoped>
.breadcrumbs-list {
  display: flex;
  width: fit-content;
  width: 100%;
  max-width: 1380px;
  margin: 0 auto;
  padding: 14px 10px 0 10px;
}
@media (max-width: 1023px) {
  .breadcrumbs-list {
    padding: 13px 50px 0 50px;
  }
}
@media (max-width: 767px) {
  .breadcrumbs-list {
    padding: 15px 10px 0 10px;
  }
}
.breadcrumb {
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
}
.link {
  color: var(--color-link-breadcrumbs);
  transition: 0.3s ease all;
}
.link:hover {
  color: var(--color-link-breadcrumbs-hover);
}
.slash {
  color: var(--color-link-breadcrumbs);
  padding-left: 15px;
  padding-right: 15px;
}
.active {
  color: var(--color-link-breadcrumbs-active);
}
</style>
