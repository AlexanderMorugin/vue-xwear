<template>
  <!-- Заголовок на главной профиля если есть данные профиля на сервере -->
  <h2 v-if="props.fromPage === 'mainProfile' && props.user" class="profile-menu-right-title">
    Приветствуем, {{ props.user.firstName }}!
  </h2>
  <!-- Заголовок на главной профиля если нет данных профиля на сервере -->
  <h2 v-if="props.fromPage === 'mainProfile' && !props.user" class="profile-menu-right-title">
    Приветствуем!
  </h2>
  <!-- Заголовок на второстепенных подстраницах профиля -->
  <h2 v-else class="profile-menu-right-title">{{ props.title }}</h2>
</template>

<script setup>
const props = defineProps(['title', 'fromPage', 'user'])
</script>

<style scoped>
.profile-menu-right-title {
  font-weight: 700;
  font-size: 23px;
  line-height: 30px;
  color: var(--black-thirdary);
}
</style>
