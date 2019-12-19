<template>
  <div :class="isSingle ? 'layout' : ''">
    <SiteHeader v-if="isSingle" />
    <slot />
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


<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
