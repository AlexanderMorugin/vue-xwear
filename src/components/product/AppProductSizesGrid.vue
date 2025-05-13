<template><div class="sizes-grid"></div></template>

<script setup></script>

<style scoped>
.sizes-grid {
  display: grid;
  grid-template: repeat(5, 1fr);
  padding-top: 13px;
  border: 1px solid green;
}
@media (max-width: 1023px) {
  .sizes-grid {
    padding-top: 15px;
  }
}
@media (max-width: 767px) {
  .sizes-grid {
    padding-top: 13px;
  }
}
</style>
