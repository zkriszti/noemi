<template>
  <Layout :isSingle="routeSingle" id="prices">
    <h1>Prices</h1>
    <p>From starting out to comprehensive packages, you will surely find a way to get valuable insights and consultancy for your project. What you invest comes back to you multiplied.</p>
    <LearnMoreRef target="/prices/" learnMoreText="Show Prices" hasShadow v-if="!routeSingle" />
    <ShowMoreContent>
      <div slot="showMoreContent" class="pricing">
        <single-price-column packageRef="package1"></single-price-column>
        <single-price-column packageRef="package2"></single-price-column>
        <single-price-column packageRef="package3"></single-price-column>
      </div>
    </ShowMoreContent>
  </Layout>
</template>

<script>

import LearnMoreRef from '@/components/LearnMoreRef.vue'
import ShowMoreContent from '@/components/ShowMoreContent.vue'
import SinglePriceColumn from '@/components/SinglePriceColumn.vue'

export default {
  components: {
    LearnMoreRef,
    ShowMoreContent,
    SinglePriceColumn
  },

  metaInfo: {
    title: 'Prices'
  },

  computed: {
    routeSingle () {
      return this.$route.path !== '/'
    }
  }
}
</script>

<style lang="stylus" scoped>
.screen-lg
  .pricing
    display: grid
    grid-template-columns: repeat(3, auto)
    grid-column-gap: 45px

</style>
