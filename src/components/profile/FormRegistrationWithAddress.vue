<template>
  <form class="registration-without-address-form" @submit.prevent="submitSignUpFormWithAddress">
    <div class="content-block">
      <div class="form-field">
        <label for="firstNameField" class="form-label">Имя:</label>
        <input
          type="text"
          id="firstNameField"
          name="firstNameField"
          placeholder="Введите ваше имя"
          v-model="v$.firstNameField.$model"
          :class="['form-input', { 'form-input-warning': v$.firstNameField.$errors.length }]"
        />
        <span v-for="item in v$.firstNameField.$errors" :key="item.$uid" class="form-input-error">{{
          item.$message
        }}</span>
      </div>
      <div class="form-field">
        <label for="lastNameField" class="form-label">Фамилия:</label>
        <input
          type="text"
          id="lastNameField"
          name="lastNameField"
          placeholder="Введите вашу фамилию"
          v-model="v$.lastNameField.$model"
          :class="['form-input', { 'form-input-warning': v$.lastNameField.$errors.length }]"
        />
        <span v-for="item in v$.lastNameField.$errors" :key="item.$uid" class="form-input-error">{{
          item.$message
        }}</span>
      </div>
      <div class="form-field">
        <label for="phoneField" class="form-label">Номер телефона:</label>
        <input
          type="tel"
          id="phoneField"
          name="phoneField"
          placeholder="89261002233"
          v-model="v$.phoneField.$model"
          :class="['form-input', { 'form-input-warning': v$.phoneField.$errors.length }]"
        />
        <span v-for="item in v$.phoneField.$errors" :key="item.$uid" class="form-input-error">{{
          item.$message
        }}</span>
      </div>
      <div class="form-field">
        <label for="emailField" class="form-label">Email адрес:</label>
        <input
          type="email"
          id="emailField"
          name="emailField"
          placeholder="yavasyaivanov@gmail.com"
          v-model="v$.emailField.$model"
          :class="['form-input', { 'form-input-warning': v$.emailField.$errors.length }]"
        />
        <span v-for="item in v$.emailField.$errors" :key="item.$uid" class="form-input-error">{{
          item.$message
        }}</span>
      </div>
      <div class="form-field">
        <label for="passwordField" class="form-label">Пароль:</label>
        <input
          type="password"
          id="passwordField"
          name="passwordField"
          placeholder="123456"
          v-model="v$.passwordField.$model"
          :class="['form-input', { 'form-input-warning': v$.passwordField.$errors.length }]"
        />
        <span v-for="item in v$.passwordField.$errors" :key="item.$uid" class="form-input-error">{{
          item.$message
        }}</span>
      </div>
      <div class="form-field">
        <label for="confirmPasswordField" class="form-label">Повторите пароль:</label>
        <input
          type="password"
          id="confirmPasswordField"
          name="confirmPasswordField"
          placeholder="123456"
          v-model.trim="v$.confirmPasswordField.$model"
          :class="['form-input', { 'form-input-warning': v$.confirmPasswordField.$errors.length }]"
        />
        <span
          v-for="item in v$.confirmPasswordField.$errors"
          :key="item.$uid"
          class="form-input-error"
          >{{ item.$message }}</span
        >
      </div>
    </div>
    <div class="content-block">
      <div class="form-field">
        <label for="countryField" class="form-label">Страна:</label>
        <input
          type="text"
          id="countryField"
          name="countryField"
          placeholder="Введите страну"
          v-model="v$.countryField.$model"
          :class="['form-input', { 'form-input-warning': v$.countryField.$errors.length }]"
        />
        <span v-for="item in v$.countryField.$errors" :key="item.$uid" class="form-input-error">{{
          item.$message
        }}</span>
      </div>
      <div class="form-field">
        <label for="regionField" class="form-label">Область / район:</label>
        <input
          type="text"
          id="regionField"
          name="regionField"
          placeholder="Введите область или район"
          v-model="v$.regionField.$model"
          :class="['form-input', { 'form-input-warning': v$.regionField.$errors.length }]"
        />
        <span v-for="item in v$.regionField.$errors" :key="item.$uid" class="form-input-error">{{
          item.$message
        }}</span>
      </div>
      <div class="form-field">
        <label for="indexField" class="form-label">Индекс:</label>
        <input
          type="number"
          id="indexField"
          name="indexField"
          placeholder="Введите индекс"
          v-model="v$.indexField.$model"
          :class="['form-input', { 'form-input-warning': v$.indexField.$errors.length }]"
        />
        <span v-for="item in v$.indexField.$errors" :key="item.$uid" class="form-input-error">{{
          item.$message
        }}</span>
      </div>
      <div class="form-field">
        <label for="cityField" class="form-label">Город:</label>
        <input
          type="text"
          id="cityField"
          name="cityField"
          placeholder="Введите ваш город"
          v-model="v$.cityField.$model"
          :class="['form-input', { 'form-input-warning': v$.cityField.$errors.length }]"
        />
        <span v-for="item in v$.cityField.$errors" :key="item.$uid" class="form-input-error">{{
          item.$message
        }}</span>
      </div>
      <div class="form-field">
        <label for="streetField" class="form-label">Улица:</label>
        <input
          type="text"
          id="streetField"
          name="streetField"
          placeholder="Введите название улицы"
          v-model="v$.streetField.$model"
          :class="['form-input', { 'form-input-warning': v$.streetField.$errors.length }]"
        />
        <span v-for="item in v$.streetField.$errors" :key="item.$uid" class="form-input-error">{{
          item.$message
        }}</span>
      </div>
      <div class="form-field">
        <label for="buildingField" class="form-label">Номер дома</label>
        <input
          type="text"
          id="buildingField"
          name="buildingField"
          placeholder="Введите номер дома и квартиры"
          v-model="v$.buildingField.$model"
          :class="['form-input', { 'form-input-warning': v$.buildingField.$errors.length }]"
        />
        <span v-for="item in v$.buildingField.$errors" :key="item.$uid" class="form-input-error">{{
          item.$message
        }}</span>
      </div>
      <div class="form-field">
        <label for="flatField" class="form-label">Номер квартиры</label>
        <input
          type="text"
          id="flatField"
          name="flatField"
          placeholder="Введите номер квартиры"
          v-model="v$.flatField.$model"
          :class="['form-input', { 'form-input-warning': v$.flatField.$errors.length }]"
        />
        <span v-for="item in v$.flatField.$errors" :key="item.$uid" class="form-input-error">{{
          item.$message
        }}</span>
      </div>
    </div>

    <button :class="['form-button', { 'form-button-special': isValid }]">
      <AppButtonLoader v-if="isLoading" />
      <span v-else>Оформить</span>
    </button>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, collection, query, getDocs, setDoc, doc } from 'firebase/firestore'
