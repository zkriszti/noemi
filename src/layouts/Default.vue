<template>
  <div :class="[isSingle ? 'layout' : '', screenClass]" >
    <SiteHeader v-if="isSingle" />
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
    }
  }
}

</script>


<style lang="stylus">
*
  box-sizing: border-box

body
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif
  margin: 0
  padding: 0
  line-height: 1.5

  .layout
    max-width: 1920px
    margin: 0 auto
    display: flex
    min-height: 100vh
    flex-direction: column

  .content
    padding: 0 20px
    flex-grow: 1

</style>
