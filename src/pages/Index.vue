<template>
  <Layout isSingle class="index">

    <div class="hero">
      <div class="hero-top">
        <!-- <img alt="Example image"
          :srcset="`
          https://res.cloudinary.com/zkriszti/f_auto,q_70,dpr_auto,w_450${siteData.Hero.HeroImageURL} 450w,
          https://res.cloudinary.com/zkriszti/f_auto,q_70,dpr_auto,c_fill,w_768,h_300${siteData.Hero.HeroImageURL} 768w,
          https://res.cloudinary.com/zkriszti/f_auto,q_70,dpr_auto,c_fill,w_1024,h_350${siteData.Hero.HeroImageURL} 1024w,
          https://res.cloudinary.com/zkriszti/f_auto,q_70,dpr_auto,c_fill,w_1920,h_550${siteData.Hero.HeroImageURL} 1920w
          `"
          :src="`https://res.cloudinary.com/zkriszti/f_auto,q_70,w_1920${siteData.Hero.HeroImageURL}`" /> -->

        <picture>
          <source
          media="(max-width: 450px)"
          :srcset="`https://res.cloudinary.com/zkriszti/f_auto,q_70,w_450${siteData.Hero.HeroImageURL} 1x,
            https://res.cloudinary.com/zkriszti/f_auto,q_70,w_900${siteData.Hero.HeroImageURL} 2x,
            https://res.cloudinary.com/zkriszti/f_auto,q_70,w_1350${siteData.Hero.HeroImageURL} 3x `">
          <source
          media="(max-width: 768px)"
          :srcset="`https://res.cloudinary.com/zkriszti/f_auto,q_70,c_fill,w_768,h_300${siteData.Hero.HeroImageURL} 1x,
            https://res.cloudinary.com/zkriszti/f_auto,q_70,c_fill,w_1536,h_600${siteData.Hero.HeroImageURL} 2x,
            https://res.cloudinary.com/zkriszti/f_auto,q_70,c_fill,w_2304,h_900${siteData.Hero.HeroImageURL} 3x `">
          <source
          media="(max-width: 1024px)"
          :srcset="`https://res.cloudinary.com/zkriszti/f_auto,q_70,c_fill,w_1024,h_350${siteData.Hero.HeroImageURL} 1x,
            https://res.cloudinary.com/zkriszti/f_auto,q_70,c_fill,w_2048,h_700${siteData.Hero.HeroImageURL} 2x,
            https://res.cloudinary.com/zkriszti/f_auto,q_70,c_fill,w_3072,h_1050${siteData.Hero.HeroImageURL} 3x `">
          <source
          :srcset="`https://res.cloudinary.com/zkriszti/f_auto,q_70,c_fill,w_1920,h_550${siteData.Hero.HeroImageURL} 1x,
            https://res.cloudinary.com/zkriszti/f_auto,q_70,c_fill,w_3840,h_1100${siteData.Hero.HeroImageURL} 2x,
            https://res.cloudinary.com/zkriszti/f_auto,q_70,c_fill,w_5760,h_1650${siteData.Hero.HeroImageURL} 3x `">
          <img :src="`https://res.cloudinary.com/zkriszti/f_auto,q_70,c_fill,w_1920,h_550${siteData.Hero.HeroImageURL}`" />
        </picture>

        <h1><span>She</span><span>finds</span><span>focus</span></h1>
      </div>
      <div class="hero-content">
        <p>{{siteData["Intro Text"]}}</p>
      </div>
    </div>

    <Services />
    <About />
    <Prices />
    <Contact />
    <Blog />

    <div v-for="edge in frontpageDisplayEdges" :key="edge.node.id" class="content">
      <h1>{{ edge.node.title }}</h1>
      <div v-html="edge.node.content"></div>
    </div>

  </Layout>
</template>

<page-query>
query fpItems {
  fpItems: allFrontPageItem {
    edges {
      node {
        path
        title
        content
        is_on_frontpage
      }
    }
  }
}
</page-query>

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
  },

  computed: {
    frontpageDisplayEdges () {
      return this.$page.fpItems.edges.filter(e => e.node.is_on_frontpage)
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
