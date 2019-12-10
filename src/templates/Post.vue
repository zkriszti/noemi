<template>
  <Layout>
    <h3>{{ $page.post.title }}</h3>
    <div class="date-meta-container">
      <p>{{ $page.post.date }}</p>
    </div>
    <div v-html="$page.post.content" />
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    content
    date
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>

<style lang="stylus">
h3
  color: #777
  font-weight: normal
  display: flex
  align-items: center

</style>

