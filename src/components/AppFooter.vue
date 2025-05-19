<template>
  <div class="bg-primary" fluid>
    <div class="
      app-container

      d-flex
      justify-content-between
      align-items-center
      py-4
      py-sm-5
    ">
      <div class="d-flex flex-column flex-sm-row justify-content-sm-between w-sm-50">
        <router-link to="/">
          <b-img :src="require('/src/assets/images/logo.png')" />
        </router-link>
        <b-link href="tel:+30922040281" class="text-white raleway-regular mt-5 mt-sm-0">+30922040281</b-link>
      </div>
      <b-nav class="d-block d-sm-flex justify-content-sm-center p-0">
        <b-nav-item link-classes="p-0 ml-sm-5 mb-5 text-white raleway-regular">Главная</b-nav-item>
        <b-nav-item link-classes="p-0 ml-sm-5 mb-5 text-white raleway-regular">Каталог</b-nav-item>
        <b-nav-item link-classes="p-0 ml-sm-5 text-white raleway-regular">Корзина</b-nav-item>
      </b-nav>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AppFooter'
}
</script>

<style scoped lang="scss"></style>
