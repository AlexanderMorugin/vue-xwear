<template>
  <div class="profile-button-container">
    <button class="profile-button" @click="$emit('openProfileMenu')">
      <span class="profile-button-text">Меню профиля</span>
      <img src="/icons/icon-arrow-filter-button.svg" alt="Стрелка" />
    </button>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['openProfileMenu'])
</script>

<style scoped>
.profile-button-container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.profile-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 250px;
  border-radius: 5px;
  background: var(--blue-primary);
  padding: 16px 18px;
  margin-bottom: 20px;
  transition: 0.3s ease all;
  cursor: pointer;
}
.profile-button:hover {
  background: var(--gray-light-sixdary);
}
.profile-button-text {
  line-height: 20px;
  font-size: 13px;
  font-weight: 800;
  color: var(--black-primary);
  text-transform: uppercase;
  letter-spacing: 0.8px;
}
@media (max-width: 767px) {
  .profile-button-text {
    font-size: 12px;
  }
}
</style>
