<template>
  <img @click.stop :src="props.image" :alt="props.title" class="modal-image" />
  <p @click.stop class="modal-title">{{ props.title }}</p>
</template>

<script setup>
const props = defineProps(['image', 'title'])
</script>

<style scoped>
.modal-image {
  width: 100%;
  height: auto;
  max-height: 800px;
  object-fit: cover;
}
.modal-title {
  line-height: 32px;
  font-size: 26px;
  font-weight: 600;
  color: var(--white-primary);
}
</style>
