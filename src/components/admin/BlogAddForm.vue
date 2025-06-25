<template>
  <div class="shoes-form">
    <h2>Форма добавления нового блога на сервер FireBase</h2>
    <form class="form" @submit.prevent="submit">
      <div class="form-control">
        <label for="title">Заголовок</label>
        <input type="text" id="title" v-model="title" />
      </div>
      <div class="form-control">
        <label for="descriptionShort">Описание краткое</label>
        <textarea type="text" id="descriptionShort" v-model="descriptionShort" />
      </div>
      <div class="form-control">
        <label for="descriptionOne">Описание - Абзац №1</label>
        <textarea type="text" id="descriptionOne" v-model="descriptionOne" />
      </div>
      <div class="form-control">
        <label for="descriptionTwo">Описание - Абзац №2</label>
        <textarea type="text" id="descriptionTwo" v-model="descriptionTwo" />
      </div>
      <div class="form-control">
        <label for="descriptionThree">Описание - Абзац №3</label>
        <textarea type="text" id="descriptionThree" v-model="descriptionThree" />
      </div>
      <div class="form-control">
        <label for="descriptionFour">Описание - Абзац №4</label>
        <textarea type="text" id="descriptionFour" v-model="descriptionFour" />
      </div>
      <div class="form-control">
        <label for="date">Дата</label>
        <input type="text" id="date" v-model="date" />
      </div>
      <div class="form-control">
        <label for="slug">Ссылка</label>
        <input type="text" id="slug" v-model="slug" />
      </div>

      <div class="form-box">
        <div class="form-control">
          <label for="imageSmall">Ссылка на маленькую картинку</label>
          <input type="text" id="imageSmall" v-model="imageSmall" />
        </div>
        <div class="form-control">
          <label for="imageNormal">Ссылка на среднюю картинку</label>
          <input type="text" id="imageNormal" v-model="imageNormal" />
        </div>
        <div class="form-control">
          <label for="imageBig">Ссылка на большую картинку</label>
          <input type="text" id="imageBig" v-model="imageBig" />
        </div>
      </div>

      <button class="btn primary">Загрузить на сервер</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const title = ref('')
const descriptionShort = ref('')
const descriptionOne = ref('')
const descriptionTwo = ref('')
const descriptionThree = ref('')
const descriptionFour = ref('')
const date = ref('')
const slug = ref('')

const imageSmall = ref('')
const imageNormal = ref('')
const imageBig = ref('')

const submit = async () => {
  try {
    await axios.post('https://vue-xwear-default-rtdb.firebaseio.com/blog.json', {
      title: title.value,
      descriptionShort: descriptionShort.value,
      descriptionOne: descriptionOne.value,
      descriptionTwo: descriptionTwo.value,
      descriptionThree: descriptionThree.value,
      descriptionFour: descriptionFour.value,
      date: date.value,
      slug: slug.value,

      imageSmall: imageSmall.value,
      imageNormal: imageNormal.value,
      imageBig: imageBig.value,
    })

    title.value = ''
    descriptionShort.value = ''
    descriptionOne.value = ''
    descriptionTwo.value = ''
    descriptionThree.value = ''
    descriptionFour.value = ''
    date.value = ''
    slug.value = ''

    imageSmall.value = ''
    imageNormal.value = ''
    imageBig.value = ''
  } catch (error) {
    console.log(error)
  }
}
</script>

<style scoped>
.shoes-form {
  display: flex;
  flex-direction: column;
  padding-top: 40px;
}
.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
}
.form-box {
  display: flex;
  gap: 20px;
}
.form-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
}
.form-control {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding-top: 20px;
}
.form-control input,
.form-control select,
.form-control textarea {
  margin: 0;
  outline: none;
  border: 2px solid #ccc;
  display: block;
  width: 100%;
  color: #2c3e50;
  padding: 0.5rem 1.5rem;
  border-radius: 3px;
  font-size: 1rem;
  resize: none;
}

.form-control label {
  display: block;
  font-weight: 500;
}

.form-control textarea:active,
.form-control textarea:focus,
.form-control input:active,
.form-control input:focus {
  transition: border 0.22s;
  border: 2px solid #42b983;
}
.btn {
  display: flex;
  align-self: flex-end;
  width: fit-content;
  border-radius: 99px;
  letter-spacing: 0.05em;
  border: 1px solid #42b983;
  text-transform: uppercase;
  margin-top: 20px;
  padding: 0.5rem 1.5rem;
  white-space: nowrap;
  font-weight: 700;
  transition: 0.3s ease all;
}

.btn:hover {
  cursor: pointer;
  opacity: 0.8;
}

.btn:disabled {
  cursor: not-allowed;
  opacity: 1 !important;
  background: #eee !important;
  border-color: #ddd !important;
  color: #999 !important;
}

.btn:active {
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
}

.btn.primary {
  background: #42b983;
  color: #fff;
}
.btn.danger {
  background: #e53935;
  color: #fff;
  border-color: #e53935;
}

.btn.warning {
  background: #c25205;
  color: #fff;
  border-color: #c25205;
}
</style>
