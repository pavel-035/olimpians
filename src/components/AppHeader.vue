<template>
  <b-container class="bg-primary" fluid>
    <div class="
      d-flex
      justify-content-between
      py-3
    ">
      <div>
        <router-link to="/">
          <b-img :src="require('/src/assets/images/logo.png')" />
        </router-link>
      </div>
      <div class="d-flex align-items-center">
        <b-dropdown
          ref="dropdownMenuRef"
          menu-class="dropdown-center"
          no-caret
          variant="transparent"
        >
          <template #button-content>
            <BaseIcon icon="arrow-bottom" class="text-white"/>
          </template>

          <template #default>
            <div class="px-5 py-3 text-center">
              <b-button
                variant="transparent"
                class="dropdown-arrow"
                @click="hideDropdown()"
              >
                <BaseIcon icon="arrow-top" class="text-dark"/>
              </b-button>
              <b-nav class="justify-content-center p-0 px-5">
                <b-nav-item link-classes="p-3 text-dark">Главная</b-nav-item>
                <b-nav-item link-classes="p-3 text-dark">Каталог</b-nav-item>
                <b-nav-item link-classes="p-3 text-dark">Корзина</b-nav-item>
              </b-nav>
            </div>
          </template>
        </b-dropdown>
      </div>
      <b-button
        class="shop-button"
        variant="transparent"
        @click="hideDropdown()"
      >
        <BaseIcon icon="bag" class="text-white"/>
      </b-button>
    </div>
  </b-container>
</template>

<script>
import BaseIcon from '@/components/BaseIcon.vue'

export default {
  name: 'AppHeader',
  components: { BaseIcon },

  methods: {
    hideDropdown () {
      this.$refs.dropdownMenuRef.hide()
    }
  }
}
</script>

<style scoped lang="scss">
  ::v-deep {
    .dropdown-menu.dropdown-center {
      left: 50% !important;
      transform: translateX(-50%) !important;
    }
  }

  .dropdown-arrow {
    max-width: 64px;
    width: 100%;
  }
  .shop-button {
    max-width: 55px;
    width: 100%;
  }
</style>
