<template>
  <div>
    <div
      ref="swiperRef"
      class="swiper"
    >
      <div class="swiper-wrapper">
        <div
          v-for="slide in slides"
          :key="slide.id"

          class="swiper-slide"
        >
          <slot
            name="slide"
            :slide="slide"
          ></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
  name: 'BaseSwiper',

  props: {
    slides: {
      type: Array,
      required: true
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },

  mounted () {
    return new Swiper(this.$refs.swiperRef, {
      modules: [Navigation, Pagination],

      ...this.options
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
