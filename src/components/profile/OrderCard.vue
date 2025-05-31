<template>
  <div class="order">
    <h3 class="order-title">Заказ #4353</h3>
    <div class="order-subtitle">
      Был оформлен&nbsp;
      <span class="order-subtitle-span">27 Июня в 12:34</span>
      &nbsp;- статус заказа
      <span class="order-subtitle-status">Отправлен</span>
    </div>

    <!-- Таблица -->
    <div class="order-items">
      <div class="order-item order-item-top">
        <span class="order-item-top-name">Товар</span>
        <span class="order-item-top-name">Итого</span>
      </div>
      <ul>
        <li class="order-item order-item-product">
          <span class="order-item-product-name-span"
            ><router-link
              :to="`${PATH_CROSSOVKY}/-OQTkURjHxmobgTYenUh`"
              class="order-item-product-name"
              >Кроссовки Nike Air Max 3000</router-link
            >
            x 1</span
          >
          <span class="order-item-product-price">4 699 ₽</span>
        </li>
        <li class="order-item order-item-product">
          <span class="order-item-product-name-span"
            ><router-link :to="`${PATH_KEDY}/-OQYupPcY6KgRpHSPYGR`" class="order-item-product-name"
              >Кроссовки Nike Air Max 3000</router-link
            >
            x 2</span
          >
          <span class="order-item-product-price">4 699 ₽</span>
        </li>
        <li class="order-item order-item-product">
          <span class="order-item-product-name-span"
            ><router-link
              :to="`${PATH_CROSSOVKY}/-OQTkURjHxmobgTYenUh`"
              class="order-item-product-name"
              >Кроссовки Nike Air Max 3000</router-link
            >
            x 3</span
          >
          <span class="order-item-product-price">4 699 ₽</span>
        </li>
        <li class="order-item order-item-product">
          <span class="order-item-product-name-span"
            ><router-link :to="`${PATH_KEDY}/-OQYupPcY6KgRpHSPYGR`" class="order-item-product-name"
              >Кроссовки Nike Air Max 3000</router-link
            >
            x 4</span
          >
          <span class="order-item-product-price">4 699 ₽</span>
        </li>
      </ul>
      <ul>
        <li class="order-item order-item-product">
          <span class="order-item-bottom-name">Всего</span>
          <span class="order-item-bottom-price">14 798 ₽</span>
        </li>
        <li class="order-item order-item-product">
          <span class="order-item-bottom-name">Скидка</span>
          <span class="order-item-bottom-price">-300 ₽</span>
        </li>
        <li class="order-item order-item-product">
          <span class="order-item-bottom-name">Доставка</span>
          <span class="order-item-bottom-price">300 ₽</span>
        </li>
      </ul>
      <div class="order-item order-item-product">
        <span class="order-item-total-name">Итого</span>
        <span class="order-item-total-price">14 798 ₽</span>
      </div>
    </div>
  </div>

  <AddressCard number="1" />
</template>

<script setup>
import { PATH_KEDY, PATH_CROSSOVKY } from '@/mock/routes'
import AddressCard from '@/components/profile/AddressCard.vue'
</script>

<style scoped>
.order {
  border: 1px solid var(--white-sixdary);
  border-radius: 5px;
  padding: 30px;
  margin-bottom: 36px;
}
.order-title {
  font-weight: 700;
  font-size: 17px;
  line-height: 30px;
  color: var(--black-primary);
}
.order-subtitle {
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  color: var(--gray-semi-secondary);
}
.order-subtitle-span {
  font-weight: 700;
  color: var(--black-sixdary);
}
.order-subtitle-status {
  width: fit-content;
  border-radius: 5px;
  border: 1px solid var(--gray-semi-thirdary);
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: var(--green-secondary);
  padding: 10px 13px;
  margin-left: 10px;
}
.order-items {
  display: flex;
  flex-direction: column;
  padding-top: 22px;
}
.order-item {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  column-gap: 16px;
  width: 100%;
  border-bottom: 1px solid var(--gray-semi-fourdary);
}
.order-item-top {
  height: 44px;
}
.order-item-product {
  height: 66px;
}
.order-item-top-name {
  font-weight: 700;
  font-size: 14px;
  line-height: 30px;
  letter-spacing: 1%;
  vertical-align: middle;
  text-transform: uppercase;
  color: var(--gray-dark-sevendary);
}
.order-item-product-name {
  color: var(--gray-dark-sevendary);
}
.order-item-product-name-span {
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  letter-spacing: 1%;
  vertical-align: middle;
  color: var(--gray-semi-fivedary);
}
.order-item-product-price {
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  vertical-align: middle;
  text-transform: uppercase;
  color: var(--black-primary);
}
.order-item-bottom-name {
  font-weight: 700;
  font-size: 14px;
  line-height: 30px;
  letter-spacing: 1%;
  vertical-align: middle;
  color: var(--gray-dark-sevendary);
}
.order-item-bottom-price {
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0%;
  vertical-align: middle;
  text-transform: uppercase;
  color: var(--black-primary);
}
.order-item-total-name {
  font-weight: 700;
  font-size: 19px;
  line-height: 30px;
  letter-spacing: 1%;
  vertical-align: middle;
  color: var(--gray-dark-sevendary);
}
.order-item-total-price {
  font-weight: 600;
  font-size: 22px;
  line-height: 24px;
  letter-spacing: 0%;
  vertical-align: middle;
  text-transform: uppercase;
  color: var(--black-primary);
}
</style>
