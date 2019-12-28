<template>
  <Layout :isSingle="routeSingle" id="prices">
    <h1>Prices</h1>
    <p>From starting out to comprehensive packages, you will surely find a way to get valuable insights and consultancy for your project. What you invest comes back to you multiplied.</p>
    <LearnMoreRef target="/prices/" learnMoreText="Show Prices" v-if="!routeSingle" />
    <ShowMoreContent><div slot="showMoreContent">This is the Pricing Table.</div></ShowMoreContent>
  </Layout>
</template>

<script>
import siteData from "@/content/sitedata.json"

import LearnMoreRef from '@/components/LearnMoreRef.vue'
import ShowMoreContent from '@/components/ShowMoreContent.vue'

export default {
  components: {
    LearnMoreRef,
    ShowMoreContent
  },

  metaInfo: {
    title: 'Prices'
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
