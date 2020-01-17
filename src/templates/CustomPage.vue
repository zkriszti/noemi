<template>
  <Layout :isSingle="routeSingle" :id="$page.customPage.slug">
    <h1>{{ $page.customPage.title }}</h1>
    <!-- <div v-html="$page.customPage.content" /> -->
    <VueRemarkContent />
  </Layout>
</template>

<page-query>
query customPage ($id: ID!) {
  customPage (id: $id) {
    id
    slug
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.customPage.title
    }
  },

  computed: {
    routeSingle () {
      return this.$route.path !== '/'
    }
  }
}
</script>
