<template>
  <div class="home">
    <section class="banner vh-100">
      <div class="app-container py-5" fluid>
        <h1 class="banner__heading text-white w-50 py-4 mb-4 text-uppercase">Книги, которые вознесут вас на Олимп</h1>
        <b-button
          class="banner__button border-white rounded-0 py-1 px-5 mt-4 text-uppercase text-white"
          variant="transparent"
        >
          Узнать больше
        </b-button>
      </div>
    </section>

    <section class="selection text-center pt-5">
      <div class="app-container py-5" fluid>
        <h2 class="selection__heading text-uppercase py-5 m-0">Горячие новинки</h2>

        <SelectionSwiper class="mt-5" />
      </div>
    </section>

    <section class="about">
      <div class="app-container" fluid>
        <div class="d-flex justify-content-center">
          <div class="about__image w-50">
            <b-img :src="require('/src/assets/images/about_1.png')" class="w-100" />
          </div>
          <div class="w-50 p-5 bg-primary text-white text-center">
            <h2 class="about__heading py-3 m-0 mb-4 text-uppercase">О нас</h2>
            <p class="about__paragraph m-0 py-3 raleway-regular">Книжное наследие от мыслителей Древней Греции и до людей современности. Это не просто магазин, а настоящий клуб любителей книги, который объединяет в своем культурном пространстве людей самых разных интересов.</p>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div class="w-50 p-5 bg-primary text-white text-center">
            <h2 class="about__heading py-3 m-0 mb-4 text-uppercase">Гармония</h2>
            <p class="about__paragraph m-0 py-3 raleway-regular">Наш проект «Гармония» объединяет читателей и авторов в реальности и в интернете. Каждую неделю проводятся встречи онлайн и вживую. Из наших регулярных рубрик вы узнаете много нового о книгах и писателях.</p>
          </div>
          <div class="about__image w-50">
            <b-img :src="require('/src/assets/images/about_2.png')" class="w-100" />
          </div>
        </div>
      </div>
    </section>

    <section class="subscribe text-center">
      <div class="app-container" fluid>
        <h2 class="subscribe__heading text-uppercase">Хотите знать о книгах всё?</h2>
        <p class="subscribe__subtitle mt-2">Подпишитесь на нашу новостную рассылку</p>

        <b-form class="subscribe__form d-flex align-items-center justify-content-between">
          <b-form-input
            id="subscribe"
            required
            class="subscribe__input border-3 rounded-0 border-dark mr-3 px-3 py-4"
          ></b-form-input>
          <b-button
            type="submit"
            variant="transparent"
            class="subscribe__button border-3 rounded-0 border-dark px-5 text-uppercase"
          >Отправить</b-button>
        </b-form>
      </div>
    </section>
  </div>
</template>

<script>
import SelectionSwiper from '@/components/SelectionSwiper.vue'

export default {
  name: 'HomeView',
  components: { SelectionSwiper }
}
</script>

<style lang="scss" scoped>
.banner {
  background: url("/src/assets/images/banner_background.png") no-repeat 50% 20%/cover;
  &__heading {
    font-size: 80px;
    line-height: 120px;
  }
  &__button {
    font-size: 42px;
  }
}

.selection {
  &__heading {
    font-size: 64px;
  }
}

.about {
  &__image {
    img {
      object-fit: cover;
      object-position: 50% 50%;
    }
  }
  &__heading {
    font-size: 69px;
  }
  &__paragraph {
    font-size: 24px;
    line-height: 36px;
  }
}

.subscribe {
  padding: 140px 0;
  &__heading {
    font-size: 42px;
    line-height: 54px;
  }
  &__subtitle {
    font-size: 24px;
    line-height: 36px;
  }
  &__form {
    max-width: 1080px;
    width: 100%;
    margin: 64px auto 0;
  }
  &__input {
    font-size: 30px;
    line-height: 45px;
  }
  &__button {
    font-size: 30px;
    line-height: 45px;
  }
}
</style>
