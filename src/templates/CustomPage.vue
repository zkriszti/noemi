<template>
  <Layout :isSingle="routeSingle" :id="$page.frontPageItem.slug">
    <h1>{{ $page.frontPageItem.title }}</h1>
    <div v-html="$page.frontPageItem.content" />
    <!-- <VueRemarkContent /> -->
  </Layout>
</template>

<page-query>
query frontPageItem ($id: ID!) {
  frontPageItem (id: $id) {
    id
    title
    content
    slug
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.frontPageItem.title
    }
  },

  computed: {
    routeSingle () {
      return this.$route.path !== '/'
    }
  }
}
</script>
