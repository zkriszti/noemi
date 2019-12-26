<template>
  <Layout isSingle>
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>She finds focus</h1>

    <p>It's Noemi's digital marketing & SEO consulting page.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores</p>

    <About />
    <Contact />
    <Blog />
  </Layout>
</template>

<script>
import About from '@/pages/About.vue'
import Contact from '@/pages/Contact.vue'
import Blog from '@/pages/Blog.vue'

export default {
  metaInfo: {
    title: 'Hello, world!'
  },

  components: {
    About,
    Contact,
    Blog
  }
}

</script>

<style lang="stylus" scoped>

</style>
