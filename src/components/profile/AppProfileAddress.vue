<template>
  <AppProfileHeading title="Мои адреса" />
  <div class="profile-address">
    <AddressCard number="1" />
    <AddressCard number="2" />
  </div>

  <div class="add-address-block"></div>
</template>

<script setup>
import AppProfileHeading from '@/components/profile/AppProfileHeading.vue'
import AddressCard from '@/components/profile/AddressCard.vue'
</script>

<style scoped>
.profile-address {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding-top: 30px;
  padding-bottom: 80px;
}
@media (max-width: 767px) {
  .profile-address {
    grid-template-columns: 1fr;
    padding-top: 20px;
    padding-bottom: 40px;
  }
}
.add-address-block {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px dashed var(--white-sixdary);
  border-radius: 5px;
  padding: 29px;
}
</style>
