<template>
  <div class="selection-swiper">
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
          nextEl: '.selection-swiper__next',
          prevEl: '.selection-swiper__prev'
        },
        pagination: {
          el: '.selection-swiper__pagination',
          bulletClass: 'selection-swiper__bullet',
          bulletActiveClass: 'selection-swiper__bullet_active'
        }
      }"
    >
      <template #slide>
        <SelectionCard />
      </template>
    </BaseSwiper>

    <div class="selection-swiper__nav d-flex justify-content-center align-items-center my-5 py-5">
      <div class="selection-swiper__prev">
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

      <div class="selection-swiper__pagination mx-5"></div>

      <div class="selection-swiper__next">
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
</template>

<script>
import BaseSwiper from '@/components/BaseSwiper.vue'
import SelectionCard from '@/components/SelectionCard.vue'
import BaseIcon from '@/components/BaseIcon.vue'

export default {
  name: 'SelectionSwiper',
  components: { BaseIcon, SelectionCard, BaseSwiper }
}
</script>

<style lang="scss" scoped>
.selection-swiper {
  button {
    &:focus {
      box-shadow: none;
    }
  }

  &__next,
  &__prev {
    max-width: 50px;
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
  }
  ::v-deep {
    .selection-swiper__bullet {
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
