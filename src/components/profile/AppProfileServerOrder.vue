<template>
  <div class="server-order">
    <h3 class="order-title">Заказ #{{ props.order.id }}</h3>

    <!-- Кнопка "Удалить" в верхнем правом углу карточки товара -->
    <AppOrderDeleteButton
      @openOrderDeleteModal="$emit('openServerOrderDeleteModal')"
      fromPage="profileServerOrder"
    />

    <div class="order-subtitle">
      Оформлен: &nbsp;
      <span class="order-subtitle-span">{{ props.order.date }}</span>
    </div>
    <div class="order-subtitle">
      Cтатус заказа: &nbsp;
      <span class="order-subtitle-status">Отправлен</span>
    </div>

    <div class="order-subtitle">
      Заказчик:&nbsp;
      <span class="order-subtitle-span">{{ props.order.customer }}</span>
    </div>

    <div class="order-subtitle">
      Телефон:&nbsp; <span class="order-subtitle-span">{{ props.order.phone }}</span>
    </div>
    <div class="order-subtitle">
      Email:&nbsp;
      <span class="order-subtitle-span">{{ props.order.email }}</span>
    </div>

    <div class="order-subtitle">
      Адрес доставки:&nbsp;
      <span class="order-subtitle-span"
        >{{ props.order.address.index }}, {{ props.order.address.country }},
        {{ props.order.address.city }}, {{ props.order.address.street }}, д.{{
          props.order.address.building
        }}, кв.{{ props.order.address.flat }}</span
      >
    </div>

    <div v-if="props.order.comment" class="order-subtitle">
      Комментарий:&nbsp;
      <span class="order-subtitle-span">{{ props.order.comment }}</span>
    </div>

    <!-- Таблица -->
    <div class="order-items">
      <div class="order-item order-item-top">
        <span class="order-item-top-name">Товар</span>
        <span class="order-item-top-name">Итого</span>
      </div>

      <ul>
        <li
          v-for="(item, index) in props.order.items"
          :key="index"
          class="order-item order-item-product"
        >
          <AppOrderCard :item="item" fromPage="profileServerOrder" />
        </li>
      </ul>
      <ul>
        <li class="order-item order-item-product">
          <span class="order-item-bottom-name">Скидка</span>
          <span class="order-item-bottom-price">{{ props.order.discount }} %</span>
        </li>
        <li class="order-item order-item-product">
          <span class="order-item-bottom-name">Доставка</span>
          <span class="order-item-bottom-price">{{ currencyFormater(props.order.delivery) }}</span>
        </li>
      </ul>
      <div class="order-item order-item-product">
        <span class="order-item-total-name">Итого</span>
        <span class="order-item-total-price">{{ currencyFormater(props.order.totalSum) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { currencyFormater } from '@/utils/currency-formater'
import AppOrderCard from '@/components/order/AppOrderCard.vue'
import AppOrderDeleteButton from '@/components/order/AppOrderDeleteButton.vue'

// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['openServerOrderDeleteModal'])
const props = defineProps(['order'])
</script>

<style scoped>
.server-order {
  position: relative;
  border: 1px solid var(--white-sixdary);
  border-radius: 5px;
  padding: 30px;
  margin-bottom: 36px;
}
@media (max-width: 767px) {
  .server-order {
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
  font-weight: 500;
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
  grid-template-columns: 1fr auto 5px;
  align-items: center;
  column-gap: 16px;
  width: 100%;
  border-bottom: 1px solid var(--gray-semi-fourdary);
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
