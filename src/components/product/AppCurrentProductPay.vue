<template>
  <section class="product-pay">
    <h2 class="product-pay-title">Способы оплаты:</h2>
    <p class="product-pay-text">
      Команда XWEAR предоставляет услугу доставки только оригинальных товаров c крупнейшего
      китайского маркетплейса Poizon, чтобы наши клиенты экономили более 40% на каждой покупке.
    </p>
    <p class="product-pay-subtitle">Мы принимаем оплату банковскими картами:</p>
    <ul class="product-pay-cards">
      <li class="product-pay-card">
        <img src="/icons/icon-master-card.png" alt="Master Card" />
      </li>
      <li class="product-pay-card">
        <img src="/icons/icon-visa.png" alt="Visa" />
      </li>
      <li class="product-pay-card">
        <img src="/icons/icon-mir.png" alt="Mir" />
      </li>
    </ul>
    <p class="product-pay-text p-top">
      Стоимость каждого товара окончательная. В нее входит выкуп товара на Poizon, доставка его на
      наш склад в Китае, доставка из Китая до склада в городе Екатеринбург, все таможенные сборы и
      пошлины уже включены в стоимость.
    </p>
    <p class="product-pay-text p-top">
      Если вам нужно отправить товар по России, вы сможете выбрать адрес доставки во время
      оформления заказа. Доставка оплачивается отдельно при получении посылки, обычно это не более
      350 рублей.
    </p>
  </section>
</template>

<style scoped>
.product-pay {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 920px;
  padding-top: 44px;
}
@media (max-width: 1023px) {
  .product-pay {
    padding-top: 28px;
  }
}
@media (max-width: 767px) {
  .product-pay {
    padding-top: 25px;
  }
}
.product-pay-title {
  line-height: 31px;
  font-size: 21px;
  font-weight: 600;
  color: var(--black-primary);
}
.product-pay-text {
  line-height: 27px;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: var(--black-thirdary);
  padding-top: 8px;
}
@media (max-width: 1023px) {
  .product-pay-text {
    line-height: 25px;
    font-size: 14px;
    padding-top: 16px;
  }
}
@media (max-width: 767px) {
  .product-pay-text {
    line-height: 26px;
    font-size: 15px;
    padding-top: 10px;
  }
}
.product-pay-subtitle {
  line-height: 31px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: var(--black-secondary);
  padding-top: 27px;
}
@media (max-width: 1023px) {
  .product-pay-subtitle {
    font-size: 19px;
    padding-top: 16px;
  }
}
@media (max-width: 767px) {
  .product-pay-subtitle {
    font-size: 18px;
    padding-top: 19px;
  }
}
.product-pay-cards {
  display: flex;
  gap: 15px;
  padding-top: 13px;
}
@media (max-width: 1023px) {
  .product-pay-cards {
    padding-top: 11px;
  }
}
@media (max-width: 767px) {
  .product-pay-cards {
    padding-top: 15px;
  }
}
.product-pay-card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 45px;
  border: 1px solid var(--gray-light-secondary);
  padding-left: 10px;
  padding-right: 10px;
}
.p-top {
  padding-top: 14px;
}
</style>
