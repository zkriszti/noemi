<template>
  <Layout isSingle>
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>She finds focus</h1>

    <p>It's Noemi's digital marketing & SEO consulting page.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores</p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

    <About />
    <Contact />
    <Blog />
  </Layout>
</template>

<script>
import SiteHeader from '@/layouts/SiteHeader.vue'

import About from '@/pages/About.vue'
import Contact from '@/pages/Contact.vue'
import Blog from '@/pages/Blog.vue'

export default {
  metaInfo: {
    title: 'Hello, world!'
  },

  components: {
    SiteHeader,

    About,
    Contact,
    Blog
  }
}

</script>

<style>
.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.home-links a {
  margin-right: 1rem;
}
</style>
