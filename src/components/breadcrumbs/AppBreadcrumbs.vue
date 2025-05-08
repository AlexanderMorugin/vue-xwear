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
  margin-top: 14px;
}
.breadcrumb {
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
}
.link {
  color: var(--color-link-breadcrumbs);
  transition: 0.3s;
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