import { useVuelidate } from '@vuelidate/core'
import { helpers, required, email, minLength, sameAs, numeric } from '@vuelidate/validators'
import { PATH_ORDER } from '@/mock/routes'
import { useUserStore } from '@/stores/user-store'
import { useOrderStore } from '@/stores/order-store'
import { useCartStore } from '@/stores/cart-store'
import AppButtonLoader from '@/components/loader/AppButtonLoader.vue'

const emit = defineEmits(['closeOrderWithoutUserModal'])

const router = useRouter()
const userStore = useUserStore()
const orderStore = useOrderStore()
const cartStore = useCartStore()
const db = getFirestore()

const firstNameField = ref(null)
const lastNameField = ref(null)
const phoneField = ref(null)
const emailField = ref(null)
const passwordField = ref(null)
const confirmPasswordField = ref(null)
const countryField = ref(null)
const regionField = ref(null)
const indexField = ref(null)
const cityField = ref(null)
const streetField = ref(null)
const buildingField = ref(null)
const flatField = ref(null)

const isLoading = ref(false)

const rules = computed(() => ({
  firstNameField: {
    required: helpers.withMessage('Укажите имя', required),
    minLength: helpers.withMessage('Имя должно быть не менее 3 символов', minLength(3)),
  },
  lastNameField: {
    required: helpers.withMessage('Укажите фамилию', required),
    minLength: helpers.withMessage('Фамилия должна быть не менее 3 символов', minLength(3)),
  },
  phoneField: {
    required: helpers.withMessage('Укажите телефон', required),
    numeric: helpers.withMessage('Введите цифры', numeric),
  },
  emailField: {
    required: helpers.withMessage('Укажите почту', required),
    email: helpers.withMessage('Введите корректную почту', email),
  },
  passwordField: {
    required: helpers.withMessage('Укажите пароль', required),
    minLength: helpers.withMessage('Пароль должен быть не менее 6 символов', minLength(6)),
  },
  confirmPasswordField: {
    required: helpers.withMessage('Подтвердите пароль', required),
    sameAsPassword: helpers.withMessage('Пароли не совпадают', sameAs(passwordField.value)),
  },
  countryField: {
    required: helpers.withMessage('Укажите страну', required),
    minLength: helpers.withMessage('Название должно быть не менее 3 символов', minLength(3)),
  },
  regionField: {
    required: helpers.withMessage('Укажите область или район', required),
    minLength: helpers.withMessage('Название должно быть не менее 3 символов', minLength(3)),
  },
  indexField: {
    required: helpers.withMessage('Укажите индекс', required),
    numeric: helpers.withMessage('Введите цифры', numeric),
  },
  cityField: {
    required: helpers.withMessage('Укажите город', required),
    minLength: helpers.withMessage('Название должно быть не менее 3 символов', minLength(3)),
  },
  streetField: {
    required: helpers.withMessage('Укажите улицу', required),
    minLength: helpers.withMessage('Название должно быть не менее 3 символов', minLength(3)),
  },
  buildingField: {
    required: helpers.withMessage('Укажите номер дома', required),
  },
  flatField: {
    required: helpers.withMessage('Укажите номер квартиры', required),
  },
}))

