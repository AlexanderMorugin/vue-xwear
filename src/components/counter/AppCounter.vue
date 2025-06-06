<template>
  <div class="counter">
    <button
      :class="['count', { 'count-disabled': props.item.count <= 1 }]"
      @click="$emit('decrement', props.item.id, props.item.size)"
    >
      &#8722;
    </button>
    <span class="quantity">{{ props.item.count }}</span>
    <button class="count" @click="$emit('increment', props.item.id, props.item.size)">&#43;</button>
  </div>
</template>

<script setup>
const props = defineProps(['item'])
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['decrement', 'increment'])
</script>

<style scoped>
.counter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
}
.count {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--white-primary);
  border-radius: 50%;
  border: 1px solid var(--gray-semi-fourdary);
  width: 28px;
  height: 28px;
  line-height: 18px;
  font-size: 18px;
  font-weight: 500;
  color: var(--black-thirdary);
  cursor: pointer;
  transition: 0.3s ease all;
}
@media (max-width: 767px) {
  .count {
    width: 22px;
    height: 22px;
  }
}
.count:hover {
  border: 1px solid var(--blue-primary);
}
.count-disabled {
  color: var(--gray-light-fourdary);
  cursor: default;
}
.count-disabled:hover {
  border: 1px solid var(--gray-semi-fourdary);
}
.quantity {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid transparent;
  width: 32px;
  height: 28px;
  line-height: 16px;
  font-size: 16px;
  font-weight: 500;
  color: var(--black-thirdary);
}
@media (max-width: 767px) {
  .quantity {
    width: 32px;
    height: 22px;
    line-height: 14px;
    font-size: 14px;
  }
}
</style>
