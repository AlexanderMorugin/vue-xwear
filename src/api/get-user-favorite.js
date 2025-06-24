// import {
//   getFirestore,
//   collection,
//   query,
//   getDocs,
//   // getDoc,
//   // deleteDoc,
//   // doc,
// } from 'firebase/firestore'
// import { useUserStore } from '@/stores/user-store'

// // Функция получения с сервера избранных товаров пользователя и записью их в стор
// export const getUserFavorite = async () => {
//   const db = getFirestore()
//   const userStore = useUserStore()

//   const getData = query(collection(db, `users/${userStore.user.id}/favorite`))
//   const listDocs = await getDocs(getData)
//   userStore.addUserFavoriteFromServer(listDocs.docs.map((doc) => doc.data()))
// }
