<template>
  <ul @click.stop class="profile-menu">
    <li v-for="item in profileMenuList" :key="item.id">
      <button :class="setActiveClass(item)" @click="$emit('handleChoiseBlock', item)">
        <img
          :src="setShowImage(item)"
          :alt="item.name"
          :class="[
            'profile-menu-item-icon',
            { 'profile-menu-item-icon-slim': item.name === 'Адреса' },
          ]"
        />
        <span class="profile-menu-item-text">{{ item.name }}</span>
      </button>
    </li>
  </ul>
</template>

<script setup>
import { profileMenuList } from '@/mock/profile-menu-list'

// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['handleChoiseBlock'])
const props = defineProps(['hasChoiseBlock'])

const setShowImage = (index) => {
  let image = index.icon

  if (props.hasChoiseBlock === index.id) {
    image = index.iconDark
  }

  return image
}

const setActiveClass = (index) => {
  let activeClass = 'profile-menu-item'

  if (props.hasChoiseBlock === index.id) {
    activeClass = 'profile-menu-item profile-menu-item-active'
  }

  return activeClass
}
</script>

<style scoped>
.profile-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 21px;
  width: 318px;
  background: var(--white-primary);
  border-radius: 5px;
  border: 1px solid var(--white-sixdary);
  padding: 28px 40px 22px 40px;
}
@media (max-width: 767px) {
  .profile-menu {
    width: 100%;
    max-width: 318px;
  }
}
@media (max-width: 359px) {
  .profile-menu {
    padding-right: 20px;
    padding-left: 20px;
  }
}
.profile-menu-item {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 21px;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  transition: 0.3s ease all;
}
.profile-menu-item-active {
  border-bottom: 1px solid var(--blue-primary);
}
.profile-menu-item-icon {
  width: 19px;
}
.profile-menu-item-icon-slim {
  width: 17px;
}
.profile-menu-item-text {
  font-weight: 500;
  font-size: 15px;
  line-height: 42px;
  color: var(--black-primary);
  transition: 0.2s ease all;
}
.profile-menu-item:hover .profile-menu-item-text {
  color: var(--blue-primary);
}
</style>
