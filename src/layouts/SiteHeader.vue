<template>
  <header class="header" ref="header">

    <!-- <g-link to="/">{{ $static.metadata.siteName }}</g-link> -->
    <div class="logo"><g-link to="/"><img src="https://res.cloudinary.com/zkriszti/image/upload/v1577305426/noemi/labdalogo_only.png" alt="" class="logo"></g-link></div>

    <div class="hamburger" @click="toggleHamburger">
      <span class="hamburger-row"></span>
      <span class="hamburger-row"></span>
      <span class="hamburger-row"></span>
    </div>
    <nav class="nav" v-if="menuVisible">
      <g-link class="nav__link" to="/">Home</g-link>
      <!-- <a class="nav__link" href="#about">About</a>
      <a class="nav__link" href="#contact">Contact</a>
      <a class="nav__link" href="#blog">Blog</a> -->
<!--       <g-link class="nav__link" to="/blog/">Blog -- SA</g-link>
      <g-link class="nav__link" to="/about/">About -- SA</g-link> -->
      <g-link class="nav__link" to="/#about">About</g-link>
      <g-link class="nav__link" to="/#contact">Contact</g-link>
      <g-link class="nav__link" to="/#blog">Blog</g-link>
    </nav>
  </header>
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
  data () {
    return {
      isHamburgerOpen: false
    }
  },

  methods: {
    toggleHamburger () {
      this.isHamburgerOpen = !this.isHamburgerOpen
    }
  },

  computed: {
    menuVisible () {
      return this.$mq === 'lg' || this.isHamburgerOpen
    }
  }

}
</script>

<style lang="stylus" scoped>
@import '../assets/colors.styl'

logoHeight = 120px

.header
  display: flex
  justify-content: space-between
  align-items: center
  margin-bottom: 20px
  padding: 0 20px
  background: light-blue

  .logo
    width: logoHeight
    height: logoHeight
    display: flex
    justify-content: center
    align-items: center
    background-color: #eee

  .hamburger
    cursor: pointer

    .hamburger-row
      background-color: #111
      height: 6px
      width: 34px
      display: block
      margin-bottom: 4px
      border-radius: 3px

  nav
    position: absolute
    top: logoHeight
    left: 0
    width: 100%
    padding: 0 20px
    background: light-blue

    .nav__link
      margin-left: 20px
      display: block
      text-decoration: none
      color: #111
      text-transform: uppercase
      &:visited
        color: #111

.screen-lg
  .header
    .hamburger
      display: none
    nav
      display: inline-flex
      position: relative
      width: auto
      top: 0

</style>