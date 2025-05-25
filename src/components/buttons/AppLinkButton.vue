<template>
  <router-link :to="props.route" class="link-button">
    <span class="link-button-text">{{ props.title }}</span>
  </router-link>
</template>

<script setup>
const props = defineProps(['title', 'route'])
</script>

<style scoped>
.link-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 66px;
  border-radius: 5px;
  background: var(--black-primary);
  padding: 23px 27px;
  cursor: pointer;
  transition: 0.3s ease all;
}
.link-button:hover {
  background: var(--black-thirdary);
}
.link-button-text {
  font-weight: 800;
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
  color: var(--white-primary);
  letter-spacing: 1.2px;
}
</style>
