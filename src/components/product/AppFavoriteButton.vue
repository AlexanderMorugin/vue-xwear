<template>
  <button class="btn-favorite" @click="toggleFavorite(props.item)">
    <!-- <img :src="getIconUrl()" alt="Избранное" class="btn-icon" /> -->
    <img src="/icons/icon-star-black.svg" alt="Избранное" class="btn-icon" />
  </button>
</template>

<script setup>
// import { ref } from 'vue'
// import axios from 'axios'
import { getFirestore, setDoc, doc } from 'firebase/firestore'
import { useUserStore } from '@/stores/user-store'

// const props = defineProps(['isFavorite', 'item'])
const props = defineProps(['item'])

const db = getFirestore()
const userStore = useUserStore()

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

const toggleFavorite = async (item) => {
  const payload = {
    ...item,
    isFavorite: true,
  }
  await setDoc(doc(db, `users/${userStore.user.id}/favorite`, item.id), payload)
  // .then(() => {
  //   userStore.addUserAddress(payload)
  // })
}

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
