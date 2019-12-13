<template>
  <Layout>
    <h3>{{ $page.blogPost.title }}</h3>
    <div class="date-meta-container">
      Hey, it's the blog!
      <p>{{ $page.blogPost.id }}</p>
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

<style>
/* h3
  color: #777
  font-weight: normal
  display: flex
  align-items: center
 */
</style>

