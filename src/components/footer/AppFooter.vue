<template>
  <footer class="footer">
    <!-- Блок показывается в мобильной ширине не более 768px -->
    <AppLogo v-if="isScreenMedium" place="footer" />
    <!-- Основные блоки навигации в подвале -->
    <nav class="footer-container">
      <AppFooterBlock
        title="Каталог"
        :links="footerCatalogNavLinks"
        class="catalog"
        status="catalog"
      />
      <AppFooterBlock title="Информация" :links="footerInfoNavLinks" class="info" status="info" />
      <AppFooterBlock title="Контакты" class="contact" status="contact" />
      <AppFooterBlockMailing class="mailing" />
    </nav>

    <!-- Блок показывается в средней ширине не более 1024px -->
    <AppFooterBottomBlock v-if="!isScreenMedium && isScreenLarge" />

    <!-- Блоки показываются в мобильной ширине не более 768px -->
    <AppFooterPrivacy v-if="isScreenMedium" />
    <AppDeveloperLogo v-if="isScreenMedium" />
  </footer>
</template>

<script setup>
import AppFooterBlock from './AppFooterBlock.vue'
import AppFooterBlockMailing from './AppFooterBlockMailing.vue'
import { footerCatalogNavLinks, footerInfoNavLinks } from '@/mock/footer-nav-links'
import { useResizeMedium } from '@/use/useResizeMedium'
import { useResizeLarge } from '@/use/useResizeLarge'
import AppLogo from '@/components/logo/AppLogo.vue'
import AppDeveloperLogo from '@/components/logo/AppDeveloperLogo.vue'
import AppFooterPrivacy from './AppFooterPrivacy.vue'
import AppFooterBottomBlock from './AppFooterBottomBlock.vue'

const { isScreenMedium } = useResizeMedium()
const { isScreenLarge } = useResizeLarge()
</script>

<style scoped>
.footer {
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
  max-width: 1360px;
  margin: 0 auto;
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
    margin-top: 26px;
  }
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
