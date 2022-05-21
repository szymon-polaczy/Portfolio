<template>
  <Layout>
    <router-link :to="{path: '/blog/'}">
      <h1>Blog</h1>
    </router-link>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Get Over Life'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.container a {
  color: #000;
  text-decoration: none;
}

.container a:focus,
.container a:hover {
  text-decoration: underline;
}

ol, ul {
  padding-inline-start: 17px;
}
</style>