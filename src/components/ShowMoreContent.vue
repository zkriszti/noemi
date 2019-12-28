<template>
  <div>
    <slot name="showMoreContent" v-if="routeSingle" />
  </div>
</template>

<script>
export default {
  computed: {
    routeSingle () {
      return this.$route.path !== '/'
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>