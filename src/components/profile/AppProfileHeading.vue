<template>
  <h2 class="profile-menu-right-title">{{ props.title }}</h2>
</template>

<script setup>
const props = defineProps(['title'])
</script>

<style scoped>
.profile-menu-right-title {
  font-weight: 700;
  font-size: 23px;
  line-height: 30px;
  color: var(--black-thirdary);
}
</style>
