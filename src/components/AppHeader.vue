<template>
  <div class="header bg-primary" fluid>
    <div class="
      app-container

      d-flex
      justify-content-between
      align-items-center
      py-3
    ">
      <div class="header__logo">
        <router-link to="/">
          <b-img :src="require('/src/assets/images/logo.png')" class="w-100" />
        </router-link>
      </div>
      <div>
        <b-dropdown
          ref="dropdownMenuRef"
          menu-class="dropdown-center"
          no-caret
          variant="transparent"
        >
          <template #button-content>
            <b-button
              variant="transparent"
              class="p-0"
              @click="hideDropdown()"
            >
              <BaseIcon
                icon="arrow"
                class="header__arrow text-white"
              />
            </b-button>
          </template>

          <template #default>
            <div class="px-5 py-3 text-center">
              <b-button
                variant="transparent"
                class="p-0"
                @click="hideDropdown()"
              >
                <BaseIcon icon="arrow" class="header__arrow header__arrow_top text-dark"/>
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
      <div>
        <b-button
          class="header__shop p-0"
          variant="transparent"
          @click="hideDropdown()"
        >
          <BaseIcon icon="bag" class="text-white"/>
        </b-button>
      </div>
    </div>
  </div>
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

  .header {
    &__logo {
      max-width: 90px;
      width: 100%;
    }
    &__arrow {
      max-width: 40px;
      width: 100%;
      &_top {
        transform: rotateZ(-180deg);
      }
    }
    &__shop {
      max-width: 34px;
      width: 100%;
    }
  }

  @media screen and (min-width: 576px) {
    .header {
      &__logo {
        max-width: 160px;
      }
      &__arrow {
        max-width: 32px;
      }
      &__shop {
        max-width: 27px;
      }
    }
  }

  @media screen and (min-width: 992px) {
    .header {
      &__logo {
        max-width: 184px;
      }
      &__arrow {
        max-width: 64px;
      }
      &__shop {
        max-width: 55px;
      }
    }
  }
</style>
