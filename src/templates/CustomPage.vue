<template>
  <Layout>
    <h3>{{ $customPage.post.title }}</h3>
    <div class="date-meta-container">
      <p>{{ $customPage.post.date }}</p>
    </div>
    <div v-html="$customPage.post.content" />
  </Layout>
</template>

<page-query>
query CustomPage ($path: String!) {
  customPage: customPage (path: $path) {
    title
    date
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$customPage.post.title
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

