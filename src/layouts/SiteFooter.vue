<template>
  <footer class="footer" ref="footer">
    <!-- <g-link to="/">{{ $static.metadata.siteName }}</g-link> -->
    <div class="social">
      <h4>Let's connect!</h4>
      <div class="social-icons">
        <g-link :to="siteData.SocialMedia.instagram"><font-awesome :icon="['fab', 'instagram']" size="2x" /></g-link>
        <g-link :to="siteData.SocialMedia.pinterest"><font-awesome :icon="['fab', 'pinterest']" size="2x" /></g-link>
        <g-link :to="siteData.SocialMedia.linkedin"><font-awesome :icon="['fab', 'linkedin']" size="2x" /></g-link>
      </div>
    </div>
    <div class="must-haves">
      <h4>The boring must-haves</h4>
      <g-link class="disclaimer" to="/disclaimer">Disclaimer</g-link>
      <g-link class="privacy" to="/privacy">Privacy policy</g-link>
      <g-link class="terms" to="/terms">Terms & Conditions</g-link>
      <!-- <p>HU: impresszum, ászf / EN: disclaimer, privacy policy, terms of conditions)</p> -->
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
import siteData from "@/content/sitedata.json"

export default {
  data () {
    return {
      siteData: siteData
    }
  }
}
</script>

<style lang="stylus" scoped>

footer
  background: #bbb
  padding: 0 20px 12px 20px
  margin-top: 20px

  a
  a:visited
    color: #444

  h4
    font-weight: 300

  p:last-child
    margin-bottom: 0

  .social-icons
    margin-left: 12px

    svg
      margin-right: 20px

  .must-haves
    a
      display: block
      margin-left: 12px
      font-size: 0.9em

</style>
