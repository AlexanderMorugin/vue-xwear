<template>
  <ul class="footer-social">
    <li>
      <a target="_blank" href="https://t.me/имя_пользователя">
        <img src="/icons/icon-telegramm.png" alt="Телеграм" class="footer-social-icon" />
      </a>
    </li>
    <li>
      <a target="_blank" href="https://wa.me/+79001111111">
        <img src="/icons/icon-whatsapp.png" alt="Вотсап" class="footer-social-icon" />
      </a>
    </li>
    <li>
      <a target="_blank" href="https://vk.com/имя_пользователя">
        <img src="/icons/icon-wk.png" alt="ВКонтакте" class="footer-social-icon" />
      </a>
    </li>
  </ul>
</template>

<style scoped>
.footer-social {
  display: flex;
  gap: 10px;
  width: fit-content;
  padding-top: 21px;
  padding-bottom: 20px;
}
.footer-social-icon {
  width: 40px;
}
</style>
