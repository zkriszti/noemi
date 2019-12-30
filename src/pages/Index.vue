<template>
  <Layout isSingle class="index">

    <div class="hero">
      <div class="hero-top">
        <img alt="Example image"
          :srcset="`
          https://res.cloudinary.com/zkriszti/f_auto,q_70,w_450${siteData.Hero.HeroImageURL} 450w,
          https://res.cloudinary.com/zkriszti/f_auto,q_70,c_fill,w_768,h_300${siteData.Hero.HeroImageURL} 768w,
          https://res.cloudinary.com/zkriszti/f_auto,q_70,c_fill,w_1024,h_350${siteData.Hero.HeroImageURL} 1024w,
          https://res.cloudinary.com/zkriszti/f_auto,q_70,w_1920,h_550${siteData.Hero.HeroImageURL} 1920w
          `"
          :src="`https://res.cloudinary.com/zkriszti/f_auto,q_70,w_1920${siteData.Hero.HeroImageURL}`" />
        <h1><span>She</span><span>finds</span><span>focus</span></h1>
      </div>
      <div class="hero-content">
        <p>It's Noemi's digital marketing & SEO consulting page.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores</p>
      </div>
    </div>

    <Services />
    <About />
    <Prices />
    <Contact />
    <Blog />

  </Layout>
</template>

<script>
import siteData from "@/content/sitedata.json"

import Services from '@/pages/Services.vue'
import About from '@/pages/About.vue'
import Prices from '@/pages/Prices.vue'
import Contact from '@/pages/Contact.vue'
import Blog from '@/pages/Blog.vue'

export default {
  metaInfo: {
    title: 'Hello, world!'
  },

  components: {
    Services,
    About,
    Prices,
    Contact,
    Blog
  },

  data () {
    return {
      siteData: siteData
    }
  }
}

</script>

<style lang="stylus" scoped>
.hero-top
  position: relative

  img
    max-width: 100%
    display: block

  h1
    position absolute
    top: 0
    span
      position: absolute
      background: rgba(105,105,105,0.3)
      display: inline-block
      &:first-child
        top: 30px
        left: 90px
      &:nth-child(2)
        top: 90px
        left: 18px
        color: #ddd
      &:nth-child(3)
        top: 120px
        left: 140px
        color: #dfd64b

.hero-content
  padding: 0 20px
</style>
