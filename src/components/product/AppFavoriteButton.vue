<template>
  <div class="btn-favorite-box">
    <button v-if="userStore.user.id" class="btn-favorite" @click="setFavorite(props.item)">
      <img :src="getIconUrl()" alt="Избранное" class="btn-icon" />
    </button>

    <button v-if="!userStore.user.id" class="btn-favorite" @click="openFavoriteButtonModal">
      <img src="/icons/icon-star-black.svg" alt="Избранное" class="btn-icon" />
    </button>

    <AppFavoriteButtonModal
      v-if="isFavoriteButtonModalOpen"
      @closeFavoriteButtonModal="closeFavoriteButtonModal"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getFirestore, setDoc, deleteDoc, doc } from 'firebase/firestore'
import { useUserStore } from '@/stores/user-store'
import AppFavoriteButtonModal from './AppFavoriteButtonModal.vue'

const props = defineProps(['item'])

const db = getFirestore()
const userStore = useUserStore()

let iconUrl = ref('')
const isFavoriteButtonModalOpen = ref(false)

const openFavoriteButtonModal = () => (isFavoriteButtonModalOpen.value = true)
const closeFavoriteButtonModal = () => (isFavoriteButtonModalOpen.value = false)

const getIconUrl = () => {
  if (userStore.userFavorite.find((item) => item.id === props.item.id)) {
    return (iconUrl.value = '/icons/icon-star-red.svg')
  } else {
    return (iconUrl.value = '/icons/icon-star-black.svg')
  }
}

const setFavorite = async (item) => {
  const cirrentItem = userStore.userFavorite.find((el) => el.id === item.id)
  if (!cirrentItem) {
    await setDoc(doc(db, `users/${userStore.user.id}/favorite`, item.id), item).then(() => {
      userStore.addToUserStoreFavoriteArray(item)
    })
  } else {
    await deleteDoc(doc(db, `users/${userStore.user.id}/favorite`, item.id)).then(() => {
      userStore.deleteFromUserStoreFavoriteArray(item.id)
    })
  }
}
</script>

<style scoped>
.btn-favorite-box {
  position: relative;
}
.btn-favorite {
  position: absolute;
  top: 33px;
  right: 25px;
  cursor: pointer;
  z-index: 10;
}
@media (max-width: 767px) {
  .btn-favorite {
    top: 15px;
    right: 15px;
  }
}
.btn-icon {
  width: 19px;
}
/* @media (max-width: 767px) {
  .btn-icon {
    width: 15px;
  }
} */
</style>
