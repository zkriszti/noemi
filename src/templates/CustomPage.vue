<template>
  <Layout>
    <h3>{{ $page.customPage.title }}</h3>
    <div class="date-meta-container">
      THIS!
      <p>{{ $page.customPage.id }}</p>
    </div>
    <div v-html="$page.customPage.content" />
  </Layout>
</template>

<page-query>
query customPage ($id: ID!) {
  customPage (id: $id) {
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
      title: this.$page.customPage.title
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

