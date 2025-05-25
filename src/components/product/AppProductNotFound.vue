<template>
  <div class="product-not-found">
    <p>Подходящих товаров не найдено.</p>
    <p>Измените настройки фильтров.</p>
  </div>
</template>

<style scoped>
.product-not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  line-height: 32px;
  font-size: 24px;
  font-weight: 800;
  color: var(--black-primary);
  text-align: center;
  margin: 0 auto;
  padding-top: 130px;
}
@media (max-width: 1023px) {
  .product-not-found {
    line-height: 22px;
    font-size: 18px;
    padding-top: 50px;
  }
}
</style>
