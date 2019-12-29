<template>
  <div class="learn-more">
    <g-link :to="target" :style="`color: ${baseColor}; border: 1px solid  ${baseColor};`" :class="hasShadow ? 'shadow' : '' ">{{ learnMoreText }}</g-link>
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
    },
    hasShadow: {
      type: Boolean,
      default: false
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
    &.shadow
      box-shadow: 2px 2px 5px 0px rgba(204,204,204,1)
    &:hover
      transform: scale(1.02)

</style>