<template>
  <form class="contact-form" @submit.prevent="submitContactForm">
    <TheContactHeader title="напишите нам" />

    <div class="contact-form-fields">
      <div class="form-field name">
        <label for="nameField" class="form-label">Ваше имя:</label>
        <input
          type="text"
          id="nameField"
          name="nameField"
          placeholder="Введите ваш имя"
          v-model="v$.nameField.$model"
          :class="[
            'form-input',
            { 'form-input-warning': v$.nameField.$errors.length && isAgree.length },
          ]"
        />
        <span v-for="item in v$.nameField.$errors" :key="item.$uid" class="form-input-error">{{
          isAgree.length ? item.$message : ''
        }}</span>
      </div>
      <div class="form-field email">
        <label for="emailField" class="form-label">Ваш email:</label>
        <input
          type="email"
          id="emailField"
          name="emailField"
          placeholder="Email адрес"
          v-model="v$.emailField.$model"
          :class="[
            'form-input',
            { 'form-input-warning': v$.emailField.$errors.length && isAgree.length },
          ]"
        />
        <span v-for="item in v$.emailField.$errors" :key="item.$uid" class="form-input-error">{{
          isAgree.length ? item.$message : ''
        }}</span>
      </div>
      <div class="form-field phone">
        <label for="phoneField" class="form-label">Номер телефона:</label>
        <input
          type="tel"
          id="phoneField"
          name="phoneField"
          placeholder="89261234567"
          v-model="v$.phoneField.$model"
          :class="[
            'form-input',
            { 'form-input-warning': v$.phoneField.$errors.length && isAgree.length },
          ]"
        />
        <span v-for="item in v$.phoneField.$errors" :key="item.$uid" class="form-input-error">{{
          isAgree.length ? item.$message : ''
        }}</span>
      </div>
      <div class="form-field text">
        <label for="messageField" class="form-label">Текст сообщения:</label>
        <input
          id="messageField"
          name="messageField"
          placeholder="Опишите ваш вопрос как можно подробнее"
          v-model="messageField"
          class="form-input text-area"
        />
      </div>
    </div>
    <div class="contact-form-button-box">
      <button :class="['form-button', { 'form-button-active': isAgree.length }]">
        Задать вопрос
      </button>
      <div class="contact-form-checkbox-container">
        <input type="checkbox" id="agree" value="agree" v-model="isAgree" class="checkbox-input" />
        <p class="contact-form-checkbox-text">
          Даю согласие на обработку персональных данных в соответствии с
          <router-link :to="PATH_PRIVACY">политикой конфиденциальности</router-link>
        </p>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { helpers, required, email, minLength, numeric } from '@vuelidate/validators'
import TheContactHeader from './TheContactHeader.vue'
import { PATH_PRIVACY } from '@/mock/routes'

const nameField = ref(null)
const emailField = ref(null)
const phoneField = ref(null)
const messageField = ref(null)
const isAgree = ref([])

const rules = computed(() => ({
  nameField: {
    required: helpers.withMessage('Укажите имя', required),
    minLength: helpers.withMessage('Имя должно быть не менее 3 символов', minLength(3)),
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

const v$ = useVuelidate(rules, { nameField, emailField, phoneField })

const submitContactForm = async () => {
  await v$.value.$touch()
  if (v$.value.$error) return

  const result = {
    name: nameField.value,
    email: emailField.value,
    phone: phoneField.value,
    message: messageField.value,
  }
  console.log('submit - ', result)

  nameField.value = null
  emailField.value = null
  phoneField.value = null
  messageField.value = null
  isAgree.value = []
}
</script>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.contact-form-fields {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: 'name email' 'phone phone' 'text text';
  gap: 30px;
}
@media (max-width: 767px) {
  .contact-form-fields {
    grid-template-columns: 1fr;
    grid-template-areas: 'name' 'email' 'phone' 'text';
  }
}
.name {
  grid-area: name;
}
.email {
  grid-area: email;
}
.phone {
  grid-area: phone;
}
.text {
  grid-area: text;
}
.text-area {
  height: 103px;
}
.contact-form-button-box {
  display: flex;
  align-items: center;
  gap: 30px;
}
@media (max-width: 767px) {
  .contact-form-button-box {
    flex-direction: column;
  }
}
.contact-form-checkbox-container {
  display: grid;
  grid-template-columns: 23px 1fr;
  gap: 10px;
}
.contact-form-checkbox-text {
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: var(--gray-normal-thirdary);
}
.contact-form-checkbox-text a {
  text-decoration: underline;
  color: var(--gray-normal-thirdary);
  transition: 0.3s ease all;
}
.contact-form-checkbox-text a:hover {
  color: var(--blue-primary);
}
</style>
