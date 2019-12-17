<template>
  <Layout>
    <h1>Blog</h1>
    <div class="post-item-container">
      <div v-for="(edge, index) in $page.posts.edges" :key="edge.node.id" class="post-item">
        <h3 class="index"> {{index}} </h3>
        <g-link :to="edge.node.path" class="post-link">
          <div class="post-item-inner-top">
            <div class="f-img">featured-image: {{ edge.node.featured_image }} </div>
            <img :src="`https://res.cloudinary.com/zkriszti/w_150${edge.node.featured_image}`" />
            <div class="post-date"><span>date: {{ edge.node.date }}</span></div>
          </div>
          <div class="post-item-inner-title">title: {{ edge.node.title }}</div>
        </g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allBlogPost {
    edges {
      node {
        path
        title
        date
        featured_image
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Blog'
  }
}

</script>

<style scoped>

</style>
