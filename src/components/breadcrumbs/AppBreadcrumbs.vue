<template>
  <div class="breadcrumbs">
    <ul class="breadcrumbs-list">
      <li v-for="item in props.breadcrumbs" :key="item.name">
        <div v-if="item.content !== 'last'">
          <router-link :to="item.path" class="breadcrumb link">{{ item.name }} </router-link>
          <span class="breadcrumb slash">/</span>
        </div>
        <span v-else class="breadcrumb active">{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps(['breadcrumbs'])
</script>

<style scoped>
.breadcrumbs {
  height: 20px;
  margin-top: 12px;
  overflow: hidden;
  padding: 0 10px;
}
@media (max-width: 1023px) {
  .breadcrumbs {
    margin-top: 11px;
    padding: 0 50px;
  }
}
@media (max-width: 767px) {
  .breadcrumbs {
    margin-top: 13px;
    padding: 0 10px;
  }
}
.breadcrumbs-list {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
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
  display: flex;
  flex-wrap: nowrap;
  color: var(--color-link-breadcrumbs-active);
}
</style>
