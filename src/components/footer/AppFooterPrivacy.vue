<template>
  <router-link :to="PATH_PRIVACY" class="footer-privacy">
    <span>Политика конфиденциальности&nbsp;</span>
    <span>Пользовательское соглашение</span>
  </router-link>
</template>

<script setup>
import { PATH_PRIVACY } from '@/mock/routes'
</script>

<style scoped>
.footer-privacy {
  grid-area: privacy;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 11px;
  line-height: 18px;
  text-transform: uppercase;
  text-decoration: underline;
  text-decoration-style: solid;
  color: var(--gray-dark-fourdary);
  transition: 0.3s ease all;
}
.footer-privacy:hover {
  color: var(--white-primary);
}
@media (max-width: 1023px) {
  .footer-privacy {
    margin-top: 20px;
  }
}
@media (max-width: 767px) {
  .footer-privacy {
    margin-top: 32px;
  }
}
</style>
