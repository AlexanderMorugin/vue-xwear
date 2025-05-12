<template>
  <div class="shoes-form">
    <h2>Форма добавления товаров на сервер FireBase</h2>
    <form class="form" @submit.prevent="submit">
      <div class="form-control">
        <label for="category">Категория</label>
        <select id="category" v-model="category">
          <option value="crossovky">Кроссовки</option>
          <option value="kedy">Кеды</option>
        </select>
      </div>
      <div class="form-control">
        <label for="brand">Бренд</label>
        <select id="brand" v-model="brand">
          <option value="adidas">Adidas</option>
          <option value="nike">Nike</option>
          <option value="reebok">Reebok</option>
        </select>
      </div>
      <div class="form-control">
        <label for="name">Наименование товара</label>
        <input type="text" id="name" v-model="name" />
      </div>
      <div class="form-control">
        <label for="description">Описание</label>
        <textarea type="text" id="description" v-model="description" />
      </div>

      <div class="form-control">
        <label for="imageOneSmall">Ссылка на маленькую картинку № 1</label>
        <input type="text" id="imageOneSmall" v-model="imageOneSmall" />
      </div>
      <div class="form-control">
        <label for="imageOneBig">Ссылка на большую картинку № 1</label>
        <input type="text" id="imageOneBig" v-model="imageOneBig" />
      </div>

      <div class="form-control">
        <label for="imageTwoSmall">Ссылка на маленькую картинку № 2</label>
        <input type="text" id="imageTwoSmall" v-model="imageTwoSmall" />
      </div>
      <div class="form-control">
        <label for="imageTwoBig">Ссылка на большую картинку № 2</label>
        <input type="text" id="imageTwoBig" v-model="imageTwoBig" />
      </div>

      <div class="form-control">
        <label for="imageThreeSmall">Ссылка на маленькую картинку № 3</label>
        <input type="text" id="imageThreeSmall" v-model="imageThreeSmall" />
      </div>
      <div class="form-control">
        <label for="imageThreeBig">Ссылка на большую картинку № 3</label>
        <input type="text" id="imageThreeBig" v-model="imageThreeBig" />
      </div>

      <div class="form-control">
        <label for="imageFourSmall">Ссылка на маленькую картинку № 4</label>
        <input type="text" id="imageFourSmall" v-model="imageFourSmall" />
      </div>
      <div class="form-control">
        <label for="imageFourBig">Ссылка на большую картинку № 4</label>
        <input type="text" id="imageFourBig" v-model="imageFourBig" />
      </div>

      <div class="form-control">
        <label for="color">Цвет</label>
        <select id="color" v-model="color">
          <option value="black">Чёрные</option>
          <option value="white">Белые</option>
          <option value="blue">Синие</option>
          <option value="pink">Розовые</option>
        </select>
      </div>

      <div class="form-control">
        <label for="price36">Цена размера 36</label>
        <input type="text" id="price36" v-model="price36" />
      </div>
      <div class="form-control">
        <label for="price37">Цена размера 37</label>
        <input type="text" id="price37" v-model="price37" />
      </div>
      <div class="form-control">
        <label for="price38">Цена размера 38</label>
        <input type="text" id="price38" v-model="price38" />
      </div>
      <div class="form-control">
        <label for="price39">Цена размера 39</label>
        <input type="text" id="price39" v-model="price39" />
      </div>
      <div class="form-control">
        <label for="price40">Цена размера 40</label>
        <input type="text" id="price40" v-model="price40" />
      </div>
      <div class="form-control">
        <label for="price41">Цена размера 41</label>
        <input type="text" id="price41" v-model="price41" />
      </div>
      <div class="form-control">
        <label for="price42">Цена размера 42</label>
        <input type="text" id="price42" v-model="price42" />
      </div>
      <div class="form-control">
        <label for="price43">Цена размера 43</label>
        <input type="text" id="price43" v-model="price43" />
      </div>
      <div class="form-control">
        <label for="price44">Цена размера 44</label>
        <input type="text" id="price44" v-model="price44" />
      </div>

      <button class="btn primary">Создать</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const category = ref('')
const brand = ref('')
const name = ref('')
const description = ref('')
const color = ref('')
const imageOneSmall = ref('')
const imageOneBig = ref('')
const imageTwoSmall = ref('')
const imageTwoBig = ref('')
const imageThreeSmall = ref('')
const imageThreeBig = ref('')
const imageFourSmall = ref('')
const imageFourBig = ref('')
const price36 = ref('')
const price37 = ref('')
const price38 = ref('')
const price39 = ref('')
const price40 = ref('')
const price41 = ref('')
const price42 = ref('')
const price43 = ref('')
const price44 = ref('')

const submit = async () => {
  try {
    await axios.post('https://vue-xwear-default-rtdb.firebaseio.com/shoes.json', {
      category: category.value,
      brand: brand.value,
      name: name.value,
      description: description.value,
      color: color.value,
      imageOneSmall: imageOneSmall.value,
      imageOneBig: imageOneBig.value,
      imageTwoSmall: imageTwoSmall.value,
      imageTwoBig: imageTwoBig.value,
      imageThreeSmall: imageThreeSmall.value,
      imageThreeBig: imageThreeBig.value,
      imageFourSmall: imageFourSmall.value,
      imageFourBig: imageFourBig.value,
      price36: price36.value,
      price37: price37.value,
      price38: price38.value,
      price39: price39.value,
      price40: price40.value,
      price41: price41.value,
      price42: price42.value,
      price43: price43.value,
      price44: price44.value,
    })

    brand.value = ''
    name.value = ''
    description.value = ''
    category.value = ''
    color.value = ''
    imageOneSmall.value = ''
    imageOneBig.value = ''
    imageTwoSmall.value = ''
    imageTwoBig.value = ''
    imageThreeSmall.value = ''
    imageThreeBig.value = ''
    imageFourSmall.value = ''
    imageFourBig.value = ''
    price36.value = ''
    price37.value = ''
    price38.value = ''
    price39.value = ''
    price40.value = ''
    price41.value = ''
    price42.value = ''
    price43.value = ''
    price44.value = ''
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
.form-control {
  display: flex;
  flex-direction: column;
  gap: 8px;
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
  color: #42b983;
  position: relative;
  place-content: center;
  place-items: center;
  width: fit-content;
  border-radius: 99px;
  letter-spacing: 0.05em;
  border: 1px solid #42b983;
  text-decoration: none;
  text-transform: uppercase;
  margin-top: 20px;
  margin-right: 10px;
  padding: 0.5rem 1.5rem;
  white-space: nowrap;
  font-weight: 700;
  outline: none;
  background: #fff;
  transition: all 0.22s;
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
