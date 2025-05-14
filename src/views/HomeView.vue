<template>
  <div class="home">
    <b-container fluid>
      <section class="about">
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
      </section>

      <section class="subscribe text-center py-5">
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
      </section>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style lang="scss" scoped>
.about {
  &__image {
    img {
      object-fit: cover;
      object-position: 50% 50%;
    }
  }
}
</style>
