<template>
  <div class="layout">
    <SiteHeader />
    <slot />
  </div>
</template>

<script>
import SiteHeader from '@/layouts/SiteHeader.vue'
export default {
  components: {
    SiteHeader
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
