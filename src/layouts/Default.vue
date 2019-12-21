<template>
  <div :class="isSingle ? 'layout' : ''">
    <SiteHeader v-if="isSingle" />
    <div class="content"><slot /></div>
  </div>
</template>

<script>

import SiteHeader from '@/layouts/SiteHeader.vue'

export default {
  components: {
    SiteHeader
  },

  props: {
    isSingle: {
      type: Boolean,
      default: false
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
    max-width: 760px
    margin: 0 auto

  .content
    padding: 0 20px

</style>
