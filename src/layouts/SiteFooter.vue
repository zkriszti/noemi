<template>
  <footer class="footer" ref="footer">
    <!-- <g-link to="/">{{ $static.metadata.siteName }}</g-link> -->
    <div class="footer-social">
      <p>instagram (ikon)</p>
      <p>pinterest (ikon)</p>
      <p>linkedin (ikon)</p>
      <p>kötelezők (impresszum, ászf / disclaimer, privacy policy, terms of conditions)</p>
    </div>
  </footer>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '../assets/colors.styl'

footer
  background: #eee
  p:last-child
    margin-bottom: 0

</style>
