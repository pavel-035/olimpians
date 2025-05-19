<template>
  <div class="bg-primary" fluid>
    <div class="
      d-flex
      justify-content-between
      align-items-center
      py-4
      px-5
    ">
      <div>
        <router-link to="/">
          <b-img :src="require('/src/assets/images/logo.png')" />
        </router-link>
      </div>
      <b-link href="tel:+30922040281" class="text-white raleway-regular">+30922040281</b-link>
      <b-nav class="justify-content-center p-0">
        <b-nav-item link-classes="p-0 ml-5 text-white raleway-regular">Главная</b-nav-item>
        <b-nav-item link-classes="p-0 ml-5 text-white raleway-regular">Каталог</b-nav-item>
        <b-nav-item link-classes="p-0 ml-5 text-white raleway-regular">Корзина</b-nav-item>
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
