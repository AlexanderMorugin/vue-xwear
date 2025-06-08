import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

const API_KEY = 'AIzaSyB-0doWEXiJdzBes0_CF20yOMD8Rm99LaM'

export const useUserStore = defineStore('userStore', () => {
  const user = ref({
    email: '',
    expiresIn: '',
    idToken: '',
    localId: '',
    refreshToken: '',
  })

  const error = ref('')

  const signUp = async (payload) => {
    error.value = ''

    try {
      let response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
        { ...payload, returnSecureToken: true },
      )

      console.log(response.data)

      user.value = {
        email: response.data.email,
        expiresIn: response.data.expiresIn,
        idToken: response.data.idToken,
        localId: response.data.localId,
        refreshToken: response.data.refreshToken,
      }
    } catch (err) {
      switch (err.response.data.error.message) {
        case 'EMAIL_EXISTS':
          error.value = 'Такой адрес электронной почты уже используется'
          break
        case 'OPERATION_NOT_ALLOWED':
          error.value = 'Вход по паролю отключен'
          break
        case 'TOO_MANY_ATTEMPTS_TRY_LATER':
          error.value = 'Попробуйте ещё раз позже'
          break
        default:
          error.value = 'Какая то ошибка'
          break
      }

      // console.log(error.value)
    }
  }

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
    userAddress,
    currentAdress,
    error,
    setCurrentAdress,
    signUp,
  }
})
