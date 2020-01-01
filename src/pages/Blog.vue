<template>
  <Layout :isSingle="routeSingle" id="blog">
    <h1>Blog</h1>
    <div class="post-item-container">
      <div v-for="edge in $static.posts.edges" :key="edge.node.id" class="post-item">
        <g-link :to="edge.node.path" class="post-link">
          <h3 class="post-item-inner-title">{{ edge.node.title }}</h3>
          <div class="post-date"><span>{{ edge.node.date }}</span></div>
          <div class="post-item-inner-top">
            <img :src="`https://res.cloudinary.com/zkriszti/w_150${edge.node.featured_image}`" :alt="edge.node.featured_image_alt" />
          </div>
          <div class="blog-teaser" v-html="splitContent(edge.node.content)[0]" />
          <learn-more-ref :target="edge.node.path" learnMoreText="Read the whole story"></learn-more-ref>
        </g-link>
      </div>
    </div>
  </Layout>
</template>

<static-query>
query Posts {
  posts: allBlogPost {
    edges {
      node {
        path
        title
        date(format: "MMMM DD, YYYY")
        featured_image
        featured_image_alt
        content
      }
    }
  }
}
</static-query>

<script>
import LearnMoreRef from '@/components/LearnMoreRef.vue'

export default {
  metaInfo: {
    title: 'Blog'
  },

  components: {
    LearnMoreRef
  },

  computed: {
    routeSingle () {
      return this.$route.path !== '/'
    }
  },

  methods: {
    splitContent (c) {
      return c.split("--SHOWMORETAG--")
    }
  }
}

</script>

<style lang="stylus" scoped>

.post-item-container
  display: grid
  grid-template-columns: repeat(2, 1fr)
  grid-gap: 40px

  .post-item
    background: rgb(255,255,255)
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(240,240,240,1) 100%)
    padding: 0 12px 24px 12px

a
a:visited
  color: #40B9A9

.post-item-inner-title
    font-family: 'Montserrat'
    font-weight: 200
    font-size: 1.6em

.blog-teaser
  color: #777
  line-height: 1.7

</style>
