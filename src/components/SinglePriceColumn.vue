<template>
  <div class="price-col">
    <h2 class="package-name" :style="`color: ${currentPackage['featureItem Color']}`">{{currentPackage.name}}</h2>
    <div class="package-short-description">{{currentPackage.shortDesc}}</div>
    <div class="price-row">
      <span class="currency">$</span>
      <span class="price">{{currentPackage.price}}</span>
      <span class="unit">per package</span>
    </div>
    <button class="cta" :style="`background-color: ${currentPackage['featureItem Color']}`">{{currentPackage.buttonText}}</button>
    <div class="feature-list-container">
      <ul class="feature-list">
        <li class="feature-item" v-for="(item, index) in currentPackage.features" :key=index>
          <font-awesome :icon="['fas', 'check-circle']" :color="currentPackage['featureItem Color']" /><span>{{item}}</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
import siteData from "@/content/sitedata.json"

export default {
  data () {
    return {
      siteData: siteData
    }
  },

  computed: {
    currentPackage () {
      return this.siteData.Prices[this.packageRef]
    }
  },

  props: {
    packageRef: {
      type: String
    }
  }
}
</script>

<style lang="stylus" scoped>
.price-col
  justify-items: center
  text-align: center
  display: grid
  grid-template-rows: 80px 90px 48px 48px auto
  > *
    margin: 0
    align-self: center

  .feature-list-container
    align-self: auto

  h2
    text-shadow: 2px 3px 3px rgba(0,0,0,0.17)
    font-size: 2em

  .package-short-description
    /* margin-bottom: 18px */

  .feature-list-container
    display: flex
    justify-content: center

    .feature-list
      list-style-type: none
      padding: 0
      line-height: 1.6
      text-align: left

      .feature-item
        span
          margin-left: 12px

  .price-row
    display: flex
    justify-content: center
    align-items: center
    font-weight: 400
    /* margin-bottom: 12px */

    .price
      font-size: 1.8em
      margin: 0 8px

  .cta
    color: #fff
    font-weight: bold
    border: 0px
    border-radius: 4px
    padding: 12px 0
    margin-top: 8px
    width: 80%
    box-shadow: 2px 2px 8px 0px rgba(0,0,0,0.17)
    max-width: 220px

.screen-lg
  .cta
    max-width: auto

</style>