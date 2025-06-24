// import { ref } from 'vue'
// import { getFirestore, setDoc, deleteDoc, doc } from 'firebase/firestore'
// import { useUserStore } from '@/stores/user-store'

// const userStore = useUserStore()

// export let isFavorite = ref(false)

// export const setFavorite = async (item) => {
//   const db = getFirestore()
//   if (userStore.userFavorite.find((el) => el.id !== item.id) || !userStore.userFavorite.length) {
//     await setDoc(doc(db, `users/${userStore.user.id}/favorite`, item.id), item).then(() => {
//       userStore.addToUserStoreFavoriteArray(item)
//       isFavorite.value = true
//     })
//   }
// }

// export const cancelFavorite = async (item) => {
//   const db = getFirestore()
//   if (userStore.userFavorite.find((el) => el.id === item.id)) {
//     await deleteDoc(doc(db, `users/${userStore.user.id}/favorite`, item.id)).then(() => {
//       userStore.deleteFromUserStoreFavoriteArray(item)
//       isFavorite.value = false
//     })
//   }
// }
