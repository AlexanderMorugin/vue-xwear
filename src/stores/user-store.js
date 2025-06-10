import { ref } from 'vue'
import { defineStore } from 'pinia'
// import axios from 'axios'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

// const API_KEY = 'AIzaSyB-0doWEXiJdzBes0_CF20yOMD8Rm99LaM'
// const API_KEY = import.meta.env.VITE_API_KEY_FIREBASE

export const useUserStore = defineStore('userStore', () => {
  // const user = ref({
  //   email: '',
  //   expiresIn: '',
  //   idToken: '',
  //   localId: '',
  //   refreshToken: '',
  // })

  const user = ref({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    token: '',
  })

  // const userId = ref('')
  // const userToken = ref('')
  // const userFirstName = ref('')
  // const userLastName = ref('')
  // const userEmail = ref('')
  // const userPhone = ref('')

  const error = ref('')
  const isLoading = ref(false)

  const signUp = async (email, password) => {
    isLoading.value = true
    error.value = ''

    try {
      await createUserWithEmailAndPassword(getAuth(), email, password)
    } catch (err) {
      console.log(err)
    } finally {
      isLoading.value = false
    }
  }

  const signIn = async (email, password) => {
    isLoading.value = true
    error.value = ''

    try {
      const data = await signInWithEmailAndPassword(getAuth(), email, password)

      user.value.id = data.user.uid
      user.value.token = data.user.accessToken
      user.value.email = data.user.email

      // // userId.value = data.user.uid
      // userToken.value = data.user.accessToken
      // userEmail.value = data.user.email

      console.log(user.value)
    } catch (err) {
      console.log(err)
    } finally {
      isLoading.value = false
    }
  }

  // const auth = async (payload, type) => {
  //   const signUrl = type === 'signUp' ? 'signUp' : 'signInWithPassword'

  //   isLoading.value = true
  //   error.value = ''

  //   try {
  //     let response = await axios.post(
  //       `https://identitytoolkit.googleapis.com/v1/accounts:${signUrl}?key=${API_KEY}`,
  //       { ...payload, returnSecureToken: true },
  //     )

  //     console.log(response.data)

  //     user.value = {
  //       email: response.data.email,
  //       expiresIn: response.data.expiresIn,
  //       idToken: response.data.idToken,
  //       localId: response.data.localId,
  //       refreshToken: response.data.refreshToken,
  //     }

  //     isLoading.value = false
  //   } catch (err) {
  //     console.log(err.response.data.error.message)

  //     switch (err.response.data.error.message) {
  //       case 'EMAIL_EXISTS':
  //         error.value = 'Такой адрес электронной почты уже используется'
  //         break
  //       case 'OPERATION_NOT_ALLOWED':
  //         error.value = 'Вход по паролю отключен'
  //         break
  //       case 'TOO_MANY_ATTEMPTS_TRY_LATER':
  //         error.value = 'Попробуйте ещё раз позже'
  //         break
  //       case 'INVALID_PASSWORD':
  //         error.value = 'Неправильный пароль'
  //         break
  //       case 'USER_DISABLED':
  //         error.value = 'Учетная запись пользователя была отключена'
  //         break
  //       case 'INVALID_LOGIN_CREDENTIALS':
  //         error.value = 'Неправильный пароль или почта'
  //         break

  //       default:
  //         error.value = 'Какая то ошибка'
  //         break
  //     }
  //   } finally {
  //     isLoading.value = false
  //   }
  // }

  const userAddress = ref([
    {
      id: 1,
      index: '056734',
      country: 'Poccия',
      city: 'Mосква',
      street: 'улица Варшавская',
      building: '37/5',
      flat: '574',
    },
    {
      id: 2,
      index: '123548',
      country: 'Poccия',
      city: 'Владивосток',
      street: 'улица Охотская',
      building: '41',
      flat: '16',
    },
  ])

  const currentAdress = ref(userAddress.value[0])

  const setCurrentAdress = (item) => {
    if (item) {
      const adress = userAddress.value.find((el) => el.id === item.id)
      currentAdress.value = adress
    } else {
      currentAdress.value = userAddress.value[0]
    }
  }

  return {
    // userId,
    user,
    // userToken,
    // userFirstName,
    // userLastName,
    // userEmail,
    // userPhone,
    userAddress,
    currentAdress,
    error,
    isLoading,
    setCurrentAdress,
    // auth,
    signUp,
    signIn,
  }
})
