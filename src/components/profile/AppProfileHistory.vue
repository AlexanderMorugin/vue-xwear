<template>
  <!-- Кнопка меню профиля появляется при разрешении менее 1024px -->
  <AppProfileButton v-if="isScreenLarge" @openProfileMenu="$emit('openProfileMenu')" />

  <AppProfileHeading title="История заказов" />
  <!-- Контейнер таблицы -->
  <div class="order-history">
    <!-- Таблица -->
    <ul>
      <li class="order-history-table order-history-table-top">
        <span class="order-history-table-top-name">Номер</span>
        <span class="order-history-table-top-name">Дата</span>
        <span class="order-history-table-top-name">Статус</span>
        <span class="order-history-table-top-name">Итого</span>
      </li>

      <li class="order-history-table order-history-table-order">
        <span class="order-history-table-item">#5653</span>
        <span class="order-history-table-item">27/06/2023</span>
        <span class="order-history-table-item">В обработке</span>
        <span class="order-history-table-price">4 699 ₽</span>
      </li>
      <li class="order-history-table order-history-table-order">
        <span class="order-history-table-item">#5653</span>
        <span class="order-history-table-item">27/06/2023</span>
        <span class="order-history-table-item">В обработке</span>
        <span class="order-history-table-price">4 699 ₽</span>
      </li>
      <li class="order-history-table order-history-table-order">
        <span class="order-history-table-item">#5653</span>
        <span class="order-history-table-item">27/06/2023</span>
        <span class="order-history-table-item">В обработке</span>
        <span class="order-history-table-price">4 699 ₽</span>
      </li>
      <li class="order-history-table order-history-table-order">
        <span class="order-history-table-item">#5653</span>
        <span class="order-history-table-item">27/06/2023</span>
        <span class="order-history-table-item">В обработке</span>
        <span class="order-history-table-price">4 699 ₽</span>
      </li>
    </ul>

    <!-- Кнопки пагинации -->
    <div class="order-pagination">
      <button class="order-pagination-button-nav">
        <img
          src="/icons/icon-arrow-long-dark.svg"
          alt="Стрелка назад"
          class="order-pagination-button-prev order-pagination-button-disabled"
        />
      </button>
      <button class="order-pagination-button order-pagination-button-active">1</button>
      <button class="order-pagination-button">2</button>
      <button class="order-pagination-button">3</button>
      <button class="order-pagination-button-nav">
        <img
          src="/icons/icon-arrow-long-dark.svg"
          alt="Стрелка назад"
          class="order-pagination-button-next"
        />
      </button>
    </div>
  </div>
</template>

<script setup>
import AppProfileHeading from '@/components/profile/AppProfileHeading.vue'
import AppProfileButton from '@/components/profile/AppProfileButton.vue'
import { useResizeLarge } from '@/use/useResizeLarge'

// Брейкпоинты ширины экрана
const { isScreenLarge } = useResizeLarge()

// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['openProfileMenu'])
</script>

<style scoped>
.order-history {
  position: relative;
  border: 1px solid var(--white-sixdary);
  border-radius: 5px;
  padding: 11px 30px 120px 30px;
  margin-top: 30px;
}
@media (max-width: 767px) {
  .order-history {
    padding-left: 10px;
    padding-right: 10px;
  }
}
.order-history-table {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  align-items: center;
  column-gap: 20px;
  width: 100%;
  border-bottom: 1px solid var(--gray-semi-fourdary);
  padding: 7px 19px;
}
@media (max-width: 389px) {
  .order-history-table {
    grid-template-columns: auto 1fr 1fr auto;
    column-gap: 12px;
    padding-left: 10px;
    padding-right: 10px;
  }
}
.order-history-table-top {
  min-height: 44px;
}
.order-history-table-order {
  min-height: 66px;
  background: var(--gray-semi-sixdary);
}
.order-history-table-order:nth-child(2n) {
  height: 66px;
  background: var(--white-primary);
}
.order-history-table-top-name {
  font-weight: 700;
  font-size: 14px;
  line-height: 30px;
  letter-spacing: 1%;
  vertical-align: middle;
  text-transform: uppercase;
  color: var(--gray-dark-sevendary);
}
@media (max-width: 389px) {
  .order-history-table-top-name {
    font-size: 10px;
    line-height: 20px;
  }
}
.order-history-table-item {
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  letter-spacing: 1%;
  vertical-align: middle;
  color: var(--gray-dark-sevendary);
}
@media (max-width: 767px) {
  .order-history-table-item {
    font-size: 10px;
    line-height: 16px;
  }
}
.order-history-table-price {
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  vertical-align: middle;
  text-transform: uppercase;
  color: var(--black-primary);
}
@media (max-width: 767px) {
  .order-history-table-price {
    font-size: 12px;
    line-height: 18px;
  }
}
.order-pagination {
  position: absolute;
  bottom: 42px;
  left: 17px;
  display: flex;
  align-items: center;
  gap: 5px;
}
@media (max-width: 767px) {
  .order-pagination {
    left: 10px;
  }
}
.order-pagination-button-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 47px;
  height: 44px;
  border-radius: 4px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.3s ease all;
}
.order-pagination-button-nav:hover {
  border: 1px solid var(--blue-primary);
}
.order-pagination-button-prev {
}
.order-pagination-button-next {
  transform: rotate(180deg);
}
.order-pagination-button-disabled {
  opacity: 0.4;
}
.order-pagination-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 47px;
  height: 44px;
  border-radius: 4px;
  border: 1px solid transparent;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: var(--black-primary);
  cursor: pointer;
  transition: 0.3s ease all;
}
.order-pagination-button:hover {
  border: 1px solid var(--blue-primary);
}
.order-pagination-button-active {
  background: var(--blue-primary);
  color: var(--white-primary);
}
</style>
