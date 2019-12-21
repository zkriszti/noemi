<template>
  <header class="header">
    <strong>
      <g-link to="/">{{ $static.metadata.siteName }}</g-link>
    </strong>
    <div class="hamburger" :class="hamburgerIsOpen ? 'is-open' : ''" @click="toggleHamburger">
      <span class="hamburger-row"></span>
      <span class="hamburger-row"></span>
      <span class="hamburger-row"></span>
    </div>
    <nav class="nav" v-if="hamburgerIsOpen">
      <g-link class="nav__link" to="/">Home</g-link>
      <a class="nav__link" href="#about">About</a>
      <a class="nav__link" href="#contact">Contact</a>
      <a class="nav__link" href="#blog">Blog</a>
      <g-link class="nav__link" to="/blog/">Blog -- SA</g-link>
      <g-link class="nav__link" to="/about/">About -- SA</g-link>
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
      hamburgerIsOpen: false
    }
  },

  methods: {
    toggleHamburger () {
      this.hamburgerIsOpen = !this.hamburgerIsOpen
    }
  }

}
</script>

<style lang="stylus" scoped>
@import '../assets/colors.styl'

.header
  display: flex
  justify-content: space-between
  align-items: center
  margin-bottom: 20px
  height: 80px
  padding: 0 20px
  background: light-blue

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
    top: 72px
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

</style>