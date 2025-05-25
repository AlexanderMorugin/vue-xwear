<template>
  <footer class="footer">
    <div class="footer-container">
      <AppFooterBlock
        title="Каталог"
        :links="footerCatalogNavLinks"
        class="catalog"
        status="catalog"
      />
      <AppFooterBlock title="Информация" :links="footerInfoNavLinks" class="info" status="info" />
      <AppFooterBlock title="Контакты" class="contact" status="contact" />
      <AppFooterBlock title="Подписка на новости" class="mailing" status="mailing" />
    </div>
  </footer>
</template>

<script setup>
import AppFooterBlock from './AppFooterBlock.vue'
import { footerCatalogNavLinks, footerInfoNavLinks } from '@/mock/footer-nav-links'
</script>

<style scoped>
.footer {
  /* height: 171px; */
  background: var(--black-primary);
  padding: 45px 10px 51px 10px;
}
@media (max-width: 1023px) {
  .footer {
    padding: 38px 50px;
  }
}

@media (max-width: 767px) {
  .footer {
    padding: 28px 10px 36px 10px;
  }
}
.footer-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: 'catalog info contact mailing';
  column-gap: 32px;
  /* width: 100%; */
  /* height: 300px; */
  max-width: 1360px;
  margin: 0 auto;
  /* border: 1px solid red; */
}
@media (max-width: 1023px) {
  .footer-container {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: 'catalog info contact' 'mailing mailing mailing';
    row-gap: 27px;
  }
}
@media (max-width: 767px) {
  .footer-container {
    grid-template-columns: 1fr;
    grid-template-areas: 'info' 'catalog' 'contact' 'mailing';
    row-gap: 0;
  }
}
.grid-one {
  /* width: 100%; */
  /* max-width: 274px; */
  height: 200px;
  /* border: 1px solid white; */
  color: white;
}
.catalog {
  grid-area: catalog;
}
.info {
  grid-area: info;
}
.contact {
  grid-area: contact;
}
.mailing {
  grid-area: mailing;
}
</style>
