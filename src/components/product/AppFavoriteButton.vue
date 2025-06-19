<template>
  <button class="btn-favorite" @click="setFavorite(props.item)">
    <img :src="getIconUrl()" alt="Избранное" class="btn-icon" />
    <!-- <img src="/icons/icon-star-black.svg" alt="Избранное" class="btn-icon" /> -->
    <!-- {{ props.item.id }} -->
  </button>
  {{ props.item.id }}
  {{ props.isFavorite }}
  <!-- <button v-if="props.isFavorite" class="btn-favorite" @click="$emit('cancelFavorite')">
    <img src="/icons/icon-star-red.svg" alt="Избранное" class="btn-icon" />
  </button>

  <button v-else class="btn-favorite" @click="$emit('setFavorite')">
    <img src="/icons/icon-star-black.svg" alt="Избранное" class="btn-icon" />
  </button> -->
</template>

<script setup>
import { ref } from 'vue'
// import axios from 'axios'
import { getFirestore, setDoc, deleteDoc, doc } from 'firebase/firestore'
import { useUserStore } from '@/stores/user-store'

// const props = defineProps(['isFavorite', 'item'])
const props = defineProps(['item', 'isFavorite'])
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['setFavorite', 'cancelFavorite'])

const db = getFirestore()
const userStore = useUserStore()

let iconUrl = ref('')

const getIconUrl = () => {
  if (userStore.userFavorite.find((item) => item.id === props.item.id)) {
    return (iconUrl.value = '/icons/icon-star-red.svg')
  } else {
    return (iconUrl.value = '/icons/icon-star-black.svg')
  }
}
// const userFavoriteArray = userStore.userFavorite
// console.log('userFavoriteArray - ', userFavoriteArray)

// let iconUrl = ref('')
// const favoriteStatus = ref(props.isFavorite)

// const getIconUrl = () => {
//   if (!favoriteStatus.value) {
//     return (iconUrl.value = '/icons/icon-star-black.svg')
//   } else {
//     return (iconUrl.value = '/icons/icon-star-red.svg')
//   }
// }
// const getFavoriteData = async () => {
//   try {
//     const { data } = await axios.get(
//       `https://vue-xwear-default-rtdb.firebaseio.com/shoes/${props.id}.json`,
//     )

//     favoriteStatus.value = data.isFavorite
//     console.log(data.isFavorite)
//   } catch (error) {
//     console.log(error)
//   }
// }

// console.log('FavoriteButton - ', userStore.userFavorite.length && userStore.userFavorite)

const setFavorite = async (item) => {
  const cirrentItem = userStore.userFavorite.find((el) => el.id === item.id)
  if (!cirrentItem) {
    await setDoc(doc(db, `users/${userStore.user.id}/favorite`, item.id), item).then(() => {
      userStore.addToUserStoreFavoriteArray(item)
    })
  }
  // if (userStore.userFavorite.length && userStore.userFavorite.find((el) => el.id === item.id))
  else {
    await deleteDoc(doc(db, `users/${userStore.user.id}/favorite`, item.id)).then(() => {
      userStore.deleteFromUserStoreFavoriteArray(item.id)
    })
  }
}

// const cancelFavorite = async (item) => {
//   if (props.userFavoriteArray.find((el) => el.id === item.id)) {
//     await deleteDoc(doc(db, `users/${userStore.user.id}/favorite`, item.id)).then(() => {
//       userStore.deleteFromUserStoreFavoriteArray(item)
//       isFavorite.value = false
//     })
//   }
// }

// const getFavoriteData = async () => {
//   try {
//     const { data } = await axios.get(
//       `https://vue-xwear-default-rtdb.firebaseio.com/shoes/${props.id}.json`,
//     )

//     favoriteStatus.value = data.isFavorite
//     console.log(data.isFavorite)
//   } catch (error) {
//     console.log(error)
//   }
// }

// const toggleFavorite = async (id) => {
//   try {
//     await axios.patch(`https://vue-xwear-default-rtdb.firebaseio.com/shoes/${id}.json`, {
//       isFavorite: !favoriteStatus.value,
//     })

//     getFavoriteData()
//   } catch (error) {
//     console.log(error)
//   }
// }
</script>

<style scoped>
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
