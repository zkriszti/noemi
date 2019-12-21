<template>
  <Layout :isSingle="routeSingle" id="blog">
    <h1>Blog</h1>
    <div class="post-item-container">
      <div v-for="(edge, index) in $static.posts.edges" :key="edge.node.id" class="post-item">
        <h3 class="index"> {{index}} </h3>
        <g-link :to="edge.node.path" class="post-link">
          <div class="post-item-inner-top">
            <div class="f-img">featured-image: {{ edge.node.featured_image }} </div>
            <img :src="`https://res.cloudinary.com/zkriszti/w_150${edge.node.featured_image}`" :alt="edge.node.featured_image_alt" />
            <div class="post-date"><span>date: {{ edge.node.date }}</span></div>
          </div>
          <div class="post-item-inner-title">title: {{ edge.node.title }}</div>
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

<style scoped>

</style>
