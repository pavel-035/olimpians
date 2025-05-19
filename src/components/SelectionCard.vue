<template>
  <b-card class="selection-card border border-dark rounded-0 p-0">
    <b-card-img
      :src="require('/src/assets/images/book.png')"
      class="selection-card__img mb-4"
    />
    <b-card-title class="selection-card__title mt-1">
      Ж. Верн, “Двадцать тысяч лье под водой”
    </b-card-title>
    <b-card-sub-title class="selection-card__subtitle text-dark mt-5">
      Приключения
    </b-card-sub-title>
    <b-card-footer class="d-flex justify-content-between align-items-center py-0 px-2 mt-5 border-0 bg-transparent">
      <span class="selection-card__price">
        168 р.
      </span>
      <b-button
        class="selection-card__button border-dark rounded-0 text-uppercase py-3 px-5"
        variant="transparent"
      >
        Купить
      </b-button>
    </b-card-footer>
  </b-card>
</template>

<script>
export default {
  name: 'SelectionCard'
}
</script>

<style lang="scss" scoped>
.selection-card {
  &__img {
    max-width: 200px;
  }

  &__title {
    font-size: 24px;
    line-height: 36px;
  }
  &__subtitle {
    font-size: 18px;
  }

  &__price {
    font-size: 35px;
    line-height: 45px;
  }

  &__button {
    font-size: 30px;
    line-height: 45px;
  }
}
</style>
