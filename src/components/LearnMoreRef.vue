<template>
  <div class="learn-more">
    <g-link :to="target" :style="`color: ${baseColor}; border: 1px solid  ${baseColor};`">{{ learnMoreText }}</g-link>
  </div>
</template>

<script>
export default {
  props: {
    target: {
      type: String,
      required: true
    },
    learnMoreText: {
      type: String,
      required: true
    },
    baseColor: {
      type: String,
      default: '#444'
    }
  }
}
</script>

<style lang="stylus" scoped>
.learn-more
  display: flex
  justify-content: flex-end

  a
    text-transform: uppercase
    padding: 6px 12px
    text-decoration: none

</style>