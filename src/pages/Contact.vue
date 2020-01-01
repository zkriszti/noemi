<template>
  <Layout :isSingle="routeSingle" id="contact">
    <h1>Contact Noemi</h1>
    <p>This is a contact form here.</p>
    <form
      name="contact"
      method="POST"
      netlify
      netlify-honeypot="hpfield"
      v-on:submit.prevent="handleSubmit">
      <input type="hidden" name="contact" value="contact" />
      <div class="hpot">
        <label>Leave this field empty: <input name="hpfield"></label>
      </div>

      <div class="form-grid">
        <label for="name">Your Name:</label>
        <input type="text" name="name" v-model="formData.name" />

        <label for="email">Your Email:</label>
        <input type="email" name="email" v-model="formData.email" />

        <label for="message">Message:</label>
        <textarea name="message" v-model="formData.message"></textarea>
      </div>
      <!-- <input type="checkbox" name="acceptConditions" v-model="formData.acceptConditionsChecked"> -->
      <CustomCheckBox type="checkbox" name="acceptConditions" @input="toggleConditions" />
      <label for="checkbox">I accept the Terms & Conditions.</label>
      <button type="submit" :disabled="!formData.acceptConditionsChecked">Send</button>
      <div class="message-success" v-if="showSuccessMessage">Thank you so much, your message has been sent! I'll get back to you in X business days.</div>
    </form>
  </Layout>
</template>

<script>
import CustomCheckBox from '@/components/CustomCheckBox.vue'

export default {

  components: {
    CustomCheckBox
  },

  metaInfo: {
    title: 'Contact Noemi'
  },

  data() {
    return {
      showSuccessMessage: false,
      formData: {
        acceptConditionsChecked: false
      }
    }
  },

  computed: {
    routeSingle () {
      return this.$route.path !== '/'
    }
  },

  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    },

    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
      // .then(() => this.$router.push('/success'))
      .then(() => this.showSuccessMessage = true)
      .catch(error => alert(error))
    },

    toggleConditions () {
      this.formData.acceptConditionsChecked = !this.formData.acceptConditionsChecked
    }
  }
}
</script>

<style lang="stylus" scoped>
#contact
  background: #eee

form
  max-width: 480px

.hpot
  display: none

.form-grid
  display: grid
  grid-template-columns: auto 1fr
  grid-auto-flow: rows
  grid-column-gap: 24px
  grid-row-gap: 12px
  margin-bottom: 18px

input
textarea
  border: 0px

.message-success
  background: rgba(12,200,12,0.3)

</style>
