<template>
  <div class="contact-info-block">
    <TheContactHeader title="Связаться с нами" />
    <p class="contact-info-block-subtitle">
      Вы можете связаться с нами любым удобным для вас способом:
    </p>
    <ul class="contact-info-block-details">
      <li class="contact-info-block-item">
        <div class="contact-info-block-image-box">
          <img
            src="/icons/icon-contact-phone.svg"
            alt="Иконка телефона"
            class="contact-info-block-image"
          />
          <div class="contact-info-block-circle" />
        </div>
        <div class="contact-info-block-detail">
          <span class="contact-info-block-detail-title">Телефон:</span>
          <a href="tel:+79936083885" class="contact-info-block-detail-phone">+7 993 608 38 85</a>
        </div>
      </li>

      <li class="contact-info-block-item">
        <div class="contact-info-block-image-box">
          <img
            src="/icons/icon-contact-email.svg"
            alt="Иконка почты"
            class="contact-info-block-image"
          />
          <div class="contact-info-block-circle" />
        </div>
        <div class="contact-info-block-detail">
          <span class="contact-info-block-detail-title">Email:</span>
          <a href="mailto:info@xwear.info" class="contact-info-block-detail-email"
            >info@xwear.info</a
          >
        </div>
      </li>

      <li class="contact-info-block-item">
        <div class="contact-info-block-image-box">
          <img
            src="/icons/icon-contact-schedule.svg"
            alt="Иконка графика работы"
            class="contact-info-block-image"
          />
          <div class="contact-info-block-circle" />
        </div>
        <div class="contact-info-block-detail">
          <span class="contact-info-block-detail-title">График работы:</span>
          <span class="contact-info-block-detail-schedule"
            >Пн-Пт с 9:00 до 18:00 Сб-Вс. Выходные</span
          >
        </div>
      </li>

      <li class="contact-info-block-item">
        <div class="contact-info-block-image-box">
          <img
            src="/icons/icon-contact-globus.svg"
            alt="Иконка сщц сетей"
            class="contact-info-block-image"
          />
          <div class="contact-info-block-circle" />
        </div>
        <div class="contact-info-block-detail">
          <span class="contact-info-block-detail-title">Наши соц.сети:</span>
          <a target="_blank" href="https://vk.com/имя_пользователя">
            <img
              src="/icons/icon-wk.png"
              alt="ВКонтакте"
              class="contact-info-block-detail-social-icon"
            />
          </a>
        </div>
      </li>
    </ul>

    <div class="contact-info-block-socials">
      <a
        target="_blank"
        href="https://t.me/имя_пользователя"
        class="contact-info-block-social-button telegramm"
      >
        <img
          src="/icons/icon-telegramm.png"
          alt="Телеграм"
          class="contact-info-block-social-button-icon"
        />
        <span class="contact-info-block-social-button-text">Написать в Telegram</span>
      </a>
      <a
        target="_blank"
        href="https://wa.me/+79001111111"
        class="contact-info-block-social-button whatsapp"
      >
        <img
          src="/icons/icon-whatsapp.png"
          alt="Вотсап"
          class="contact-info-block-social-button-icon"
        />
        <span class="contact-info-block-social-button-text">Написать в whatsapp</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import TheContactHeader from './TheContactHeader.vue'
</script>

<style scoped>
.contact-info-block {
  display: block;
}
.contact-info-block-subtitle {
  font-weight: 400;
  font-size: 16px;
  line-height: 36px;
  color: var(--gray-dark-sixdary);
  padding-top: 9px;
}
.contact-info-block-details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 73px;
  row-gap: 32px;
}
@media (max-width: 767px) {
  .contact-info-block-details {
    grid-template-columns: 1fr;
  }
}
.contact-info-block-item {
  display: flex;
  gap: 17px;
}
.contact-info-block-image-box {
  position: relative;
  width: 35px;
  height: 32px;
  margin-top: 6px;
}
.contact-info-block-image {
  position: relative;
  z-index: 10;
}
.contact-info-block-circle {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--blue-primary);
}
.contact-info-block-detail {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.contact-info-block-detail-title {
  font-weight: 600;
  font-size: 16px;
  line-height: 36px;
  color: var(--black-primary);
}
.contact-info-block-detail-phone {
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  color: var(--black-thirdary);
}
.contact-info-block-detail-email {
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  color: var(--black-primary);
}
.contact-info-block-detail-schedule {
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  color: var(--black-thirdary);
}
.contact-info-block-detail-social-icon {
  width: 30px;
}
.contact-info-block-socials {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding-top: 36px;
}
@media (max-width: 767px) {
  .contact-info-block-socials {
    flex-direction: column;
  }
}
.contact-info-block-social-button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 10px 20px;
  border-radius: 4px;
  transition: 0.3s ease all;
}
.contact-info-block-social-button:hover {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.telegramm {
  border: 1px solid var(--blue-secondary);
}
.whatsapp {
  border: 1px solid var(--green-primary);
}
.contact-info-block-social-button-icon {
  width: 36px;
}
.contact-info-block-social-button-text {
  font-weight: 800;
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
  color: var(--black-secondary);
}
</style>
