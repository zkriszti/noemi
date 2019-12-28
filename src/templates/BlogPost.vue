<template>
  <Layout>
    <h3>{{ $page.blogPost.title }}</h3>
    <div class="date-meta-container">
      <img :src="`https://res.cloudinary.com/zkriszti/w_250${$page.blogPost.featured_image}`" :alt="$page.blogPost.featured_image_alt" />
    </div>
    <div v-html="$page.blogPost.content" />
  </Layout>
</template>

<page-query>
query blogPost ($id: ID!) {
  blogPost (id: $id) {
    id
    title
    content
    featured_image
    featured_image_alt
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.blogPost.title
    };
  }
};
</script>
