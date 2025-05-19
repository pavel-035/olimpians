<template>
  <div class="home">
    <section class="banner vh-100">
      <div class="app-container py-5" fluid>
        <h1 class="banner__heading text-white w-xl-50 w-lg-75 py-xl-4 py-lg-3 mb-4 text-uppercase">Книги, которые вознесут вас на Олимп</h1>
        <b-button
          class="banner__button border-white rounded-0 py-2 px-5 mt-lg-4 mt-md-2 mt-sm-1 text-uppercase text-white"
          variant="transparent"
        >
          Узнать больше
        </b-button>
      </div>
    </section>

    <section class="selection text-center">
      <div class="app-container" fluid>
        <h2 class="selection__heading text-uppercase m-0">Горячие новинки</h2>

        <SelectionSwiper class="selection__swiper" />
      </div>
    </section>

    <section class="about">
      <div class="app-container" fluid>
        <div class="d-flex flex-column-reverse flex-sm-row justify-content-center">
          <div class="about__image w-sm-50 overflow-hidden">
            <b-img :src="require('/src/assets/images/about_1.png')" class="w-100 h-100" />
          </div>
          <div class="w-sm-50 p-sm-5 p-4 bg-primary text-white text-center">
            <h2 class="about__heading py-sm-3 p-0 m-0 mb-4 text-uppercase">О нас</h2>
            <p class="about__paragraph m-0 py-sm-3 raleway-regular">Книжное наследие от мыслителей Древней Греции и до людей современности. Это не просто магазин, а настоящий клуб любителей книги, который объединяет в своем культурном пространстве людей самых разных интересов.</p>
          </div>
        </div>
        <div class="d-flex flex-column flex-sm-row justify-content-center">
          <div class="w-sm-50 p-sm-5 p-4 bg-primary text-white text-center">
            <h2 class="about__heading py-sm-3 p-0 m-0 mb-4 text-uppercase">О нас</h2>
            <p class="about__paragraph m-0 py-sm-3 raleway-regular">Книжное наследие от мыслителей Древней Греции и до людей современности. Это не просто магазин, а настоящий клуб любителей книги, который объединяет в своем культурном пространстве людей самых разных интересов.</p>
          </div>
          <div class="about__image w-sm-50 overflow-hidden">
            <b-img :src="require('/src/assets/images/about_2.png')" class="w-100 h-100" />
          </div>
        </div>
      </div>
    </section>

    <section class="subscribe text-center">
      <div class="app-container" fluid>
        <h2 class="subscribe__heading text-uppercase">Хотите знать о книгах всё?</h2>
        <p class="subscribe__subtitle mt-2">Подпишитесь на нашу новостную рассылку</p>

        <b-form class="subscribe__form d-sm-flex align-items-center justify-content-between">
          <b-form-input
            id="subscribe"
            required
            class="subscribe__input border-3 rounded-0 border-dark mr-3 px-3 py-4 mb-sm-0 mb-3"
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
    font-size: 40px;
    line-height: 60px;
  }
  &__button {
    font-size: 24px;
    line-height: 36px;
  }
}

.selection {
  padding: 70px 0 80px;
  &__swiper {
    margin-top: 45px;
  }
  &__heading {
    font-size: 30px;
    line-height: 45px;
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
    font-size: 30px;
    line-height: 45px;
  }
  &__paragraph {
    font-size: 18px;
    line-height: 27px;
  }
}

.subscribe {
  padding: 70px 0 90px;
  &__heading {
    font-size: 30px;
    line-height: 45px;
  }
  &__subtitle {
    font-size: 18px;
    line-height: 27px;
  }
  &__form {
    width: 100%;
    margin: 40px auto 0;
  }
  &__input {
    font-size: 24px;
    line-height: 36px;
  }
  &__button {
    font-size: 24px;
    line-height: 36px;
  }
}

@media screen and (min-width: 576px) {
  .banner {
    &__heading {
      font-size: 64px;
      line-height: 96px;
    }
    &__button {
      font-size: 24px;
      line-height: 36px;
    }
  }

  .selection {
    padding: 90px 0 160px;
    &__heading {
      font-size: 48px;
      line-height: 72px;
    }
  }

  .about {
    &__heading {
      font-size: 48px;
      line-height: 72px;
    }
    &__paragraph {
      font-size: 18px;
      line-height: 27px;
    }
  }

  .subscribe {
    padding: 90px 0;
    &__heading {
      font-size: 30px;
      line-height: 45px;
    }
    &__subtitle {
      font-size: 18px;
      line-height: 27px;
    }
    &__form {
      max-width: 580px;
      margin: 40px auto 0;
    }
    &__input {
      font-size: 24px;
      line-height: 36px;
    }
    &__button {
      font-size: 24px;
      line-height: 36px;
    }
  }
}

@media screen and (min-width: 992px) {
  .banner {
    &__heading {
      font-size: 80px;
      line-height: 120px;
    }
    &__button {
      font-size: 42px;
    }
  }

  .selection {
    padding: 140px 0;
    &__swiper {
      margin-top: 70px;
    }
    &__heading {
      font-size: 64px;
      line-height: 120px;
    }
  }

  .about {
    &__heading {
      font-size: 69px;
      line-height: 96px;
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
}
</style>
