<template>
  <div class="base-icon">
    <component :is="iconComponent" />
  </div>
</template>

<script>
export default {
  name: 'BaseIcon',
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    iconComponent () {
      try {
        return require(`@/assets/icons/${this.icon}.svg`)
      } catch (error) {
        console.error(`Icon not found: ${this.icon}`)
        return null
      }
    }
  }
}
</script>
