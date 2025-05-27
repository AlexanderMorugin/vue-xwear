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
/* .icon-box {
  position: relative;
  width: 84px;
  height: 98px;
}
.circle {
  position: absolute;
  left: 6px;
  bottom: 4px;
  width: 74px;
  height: 74px;
  border-radius: 50%;
  background: var(--blue-primary);
}
.icon-cart {
  position: relative;
  z-index: 10;
}
.cart-empty-title {
  width: 100%;
  max-width: 350px;
  font-weight: 800;
  font-size: 23px;
  line-height: 36px;
  text-align: center;
  text-transform: uppercase;
  color: var(--black-thirdary);
  padding-top: 20px;
}
.cart-empty-subtitle {
  width: 100%;
  max-width: 550px;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  text-align: center;
  color: var(--gray-dark-thirdary);
  padding-top: 14px;
}
.app-link-button {
  margin-top: 20px;
} */
</style>
