<template>
  <component :is="props.tag" class="main">
    <slot />
  </component>
</template>

<script setup>
const props = defineProps(['tag'])
</script>

<style scoped>
.main {
  width: 100%;
  max-width: 1380px;
  margin: 0 auto;
}
</style>
