<template>
  <div class="order">
    <!-- <div v-if="props.fromPage">
      <h3 class="order-title">Заказ #4353</h3>
      <div class="order-subtitle">
        Был оформлен&nbsp;
        <span class="order-subtitle-span">27 Июня в 12:34</span>
        &nbsp;- статус заказа
        <span class="order-subtitle-status">Отправлен</span>
      </div>
    </div> -->

    <!-- Таблица -->
    <div class="order-items">
      <div class="order-item order-item-top">
        <span class="order-item-top-name">Товар</span>
        <span class="order-item-top-name">Итого</span>
      </div>
      <ul>
        <li
          v-for="(item, index) in props.orderStore.orderItems"
          :key="index"
          class="order-item order-item-product"
        >
          <AppOrderCard :item="item" :orderStore="orderStore" />
        </li>
      </ul>
      <ul>
        <li class="order-item order-item-product">
          <span class="order-item-bottom-name">Всего</span>
          <span class="order-item-bottom-price">{{
            currencyFormater(orderStore.totalOrderSum)
          }}</span>
        </li>
        <li class="order-item order-item-product">
          <span class="order-item-bottom-name">Скидка</span>
          <span class="order-item-bottom-price">{{ props.discount }} %</span>
        </li>
        <li class="order-item order-item-product">
          <span class="order-item-bottom-name">Доставка</span>
          <span class="order-item-bottom-price">{{ currencyFormater(props.delivery) }}</span>
        </li>
      </ul>
      <div class="order-item order-item-product">
        <span class="order-item-total-name">Итого</span>
        <span class="order-item-total-price">{{ currencyFormater(props.totalSum) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { currencyFormater } from '@/utils/currency-formater'
import AppOrderCard from './AppOrderCard.vue'

const props = defineProps(['orderStore', 'discount', 'delivery', 'totalSum', 'fromPage'])
</script>

<style scoped>
.order {
  border: 1px solid var(--white-sixdary);
  border-radius: 5px;
  padding: 30px;
  margin-bottom: 36px;
}
@media (max-width: 767px) {
  .order {
    padding: 10px;
  }
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
  grid-template-columns: 1fr 98px auto 5px;
  align-items: center;
  column-gap: 16px;
  width: 100%;
  border-bottom: 1px solid var(--gray-semi-fourdary);
}
@media (max-width: 767px) {
  .order-item {
    grid-template-columns: 1fr 98px auto;
  }
}
.order-item:last-child {
  border-bottom: none;
}
.order-item-top {
  height: 44px;
}
.order-item-product {
  position: relative;
  padding-top: 20px;
  padding-bottom: 20px;
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
