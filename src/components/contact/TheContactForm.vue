<template>
  <form class="contact-form" @submit.prevent="submit">
    <TheContactHeader title="напишите нам" />

    <div class="contact-form-fields">
      <div class="contact-form-field name">
        <label for="nameField" class="contact-form-label">Ваше имя:</label>
        <input
          type="text"
          id="nameField"
          name="nameField"
          placeholder="Введите ваш имя"
          v-model="v$.nameField.$model"
          class="contact-form-input"
        />
        <span
          v-for="item in v$.nameField.$errors"
          :key="item.$uid"
          class="contact-form-input-error"
          >{{ item.$message }}</span
        >
      </div>
      <div class="contact-form-field email">
        <label for="emailField" class="contact-form-label">Ваш email:</label>
        <input
          type="email"
          id="emailField"
          name="emailField"
          placeholder="Email адрес"
          v-model="v$.emailField.$model"
          class="contact-form-input"
        />
        <span
          v-for="item in v$.emailField.$errors"
          :key="item.$uid"
          class="contact-form-input-error"
          >{{ item.$message }}</span
        >
      </div>
      <div class="contact-form-field phone">
        <label for="phoneField" class="contact-form-label">Номер телефона:</label>
        <input
          type="tel"
          id="phoneField"
          name="phoneField"
          placeholder="89261234567"
          v-model="v$.phoneField.$model"
          class="contact-form-input"
        />
        <span
          v-for="item in v$.phoneField.$errors"
          :key="item.$uid"
          class="contact-form-input-error"
          >{{ item.$message }}</span
        >
      </div>
      <div class="contact-form-field text">
        <label for="messageField" class="contact-form-label">Текст сообщения:</label>
        <input
          id="messageField"
          name="messageField"
          placeholder="Опишите ваш вопрос как можно подробнее"
          v-model="messageField"
          class="contact-form-input text-area"
        />
      </div>
    </div>
    <div class="contact-form-button-box">
      <button :class="['contact-form-button', { 'contact-form-button-active': isAgree.length }]">
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

const submit = async () => {
  await v$.value.$validate()
  if (v$.value.$error) return

  const result = {
    name: nameField.value,
    email: emailField.value,
    phone: phoneField.value,
    message: messageField.value,
  }
  console.log('submit - ', result)
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
.contact-form-field {
  position: relative;
}
.contact-form-input {
  width: 100%;
  height: 71px;
  border-radius: 5px;
  background: var(--gray-normal-primary);
  font-weight: 400;
  font-size: 14px;
  padding: 14px 20px;
  border: 1px solid transparent;
  transition: 0.3s ease all;
}
.contact-form-input:focus {
  font-weight: 400;
  font-size: 14px;
  color: var(--black-primary);
  outline: 0;
  border: 1px solid var(--blue-primary);
}
.contact-form-input::placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--gray-normal-secondary);
}
.contact-form-input-error {
  position: absolute;
  top: 73px;
  left: 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: red;
}
.text-area {
  height: 103px;
}
.contact-form-label {
  position: absolute;
  top: 5px;
  left: 20px;
  font-weight: 600;
  font-size: 13px;
  line-height: 22px;
  color: var(--gray-dark-fivedary);
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
.contact-form-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 66px;
  border-radius: 5px;
  background: var(--gray-normal-secondary);
  font-weight: 800;
  font-size: 12px;
  line-height: 20px;
  color: var(--gray-light-sevendary);
  text-transform: uppercase;
}
.contact-form-button-active {
  background: var(--black-primary);
  color: var(--white-primary);
  cursor: pointer;
  transition: 0.3s ease all;
}
.contact-form-button-active:hover {
  color: var(--black-primary);
  background: var(--blue-primary);
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
