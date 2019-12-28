<template>
  <Layout isSingle class="index">

    <div class="hero">
      <!-- <g-image alt="Example image" src="~/n1.jpg" /> -->
      <img alt="Example image"
        :srcset="`
        https://res.cloudinary.com/zkriszti/f_auto,q_70,w_450${siteData.Hero.HeroImageURL} 450w,
        https://res.cloudinary.com/zkriszti/f_auto,q_70,w_768${siteData.Hero.HeroImageURL} 768w,
        https://res.cloudinary.com/zkriszti/f_auto,q_70,w_1024${siteData.Hero.HeroImageURL} 1024w,
        https://res.cloudinary.com/zkriszti/f_auto,q_70,w_1920${siteData.Hero.HeroImageURL} 1920w
        `"
        :src="`https://res.cloudinary.com/zkriszti/f_auto,q_70,w_1920${siteData.Hero.HeroImageURL}`" />
      <h1>She finds focus</h1>
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
img
  max-width: 100%
.hero-content
  padding: 0 20px
</style>
