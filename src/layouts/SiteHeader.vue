<template>
  <header class="header" ref="header">
    <div class="header-top">
      <div class="logo"><g-link to="/"><img src="https://res.cloudinary.com/zkriszti/image/upload/v1577305426/noemi/labdalogo_only.png" alt="" class="logo"></g-link></div>
      <div class="hamburger" @click="toggleHamburger">
        <span class="hamburger-row"></span>
        <span class="hamburger-row"></span>
        <span class="hamburger-row"></span>
      </div>
    </div>
    <nav class="nav" v-if="menuVisible">
      <g-link class="nav__link" to="/">Home</g-link>
      <g-link class="nav__link" v-for="(item, index) in menuHeader" :key="index" :to="item.route" >{{item.displayedName}}</g-link>
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
import menuData from "@/content/menudata.json"

export default {
  props: {
    isIndex: Boolean,
    default: false
  },

  data () {
    return {
      isHamburgerOpen: false,
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
    },

    menuHeader () {
      return menuData.Menus['Header Menu'].map(i => {
        return {
          // slug: i.slug,
          route: this.isIndex ? `/#${i.slug.toLowerCase()}` : `/${i.slug.toLowerCase()}/`,
          displayedName: i['displayed name']
          }
      })
    }/* ,

    menuData () {
      return [
        {
          route: this.isIndex ? '/#services' : '/services/',
          slug: 'Services',
          isAnchor: this.isIndex
        },
        {
          route: this.isIndex ? '/#about' : '/about/',
          slug: 'About',
          isAnchor: this.isIndex
        },
        {
          route: this.isIndex ? '/#prices' : '/prices/',
          slug: 'Prices',
          isAnchor: this.isIndex
        },
        {
          route: this.isIndex ? '/#contact' : '/contact/',
          slug: 'Contact',
          isAnchor: this.isIndex
        },
        {
          route: this.isIndex ? '/#blog' : '/blog/',
          slug: 'Blog',
          isAnchor: this.isIndex
        },
      ]
    } */
  }

}
</script>

<style lang="stylus" scoped>

logoHeight = 120px

.header
  display: flex
  flex-direction: column
  padding: 0 20px
  background: light-grey
  position: sticky
  top: 0
  z-index: 99
  box-shadow: 0px 3px 5px 0px rgba(170,170,170,1)

  .header-top
    display: flex
    justify-content: space-between
    align-items: center

    .logo
      width: logoHeight
      height: logoHeight
      display: flex
      justify-content: center
      align-items: center

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
    top: logoHeight
    left: 0
    width: 100%
    padding: 0 20px
    text-align: right

    .nav__link
      margin: 0 0 12px 20px
      display: block
      color: #111
      text-transform: uppercase
      font-size: 1.2em
      &:visited
        color: #111

.screen-lg
  .header
    flex-direction: row
    justify-content: space-between
    align-items: center

    .hamburger
      display: none

    nav
      display: inline-flex
      position: relative
      width: auto
      top: 0
      text-align: auto

</style>