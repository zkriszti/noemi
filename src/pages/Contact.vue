<template>
  <Layout :isSingle="routeSingle" id="contact">
    <h1>Contact Noemi</h1>
    <p>This is a contact form here.</p>
    <form
      name="contact"
      method="POST"
      netlify
      netlify-honeypot="hpfield"
      v-on:submit.prevent="handleSubmit"
      action="/success/">
      <input type="hidden" name="contact" value="contact" />
      <div class="hpot">
        <label>Leave this field empty: <input name="hpfield"></label>
      </div>
      <p>
        <label for="name">Your Name:</label>
        <input type="text" name="name" v-model="formData.name" />
      </p>
      <p>
        <label for="email">Your Email:</label>
        <input type="email" name="email" v-model="formData.email" />
      </p>
      <p>
        <label for="message">Message:</label>
        <textarea name="message" v-model="formData.message"></textarea>
      </p>
      <input type="checkbox" name="acceptConditions" v-model="formData.acceptConditionsChecked">
      <label for="checkbox">I accept the Terms & Conditions.</label>
      <button type="submit" :disabled="!formData.acceptConditionsChecked">Send</button>
    </form>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact Noemi'
  },

  data() {
    return {
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
      .then(() => this.$router.push('/success'))
      .catch(error => alert(error))
    }
  }
}
</script>

<style scoped>
  .hpot {
  display: none;
}

</style>
