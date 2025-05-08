<template>
  <div class="cartCount">
    <span class="amount">7</span>
  </div>
</template>

<style scoped>
.cartCount {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--blue-primary);
  padding: 5px;
}
.amount {
  font-size: 12px;
  line-height: 12px;
  font-weight: 700;
  color: var(--white-primary);
}
</style>
