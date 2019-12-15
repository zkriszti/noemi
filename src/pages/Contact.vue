<template>
  <Layout>
    <h1>Contact Noemi</h1>
    <p>This is a contact form here.</p>
    <form name="contact" method="POST" netlify netlify-honeypot="hpfield">
      <input type="hidden" name="form-name" value="contact" />
      <div class="hpot">
        <label>Leave this field empty: <input name="hpfield"></label>
      </div>
      <p>
        <label>Your Name: <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <button type="submit">Send</button>
    </form>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact Noemi'
  }
}
</script>

<style scoped>
  .hpot {
  display: none;
}

</style>
