<template>
  <AppProfileHeading title="Добавление адреса" />
  <form class="address-form" @submit.prevent="submitAddAddressForm">
    <!-- <div class="form-field">
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
    </div> -->
    <!-- <div class="form-field">
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
    </div> -->
    <!-- <div class="form-field">
      <label for="companyField" class="form-label"
        >Название компании: <span class="form-label-span">(не обязательно)</span></label
      >
      <input
        type="text"
        id="companyField"
        name="companyField"
        placeholder="Введите название"
        v-model="companyField"
        class="form-input"
      />
    </div> -->
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

    <!-- <div class="form-field">
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
    </div> -->
    <!-- <div class="form-field">
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
    </div> -->
    <!-- <button class="form-button form-button-active">Сохранить</button> -->
    <button :class="['form-button', { 'form-button-active': isValid }]">
      <AppButtonLoader v-if="isLoading" />
      <span v-else>Сохранить</span>
    </button>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import { getFirestore, setDoc, doc } from 'firebase/firestore'
import { useVuelidate } from '@vuelidate/core'
import {
  helpers,
  required,
  // email,
  minLength,
  numeric,
} from '@vuelidate/validators'
import AppProfileHeading from '@/components/profile/AppProfileHeading.vue'
import AppButtonLoader from '@/components/loader/AppButtonLoader.vue'
import { useUserStore } from '@/stores/user-store'

const emit = defineEmits(['closeAddressForm'])

const userStore = useUserStore()
const db = getFirestore()

// const firstNameField = ref(null)
// const lastNameField = ref(null)
const countryField = ref(null)
const regionField = ref(null)
const indexField = ref(null)
const cityField = ref(null)
const streetField = ref(null)
const buildingField = ref(null)
const flatField = ref(null)
// const emailField = ref(null)
// const phoneField = ref(null)

const isLoading = ref(false)

const rules = computed(() => ({
  // firstNameField: {
  //   required: helpers.withMessage('Укажите имя', required),
  //   minLength: helpers.withMessage('Имя должно быть не менее 3 символов', minLength(3)),
  // },
  // lastNameField: {
  //   required: helpers.withMessage('Укажите фамилию', required),
  //   minLength: helpers.withMessage('Фамилия должна быть не менее 3 символов', minLength(3)),
  // },
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
  // emailField: {
  //   required: helpers.withMessage('Укажите почту', required),
  //   email: helpers.withMessage('Введите корректную почту', email),
  // },
  // phoneField: {
  //   required: helpers.withMessage('Укажите телефон', required),
  //   numeric: helpers.withMessage('Введите цифры', numeric),
  // },
}))

const v$ = useVuelidate(rules, {
  // firstNameField,
  // lastNameField,
  countryField,
  regionField,
  indexField,
  cityField,
  streetField,
  buildingField,
  flatField,
  // emailField,
  // phoneField,
})

const isValid = computed(
  () =>
    countryField.value &&
    regionField.value &&
    indexField.value &&
    cityField.value &&
    streetField.value &&
    buildingField.value &&
    flatField.value &&
    !v$.$errors,
)

// const submitAddAddressForm = () => {
//   emit('closeForm')
//   console.log('submitAddAddressForm')
// }

const submitAddAddressForm = async () => {
  isLoading.value = true

  const payload = {
    id: '1',
    country: countryField.value,
    region: regionField.value,
    postIndex: indexField.value,
    city: cityField.value,
    street: streetField.value,
    building: buildingField.value,
    flat: flatField.value,
  }

  await setDoc(doc(db, `users/${userStore.user.id}/address`, payload.id), payload).then(() => {
    userStore.addUserAddress(payload)
  })

  isLoading.value = false
  emit('closeAddressForm')

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
.address-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* display: flex;
  flex-direction: column; */
  gap: 30px;
  /* width: 100%;
  max-width: 433px; */
  padding-top: 30px;
  padding-bottom: 80px;
}
@media (max-width: 767px) {
  .address-form {
    grid-template-columns: 1fr;
    padding-top: 20px;
    padding-bottom: 40px;
  }
}
</style>
