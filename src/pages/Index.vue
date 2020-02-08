<template>
  <Layout isSingle class="index">

    <div class="hero">
      <div class="hero-top">
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

    <!-- <Services />
    <About /> -->
    <div class="orderedthingy">
      <!-- <div class="ord-price"><Prices key="prices" /></div>
      <div class="ord-contact"><Contact key="contact" /></div>
      <div v-for="edge in frontpageDisplayEdges" :key="`${edge.node.slug}-${edge.node.id}`" class="content" :id="edge.node.slug" :style="`background-color: ${edge.node.backgroundColor}`">
        <h1>{{ edge.node.title }}</h1>
        <div v-html="edge.node.content"></div>
      </div> -->
      <div v-for="(item, index) in mixedArray" :key="index" class="content" :id="getItemID(item)" :style="`background-color: ${getItemStyles(item)}`">
        <component v-if="item.type==='component'" :is="item.component"></component>
        <div v-else class="content edge-content">
          <h1>{{ item.edgeData.node.title }}</h1>
          <div v-html="item.edgeData.node.content"></div>
        </div>
      </div>
    </div>

  </Layout>
</template>

<page-query>
query fpItems {
  fpItems: allFrontPageItem {
    edges {
      node {
        slug
        path
        title
        content
        isOnFrontpage
        backgroundColor
        order
      }
    }
  }
}
</page-query>

<script>
import siteData from "@/content/sitedata.json"

import Prices from '@/pages/Prices.vue'
import Contact from '@/pages/Contact.vue'

export default {
  metaInfo: {
    title: 'Hello, world!'
  },

  components: {
    Prices,
    Contact
  },

  data () {
    return {
      siteData: siteData
    }
  },

  computed: {
    frontpageDisplayEdges () {
      return this.$page.fpItems.edges.filter(e => e.node.isOnFrontpage)
    },

    frontpageDisplayEdgesArray () {
      return this.frontpageDisplayEdges.map(e => { return {type: 'customEdge', edgeData: e, order: e.node.order } })
    },

    mixedArrayUnsorted () {
      return [
        { type: 'component', component: 'Prices', order: 4 },
        { type: 'component', component: 'Contact', order: 1 },
        ...this.frontpageDisplayEdgesArray
      ]
    },

    mixedArray () {
      return this.mixedArrayUnsorted.sort((a,b) => a.order - b.order)
    }/* ,

    dictstring () {
      return JSON.stringify(
        {"one" : [15, 4.5],
        "two" : [34, 3.3],
        "three" : [67, 5.0],
        "four" : [32, 4.1]})
    } */
  },

  methods: {
    getItemID (i) {
      return i.type === 'component' ? i.component.toLowerCase() : i.edgeData.node.slug
    },

    getItemStyles (i) {
      return i.type === 'component' ? '' : i.edgeData.node.backgroundColor
    }/* ,

    generateJSON () {
      const jsonfile = require('jsonfile');
      jsonfile.writeFile("../content/thing.json", this.dictstring, function(err, result) {if(err) console.log('error', err);});
    } */
  },

  mounted () {
    console.log(this.frontpageDisplayEdges)
    const cucc = this.mixedArray.map(i => { return i.type === 'component' ? {ord: i.order, title: i.title} : {ord: i.edgeData.node.order, title: i.edgeData.node.title} })
    console.log(cucc)
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

.orderedthingy
  display: flex
  flex-direction: column

  .ord-price
    order: 3
  .ord-contact
    order: 1
  .ord-md
    order: 2
</style>
