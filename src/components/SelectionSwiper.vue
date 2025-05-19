<template>
  <div class="selection-swiper">
    <div class="selection-swiper__wrapper">
      <div class="selection-swiper__prev selection-swiper__prev_md">
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
      <BaseSwiper
        :slides="[{id: 1}, {id: 2}, {id: 3}, {id: 4}]"
        :options="{
          autoplay: {
            delay: 1000
          },
          loop: true,
          slidesPerView: 1,
          spaceBetween: 0,
          navigation: {
            nextEl: '.selection-swiper__next',
            prevEl: '.selection-swiper__prev'
          },
          pagination: {
            el: '.selection-swiper__pagination',
            bulletClass: 'selection-swiper__bullet',
            bulletActiveClass: 'selection-swiper__bullet_active'
          },
          breakpoints: {
            1200: {
              slidesPerView: 3,
              spaceBetween: 20
            }
          }
        }"
        class="selection-swiper__carousel"
      >
        <template #slide>
          <SelectionCard />
        </template>
      </BaseSwiper>
      <div class="selection-swiper__next selection-swiper__next_md">
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

    <div class="selection-swiper__nav my-5 py-5">
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

  &__nav {
    display: flex;
    justify-content: center;
    align-items: center;
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

@media screen and (min-width: 576px) {
  .selection-swiper {
    &__wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 55px;
    }
    &__carousel {
      max-width: 340px;
    }
    &__nav {
      display: none;
    }
    &__next,
    &__prev {
      &_md {
        display: block;
        max-width: 100px;
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .selection-swiper {
    &__wrapper {
      display: block;
    }
    &__carousel {
      max-width: 100%;
    }
    &__nav {
      display: flex;
    }
    &__next,
    &__prev {
      max-width: 50px;
      &_md {
        display: none;
      }
    }
  }
}
</style>
