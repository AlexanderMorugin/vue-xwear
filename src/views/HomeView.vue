<template>
  <app-page tag="main" class="container">
    <AppHeading title="Проект интернет-магазина XWEAR" />

    <div class="home-view">
      <div class="home-view-block">
        <p class="home-view-text-bold">
          Приложение выполнено на JavaScript фреймворке Vue 3, с использованием
          минимально-необходимого набора дополнительных библиотек:
        </p>
        <span class="home-view-text home-view-text-span"
          >- vue-router (Перемещение между страницами)</span
        >
        <span class="home-view-text home-view-text-span"
          >- pinia (Менеджер виртуального состояния)</span
        >
        <span class="home-view-text home-view-text-span"
          >- firebase (Сопровождение Бекенда и Аутентификации пользователей)</span
        >
        <span class="home-view-text home-view-text-span">- axios (Выполненяет HTTP-запросы)</span>
        <span class="home-view-text home-view-text-span">- vuelidate (Валидация полей форм)</span>
        <span class="home-view-text home-view-text-span">- embla-carousel (Слайдер)</span>
      </div>

      <p class="home-view-text-bold">
        Приложение задеплоено на бесплатной облачной платформе Vercel, где расположена фронтенд
        часть.
      </p>
      <div class="home-view-block">
        <p class="home-view-text-bold">
          Бекенд лежит на бесплатной облачной платформе Firebase, сервисы которой предоставляют
          данному приложению:
        </p>
        <span class="home-view-text home-view-text-span"
          >- Realtime Database (там хранятся исходные данные о товарах и блогах)</span
        >
        <span class="home-view-text home-view-text-span"
          >- Authentication (сервис для аутентификации пользователей через электронную почту и
          пароль)</span
        >
        <span class="home-view-text home-view-text-span"
          >- Cloud Firestore (база данных документов NoSQL, куда сохраняются данные пользователей и
          их заказы)</span
        >
      </div>
      <div class="home-view-block">
        <p class="home-view-text-bold">Приложение выполнено согласно макета Figma:</p>
        <a
          href="https://www.figma.com/design/q4WtDDF0znjTs7mZTROgpt/%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD---%D0%9E%D0%B4%D0%B5%D0%B6%D0%B4%D1%8B?node-id=0-1"
          target="_blank"
          class="home-view-link"
          >https://www.figma.com/</a
        >
      </div>
      <div class="home-view-block">
        <p class="home-view-text-bold">Что умеет приложение:</p>
        <p class="home-view-text home-view-text-span">
          - На общих страницах кроссовок или кед, имеются фильтры, используя которые можно
          осортировать товары по "Цене", "Бренду" или "Цвету". Также товары можно сортировать по
          убыванию или возростанию цены.
        </p>
        <p class="home-view-text home-view-text-span">
          - Любой пользователь может смотреть товары, добавлять их в свою корзину и далее оформлять
          заказ. Если пользователь не зарегистрирован, то при оформлении заказа ему предлагается
          заполнить форму доставки с указанием личных данных. Далее у пользователя автоматически
          создается аккаунт и он может пользоваться личным кабинетом.
        </p>
        <p class="home-view-text home-view-text-span">
          - Зарегистрированный пользователь может редактировать свой профиль, добавлять новый адрес
          доставки или редактировать старый. Делать заказ выбранных товаров и смотреть историю своих
          заказов. Также можно отмечать товары как "Избранные" (нажав на звездочку) и эти товары
          далее будут отображаться в его личном кабинете или на страницах товаров (звездочка будет
          красной).
        </p>
        <p class="home-view-text home-view-text-span">
          - Зарегистрированный пользователь видит только свои, а не чужие "Избранные товары", а так
          же "Корзину" и "Заказы". Все данные сохраняются при перезагрузке страницы.
        </p>
        <p class="home-view-text home-view-text-span">
          - При добавлении товара в корзину, на странице-карточке этого товара сразу же отображается
          значок, какой именно размер товара был добавлен в корзину. На общей странице товаров
          "Кроссовки" или "Кеды", на товарах добавленных в корзину, тоже отображаются значки какого
          именно размера данный товар уже в корзине.
        </p>
        <p class="home-view-text home-view-text-span">
          - В корзине можно менять количество выбранных товаров или полностью их удалять. Корзина
          автоматически считает "Общую сумму заказа". Так же корзину можно очистить полностью в один
          клик.
        </p>
        <p class="home-view-text home-view-text-span">
          - На странице-карточке товара, внизу отображается слайдер "Интересные предложения", где
          показываются товары подобного цвета.
        </p>
        <p class="home-view-text home-view-text-span">
          - В приложении имеется множество модальных окон. Так же всплывающие тосты.
        </p>
      </div>
      <p class="home-view-text-bold">
        Приложение полностью адаптировано и имеет три основных брейкпоинта 1024px, 768px, 390px.
        Минимальная ширина экрана предусматривается как 320px.
      </p>
      <p class="home-view-text-bold">
        Не используется TypeScript и SCSS. Не прописаны никакие мета-теги. Сайт представляет собой
        SPA приложение, т.е. одностраничный пустой документ (глазами поисковых роботов) с
        выполнением JavaScript кода на стороне клиента.
      </p>
    </div>
  </app-page>
</template>

<script setup>
import AppPage from '@/layouts/AppPage.vue'
import AppHeading from '@/components/AppHeading.vue'
</script>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 40px;
}
@media (max-width: 767px) {
  .home-view {
    padding-top: 20px;
  }
}
.home-view-block {
  display: flex;
  flex-direction: column;
}
.home-view-text-bold {
  font-weight: 600;
  font-size: 22px;
  line-height: 38px;
  color: var(--black-primary);
}
@media (max-width: 767px) {
  .home-view-text-bold {
    font-size: 18px;
    line-height: 26px;
  }
}
.home-view-text {
  font-weight: 400;
  font-size: 16px;
  line-height: 36px;
  color: var(--black-primary);
}
.home-view-text-span {
  padding-left: 30px;
}
@media (max-width: 767px) {
  .home-view-text-span {
    padding-left: 10px;
  }
}
.home-view-link {
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: var(--gray-dark-sevendary);
  transition: 0.3s ease all;
}
.home-view-link:hover {
  color: var(--blue-secondary);
}
</style>
