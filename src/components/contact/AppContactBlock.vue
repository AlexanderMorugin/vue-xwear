<template>
  <section class="contact-block">
    <TheContactForm />
    <TheContactInfoBlock />
  </section>
</template>

<script setup>
import TheContactForm from './TheContactForm.vue'
import TheContactInfoBlock from './TheContactInfoBlock.vue'
</script>

<style scoped>
.contact-block {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 60px;
  padding-top: 56px;
}
@media (max-width: 1023px) {
  .contact-block {
    grid-template-columns: 1fr;
    row-gap: 60px;
  }
}
</style>