const v$ = useVuelidate(rules, {
  firstNameField,
  lastNameField,
  phoneField,
  emailField,
  passwordField,
  confirmPasswordField,
  countryField,
  regionField,
  indexField,
  cityField,
  streetField,
  buildingField,
  flatField,
})

const isValid = computed(
  () =>
    firstNameField.value &&
    lastNameField.value &&
    phoneField.value &&
    emailField.value &&
    passwordField.value &&
    confirmPasswordField.value === passwordField.value &&
    countryField.value &&
    regionField.value &&
    indexField.value &&
    cityField.value &&
    streetField.value &&
    buildingField.value &&
    flatField.value &&
    !v$.$errors,
)

const getProfile = async () => {
  const getData = query(collection(db, `users/${userStore.user.id}/profile`))
  const listDocs = await getDocs(getData)
  const profileData = listDocs.docs.map((doc) => doc.data())
  if (profileData[0]) {
    userStore.setUserProfile(profileData[0])
  }
}

const submitSignUpFormWithAddress = async () => {
  isLoading.value = true

  // Делаем регистрацию пользователя по почте и паролю
  await userStore.signUp(emailField.value, passwordField.value)

  // Затем запрашиваем сервер и если пользователь создался, передаем его почту и айди в стор
  onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      userStore.user.id = user.uid
      userStore.user.email = user.email
      getProfile()
    }
  })

  // Затем создаем на сервере профиль пользователя, отправляем туда имя, фамилию и телефон
  const payloadProfile = {
    id: userStore.user.id,
    firstName: firstNameField.value,
    lastName: lastNameField.value,
    phone: phoneField.value,
  }

  await setDoc(
    doc(db, `users/${userStore.user.id}/profile`, payloadProfile.id),
    payloadProfile,
  ).then(() => {
    userStore.setUserProfile(payloadProfile)
  })

  // Затем создаем на сервере адрес пользователя
  const payloadAddress = {
    id: (await userStore.setAddressId()).toString(),
    country: countryField.value,
    region: regionField.value,
    postIndex: indexField.value,
    city: cityField.value,
    street: streetField.value,
    building: buildingField.value,
    flat: flatField.value,
  }

  await setDoc(
    doc(db, `users/${userStore.user.id}/address`, payloadAddress.id),
    payloadAddress,
  ).then(() => {
    userStore.addUserAddress(payloadAddress)
  })

  // Затем из карт-стора передаем список товаров в ордер-стор
  orderStore.addAllCartItemsToOrder(cartStore.cartItems)
  // Затем очищаем карт-стор
  cartStore.deleteAllItems()

  // В конце убираем лоадинг, закрываем модалку и переводим пользователя на страницу заказа
  if (!userStore.error) {
    isLoading.value = false
    emit('closeOrderWithoutUserModal')
    console.log(userStore.user)
    console.log(userStore.userAddress)
    router.push(PATH_ORDER)
  }

  // Затем очищаем инпуты
  firstNameField.value = ''
  lastNameField.value = ''
  phoneField.value = ''
  emailField.value = ''
  passwordField.value = ''
  confirmPasswordField.value = ''
  countryField.value = ''
  regionField.value = ''
  indexField.value = ''
  cityField.value = ''
  streetField.value = ''
  buildingField.value = ''
  flatField.value = ''
}
</script>

<style scoped>
.registration-without-address-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}
@media (max-width: 767px) {
  .registration-without-address-form {
    grid-template-columns: 1fr;
  }
}
.content-block {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 26px;
}
</style>
