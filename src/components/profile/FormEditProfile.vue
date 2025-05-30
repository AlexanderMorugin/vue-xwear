<template>
  <!-- Кнопка меню профиля появляется при разрешении менее 1024px -->
  <AppProfileButton v-if="isScreenLarge" @openProfileMenu="$emit('openProfileMenu')" />

  <AppProfileHeading title="Редактирование профиля" />
  <form class="profile-edit-form" @submit.prevent="submitProfileEditForm">
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
    <button :class="['form-button', { 'form-button-active': isValid }]">Сохранить</button>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { helpers, required, email, minLength, numeric } from '@vuelidate/validators'
import AppProfileHeading from '@/components/profile/AppProfileHeading.vue'
import AppProfileButton from '@/components/profile/AppProfileButton.vue'
import { useResizeLarge } from '@/use/useResizeLarge'

// Брейкпоинты ширины экрана
const { isScreenLarge } = useResizeLarge()

// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['openProfileMenu'])

const firstNameField = ref(null)
const lastNameField = ref(null)
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
  emailField,
  phoneField,
})

const isValid = computed(
  () =>
    firstNameField.value &&
    lastNameField.value &&
    emailField.value &&
    phoneField.value &&
    !v$.$errors,
)

const submitProfileEditForm = () => {
  console.log('submitProfileEditForm')
}
</script>

<style scoped>
.profile-edit-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  padding-top: 30px;
  padding-bottom: 80px;
}
@media (max-width: 767px) {
  .profile-edit-form {
    grid-template-columns: 1fr;
    padding-top: 20px;
    padding-bottom: 40px;
  }
}
</style>
