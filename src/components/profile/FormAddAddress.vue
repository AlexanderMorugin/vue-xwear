<template>
  <AppProfileHeading title="Добавление адреса" />
  <form class="address-form" @submit.prevent="submitAddAddressForm">
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
    </div>
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
      <label for="houseField" class="form-label">Номер дома / квартиры</label>
      <input
        type="text"
        id="houseField"
        name="houseField"
        placeholder="Введите номер дома и квартиры"
        v-model="v$.houseField.$model"
        :class="['form-input', { 'form-input-warning': v$.houseField.$errors.length }]"
      />
      <span v-for="item in v$.houseField.$errors" :key="item.$uid" class="form-input-error">{{
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
    <button class="form-button form-button-active">Сохранить</button>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { helpers, required, email, minLength, numeric } from '@vuelidate/validators'
import AppProfileHeading from '@/components/profile/AppProfileHeading.vue'

const emit = defineEmits(['closeForm'])

const firstNameField = ref(null)
const lastNameField = ref(null)
const countryField = ref(null)
const regionField = ref(null)
const indexField = ref(null)
const cityField = ref(null)
const streetField = ref(null)
const houseField = ref(null)
const emailField = ref(null)
const phoneField = ref(null)

const rules = computed(() => ({
  firstNameField: {
    required: helpers.withMessage('Укажите имя', required),
    minLength: helpers.withMessage('Имя должно быть не менее 3 символов', minLength(3)),
  },
  lastNameField: {
    required: helpers.withMessage('Укажите фамилию', required),
    minLength: helpers.withMessage('Фамилия должна быть не менее 3 символов', minLength(3)),
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
  houseField: {
    required: helpers.withMessage('Укажитеномер дома и квартиры', required),
  },
  emailField: {
    required: helpers.withMessage('Укажите почту', required),
    email: helpers.withMessage('Введите корректную почту', email),
  },
  phoneField: {
    required: helpers.withMessage('Укажите телефон', required),
    numeric: helpers.withMessage('Введите цифры', numeric),
  },
}))

const v$ = useVuelidate(rules, {
  firstNameField,
  lastNameField,
  countryField,
  regionField,
  indexField,
  cityField,
  streetField,
  houseField,
  emailField,
  phoneField,
})

// const isValid = computed(
//   () =>
//     firstNameField.value &&
//     lastNameField.value &&
//     emailField.value &&
//     phoneField.value &&
//     !v$.$errors,
// )

const submitAddAddressForm = () => {
  emit('closeForm')
  console.log('submitAddAddressForm')
}
</script>

<style scoped>
.address-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
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
