<template>
  <Layout>
    <div>
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
    </div>
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

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
