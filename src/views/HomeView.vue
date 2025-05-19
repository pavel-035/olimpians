<template>
  <div class="home">
    <section class="banner vh-100">
      <b-container fluid>
        <h1 class="banner__heading text-white w-50">Книги, которые вознесут вас на Олимп</h1>
        <b-button
          class="border-white rounded-0 text-white py-2 px-4"
          variant="transparent"
        >
          Узнать больше
        </b-button>
      </b-container>
    </section>

    <section class="selection text-center py-5">
      <b-container fluid>
        <h2>Горячие новинки</h2>

        <div class="selection__swiper">
          <BaseSwiper
            :slides="[{id: 1}, {id: 2}, {id: 3}, {id: 4}]"
            :options="{
              autoplay: {
                delay: 1000
              },
              loop: true,
              slidesPerView: 3,
              spaceBetween: 20,
              navigation: {
                nextEl: '.selection__next',
                prevEl: '.selection__prev'
              },
              pagination: {
                el: '.selection__pagination',
                bulletClass: 'selection__bullet',
                bulletActiveClass: 'selection__bullet_active'
              }
            }"
          >
            <template #slide>
              <b-card class="p-1 border-dark rounded-0">
                <b-card-body class="mb-5">
                  <b-card-img
                    :src="require('/src/assets/images/book.png')"
                    class="mb-5"
                  />
                  <b-card-title>
                    Ж. Верн, “Двадцать тысяч лье под водой”
                  </b-card-title>
                  <b-card-sub-title
                    class="text-dark"
                  >
                    Приключения
                  </b-card-sub-title>
                </b-card-body>
                <b-card-footer class="d-flex justify-content-between align-items-center p-0 border-0 bg-transparent">
                    <span class="px-3">
                      168 р.
                    </span>
                  <b-button
                    class="border-dark rounded-0"
                    variant="transparent"
                  >
                    Купить
                  </b-button>
                </b-card-footer>
              </b-card>
            </template>
          </BaseSwiper>

          <div class="selection__nav d-flex justify-content-center align-items-center">
            <div class="selection__prev">
              <b-button
                class="p-0"
                variant="transparent"
              >
                <BaseIcon
                  icon="arrow"
                  class="text-dark"
                />
              </b-button>
            </div>

            <div class="selection__pagination"></div>

            <div class="selection__next">
              <b-button
                class="p-0"
                variant="transparent"
              >
                <BaseIcon
                  icon="arrow"
                  class="text-dark"
                />
              </b-button>
            </div>
          </div>
        </div>
      </b-container>
    </section>

    <section class="about">
      <b-container fluid>
        <div class="d-flex justify-content-center">
          <div class="about__image w-50">
            <b-img :src="require('/src/assets/images/about_1.png')" class="w-100" />
          </div>
          <div class="w-50 p-5 bg-primary text-white text-center">
            <h2 class="m-0 mb-4">О нас</h2>
            <p class="m-0 raleway-regular">Книжное наследие от мыслителей Древней Греции и до людей современности. Это не просто магазин, а настоящий клуб любителей книги, который объединяет в своем культурном пространстве людей самых разных интересов.</p>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div class="w-50 p-5 bg-primary text-white text-center">
            <h2 class="m-0 mb-4">Гармония</h2>
            <p class="m-0 raleway-regular">Наш проект «Гармония» объединяет читателей и авторов в реальности и в интернете. Каждую неделю проводятся встречи онлайн и вживую. Из наших регулярных рубрик вы узнаете много нового о книгах и писателях.</p>
          </div>
          <div class="about__image w-50">
            <b-img :src="require('/src/assets/images/about_2.png')" class="w-100" />
          </div>
        </div>
      </b-container>
    </section>

    <section class="subscribe text-center py-5">
      <b-container fluid>
        <h2 class="mb-2">Хотите знать о книгах всё?</h2>
        <p class="mb-5">Подпишитесь на нашу новостную рассылку</p>

        <b-form class="d-flex align-items-center justify-content-between w-75 mx-auto">
          <b-form-input
            id="subscribe"
            required
            class="border-1 rounded-0 border-dark mr-3"
          ></b-form-input>
          <b-button
            type="submit"
            variant="transparent"
            class="border-1 rounded-0 border-dark px-5"
          >Отправить</b-button>
        </b-form>
      </b-container>
    </section>
  </div>
</template>

<script>
import BaseSwiper from '@/components/BaseSwiper.vue'
import BaseIcon from '@/components/BaseIcon.vue'

export default {
  name: 'HomeView',
  components: { BaseIcon, BaseSwiper }
}
</script>

<style lang="scss" scoped>
.banner {
  background: url("/src/assets/images/banner_background.png") no-repeat 50% 50%/cover;
  &__heading {
    font-size: 80px;
  }
}

.about {
  &__image {
    img {
      object-fit: cover;
      object-position: 50% 50%;
    }
  }
}

.selection {
  &__next,
  &__prev {
    max-width: 50px;
  }
  button {
    &:focus {
      box-shadow: none;
    }
  }
  &__next {
    transform: rotateZ(-90deg);
  }
  &__prev {
    transform: rotateZ(90deg);
  }

  &__pagination {
    width: fit-content;
    display: flex;
    column-gap: 55px;
    margin: 80px 92px;
  }
  ::v-deep {
    .selection__bullet {
      display: block;
      width: 30px;
      height: 30px;

      border: 3px solid #000000;

      border-radius: 50%;

      &_active {
        background: #000;
      }
    }
  }
}
</style>
