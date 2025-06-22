<template>
  <FormEditProfile @openProfileMenu="$emit('openProfileMenu')" />
  <!-- <FormEditPassword /> -->
</template>

<script setup>
import FormEditProfile from '@/components/profile/FormEditProfile.vue'
// import FormEditPassword from '@/components/profile/FormEditPassword.vue'

// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['openProfileMenu'])
</script>

<style scoped></style>
