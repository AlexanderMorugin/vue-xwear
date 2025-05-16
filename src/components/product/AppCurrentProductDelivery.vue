<template>
  <section class="product-delivery">
    <h2 class="product-delivery-title">Доставка</h2>
    <p class="product-delivery-text">
      Команда XWEAR предоставляет услугу доставки только оригинальных товаров c крупнейшего
      китайского маркетплейса Poizon, чтобы наши клиенты экономили более 40% на каждой покупке. Мы
      ценим вас, поэтому постоянно работаем над логистикой, чтобы ускорить время доставки заказов!
    </p>
    <p class="product-delivery-text">
      Все заказы отправляются из-за границы с возможностью доставки в любой город России, перед
      отправкой товар всегда проходит проверку на подлиность.
    </p>
    <p class="product-delivery-text">
      Доставляем вещи из-за границы за 12-16 дней до России, включая день оплаты, с возможностью
      самовывоза из города Екатеринбург. В другие города отправляем СДЭКом.
    </p>
    <p class="product-delivery-text">
      СДЭК оплачивается при получении. Цена доставки зависит от города вашего проживания, в среднем
      это 350 ₽.
    </p>
    <p class="product-delivery-subtitle">В личном кабинете вы сможете отслеживать статус заказа:</p>
    <ul class="product-delivery-list">
      <li v-for="item in deliveryText" :key="item.key" class="product-delivery-list-item">
        <div class="product-delivery-list-item-circle">
          <img src="/icons/icon-check-blue.svg" />
        </div>

        <div class="product-delivery-list-item-box">
          <p class="product-delivery-list-item-title">{{ item.key }}</p>
          <p class="product-delivery-list-item-text">{{ item.value }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { deliveryText } from '@/mock/delivery-text'
</script>

<style scoped>
.product-delivery {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 920px;
  padding-top: 21px;
}
@media (max-width: 1023px) {
  .product-delivery {
    padding-top: 28px;
  }
}
@media (max-width: 767px) {
  .product-delivery {
    padding-top: 25px;
  }
}
.product-delivery-title {
  line-height: 31px;
  font-size: 21px;
  font-weight: 600;
  color: var(--black-primary);
}
.product-delivery-text {
  line-height: 27px;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: var(--black-thirdary);
  padding-top: 16px;
}
@media (max-width: 1023px) {
  .product-delivery-text {
    line-height: 25px;
    font-size: 14px;
  }
}
@media (max-width: 767px) {
  .product-delivery-text {
    line-height: 26px;
    font-size: 15px;
    padding-top: 10px;
  }
}
.product-delivery-subtitle {
  line-height: 31px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: var(--black-secondary);
  padding-top: 61px;
}
@media (max-width: 1023px) {
  .product-delivery-subtitle {
    padding-top: 16px;
  }
}
@media (max-width: 767px) {
  .product-delivery-subtitle {
    padding-top: 20px;
  }
}
.product-delivery-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 46px;
  padding-top: 27px;
}
@media (max-width: 1023px) {
  .product-delivery-list {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding-top: 29px;
  }
}
@media (max-width: 767px) {
  .product-delivery-list {
    grid-template-columns: 1fr;
    padding-top: 20px;
  }
}
.product-delivery-list-item {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 6px;
  width: 100%;
}
@media (max-width: 1023px) {
  .product-delivery-list-item {
    grid-template-columns: 67px 1fr;
    column-gap: 12px;
  }
}
.product-delivery-list-item-circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 67px;
  height: 67px;
  border: 1px solid var(--gray-light-primary);
  border-radius: 50%;
}
.product-delivery-list-item-box {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
@media (max-width: 1023px) {
  .product-delivery-list-item-box {
    gap: 0;
  }
}
.product-delivery-list-item-title {
  line-height: 31px;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 0.5px;
  color: var(--black-thirdary);
}
@media (max-width: 1023px) {
  .product-delivery-list-item-title {
    font-size: 15px;
  }
}
.product-delivery-list-item-text {
  line-height: 22px;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: var(--black-thirdary);
}
@media (max-width: 1023px) {
  .product-delivery-list-item-text {
    font-size: 15px;
  }
}
</style>
