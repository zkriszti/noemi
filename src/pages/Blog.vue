<template>
  <Layout :isSingle="routeSingle" id="blog">
    <h1>Blog</h1>
    <div class="post-item-container">
      <div v-for="edge in $static.posts.edges" :key="edge.node.id" class="post-item">
        <g-link :to="edge.node.path" class="post-link">
          <h3 class="post-item-inner-title">{{ edge.node.title }}</h3>
          <div class="post-item-inner-top">
            <img :src="`https://res.cloudinary.com/zkriszti/w_150${edge.node.featured_image}`" :alt="edge.node.featured_image_alt" />
            <div class="post-date"><span>date: {{ edge.node.date }}</span></div>
          </div>
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
        date
        featured_image
        featured_image_alt
      }
    }
  }
}
</static-query>

<script>
export default {
  metaInfo: {
    title: 'Blog'
  },

  computed: {
    routeSingle () {
      return this.$route.path !== '/'
    }
  }
}

</script>

<style lang="stylus" scoped>
a
a:visited
  color: #40B9A9
  .post-item-inner-title
    font-family: 'Montserrat'
    font-weight: 200

</style>
