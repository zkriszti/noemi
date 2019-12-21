<template>
  <Layout :isSingle="routeSingle" id="about">
    <h1>About Noemi</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
  </Layout>
</template>

<script>
import siteData from "@/content/sitedata.json"
export default {

  metaInfo: {
    title: 'About Noemi'
  },

  computed: {
    routeSingle () {
      return this.$route.path !== '/'
    }
  },

  mounted () {
    console.log(siteData.Prices)
  }
}
</script>
