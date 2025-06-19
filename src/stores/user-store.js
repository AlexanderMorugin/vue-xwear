import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {
  getFirestore,
  collection,
  query,
  orderBy,
  getDocs,
  deleteDoc,
  doc,
} from 'firebase/firestore'

export const useUserStore = defineStore('userStore', () => {
  const db = getFirestore()

  const user = ref({
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })

  const userAddress = ref([])
  const userFavorite = ref([])
  const error = ref('')
  const isAuthLoading = ref(false)
  const isAddressLoading = ref(false)

  // Регистрация пользователя на сервере
  const signUp = async (email, password) => {
    isAuthLoading.value = true
    error.value = ''

    try {
      await createUserWithEmailAndPassword(getAuth(), email, password)
    } catch (err) {
      console.log(err)
    } finally {
      isAuthLoading.value = false
    }
  }

  // Логин
  const signIn = async (email, password) => {
    isAuthLoading.value = true
    error.value = ''

    try {
      const data = await signInWithEmailAndPassword(getAuth(), email, password)

      user.value.id = data.user.uid
      user.value.email = data.user.email
    } catch (err) {
      console.log(err)
    } finally {
      isAuthLoading.value = false
    }
  }

  // Вносим данные пользователя в стор
  const setUserProfile = (profileData) => {
    user.value.firstName = profileData.firstName
    user.value.lastName = profileData.lastName
    user.value.phone = profileData.phone
  }

  // Добавляем в стор адрес пользователя
  const addUserAddress = (address) => userAddress.value.push(address)

  // Добавляем в стор избранные товары пользователя с сервера, при первой загрузке сайта
  const addUserFavoriteFromServer = (favoriteItemsFromServer) =>
    (userFavorite.value = favoriteItemsFromServer)

  // Добавляем товар в стор избранные товары пользователя в реальном времени, без перезагрузки страницы
  const addToUserStoreFavoriteArray = (item) => userFavorite.value.push(item)

  // Удаляем товар из стора избранных товаров пользователя в реальном времени, без перезагрузки страницы
  const deleteFromUserStoreFavoriteArray = (id) =>
    (userFavorite.value = userFavorite.value.filter((el) => el.id !== id))

  // Получаем с сервера адреса пользователя
  const getAddress = async () => {
    isAddressLoading.value = true
    const getData = query(collection(db, `users/${user.value.id}/address`), orderBy('id', 'desc'))
    const listDocs = await getDocs(getData)
    isAddressLoading.value = false
    return listDocs.docs.map((doc) => doc.data())
  }

  // Создаем массив адресов в сторе, на основе полученных данных с сервера
  const setListOfAddressFromServer = async () => {
    const addressList = await getAddress()
    return (userAddress.value = [...addressList])
  }

  // Создаем новый id адреса, который на 1 больше предыдущего
  const setAddressId = async () => {
    let nextId = 1

    await setListOfAddressFromServer()
    const idArray = userAddress.value.map((item) => item.id)
    if (idArray.length) {
      nextId = ++idArray[0]
    } else {
      nextId
    }
    return nextId
  }

  // Удаляем с сервера конкретный адрес
  const deleteAddressFromServer = async (id) => {
    await deleteDoc(doc(db, `users/${user.value.id}/address`, id))
    const addressList = await getAddress()
    userAddress.value = [...addressList]
  }

  const $reset = () => {
    user.value.id = null
    user.value.firstName = ''
    user.value.lastName = ''
    user.value.email = ''
    user.value.phone = ''

    userAddress.value = []
    userFavorite.value = []
  }

  return {
    user,
    userAddress,
    error,
    isAuthLoading,
    isAddressLoading,
    userFavorite,
    signUp,
    signIn,
    setUserProfile,
    addUserAddress,
    getAddress,
    setAddressId,
    setListOfAddressFromServer,
    deleteAddressFromServer,
    addUserFavoriteFromServer,
    addToUserStoreFavoriteArray,
    deleteFromUserStoreFavoriteArray,
    $reset,
  }
})
