<template>
  <div class="order">
    <h3 class="order-title">Заказ #4353</h3>
    <div class="order-subtitle">
      Был оформлен&nbsp;
      <span class="order-subtitle-span">27 Июня в 12:34</span>
      &nbsp;- статус заказа
      <span class="order-subtitle-status">Отправлен</span>
    </div>
    <div class="order-items">
      <div class="order-item order-item-top">
        <span class="order-item-top-name">Товар</span>
        <span class="order-item-top-name">Итого</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.order {
  border: 1px solid var(--white-sixdary);
  border-radius: 5px;
  padding: 30px;
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
  grid-template-columns: 1fr 186px;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid var(--gray-semi-fourdary);
}
.order-item-top {
  height: 44px;
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
</style>
