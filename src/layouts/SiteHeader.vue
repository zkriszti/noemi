<template>
  <header class="header">
    <strong>
      <g-link to="/">{{ $static.metadata.siteName }}</g-link>
    </strong>
    <nav class="nav">
      <g-link class="nav__link" to="/">Home</g-link>
      <a class="nav__link" href="#about">About</a>
      <a class="nav__link" href="#contact">Contact</a>
      <a class="nav__link" href="#blog">Blog</a>
      <g-link class="nav__link" to="/blog/">Blog -- SA</g-link>
      <g-link class="nav__link" to="/about/">About -- SA</g-link>
    </nav>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {

}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>