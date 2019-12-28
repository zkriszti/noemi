<template>
  <Layout :isSingle="routeSingle" id="services">
    <h1>Services</h1>
    <p>Unde commodi est and suscipit and sint. Veniam officia exercitationem duis anim. Nisi. Aute cupidatat and magna. Ex velitesse for esse ipsam. Explicabo nequeporro, quia aute and illum. Dolores quasi or nostrum, and dicta ea. Illo nisi. Deserunt velit but in nemo. Non sunt veniam illum.</p>
    <LearnMoreRef target="/services/" learnMoreText="Show Services" baseColor="#eee" v-if="!routeSingle" />
    <ShowMoreContent><div slot="showMoreContent">This is just show more content.</div></ShowMoreContent>
  </Layout>
</template>

<script>
import LearnMoreRef from '@/components/LearnMoreRef.vue'
import ShowMoreContent from '@/components/ShowMoreContent.vue'

export default {
  components: {
    LearnMoreRef,
    ShowMoreContent
  },

  metaInfo: {
    title: 'Services'
  },

  computed: {
    routeSingle () {
      return this.$route.path !== '/'
    }
  }
}
</script>

<style lang="stylus" scoped>

#services
  background: mid-yellow
  color: light-grey

</style>

