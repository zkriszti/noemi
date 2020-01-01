<template>
  <div :class="[isSingle ? 'layout' : '', screenClass]" >
    <SiteHeader v-if="isSingle" :isIndex="isIndex"/>
    <div class="content"><slot /></div>
    <SiteFooter v-if="isSingle" />
  </div>
</template>

<script>
import SiteHeader from '@/layouts/SiteHeader.vue'
import SiteFooter from '@/layouts/SiteFooter.vue'

export default {
  components: {
    SiteHeader,
    SiteFooter
  },

  props: {
    isSingle: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    screenClass () {
      return `screen-${this.$mq}`
    },

    isIndex () {
      return this.$route.path === '/'
    }
  }
}

</script>

<style lang="stylus">
*
  box-sizing: border-box

body
  margin: 0
  padding: 0
  line-height: 1.5

  .layout
    max-width: 1920px
    margin: 0 auto
    display: flex
    min-height: 100vh
    flex-direction: column
    &:not(.index)
      .content
        padding: 0 20px
    &.index
      .content
        .content
          padding: 0 20px 12px 20px

  .content
    flex-grow: 1

</style>
