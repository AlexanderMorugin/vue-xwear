<template>
  <h2 class="contact-header">{{ props.title }}</h2>
</template>

<script setup>
const props = defineProps(['title'])
</script>

<style scoped>
.contact-header {
  font-weight: 800;
  font-size: 23px;
  line-height: 36px;
  text-transform: uppercase;
  color: var(--black-thirdary);
}
</style>
