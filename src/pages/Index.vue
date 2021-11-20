<template>
  <Layout>
    <section>
      <h2>Here's our blogposts</h2>

      <div class="container">
        <article v-for="edge in $page.markdownages.edges" :key="edge.node.id">
          <router-link :to="{path: 'post/' + edge.node.id}">
            <h3>{{edge.node.title}}</h3>
            <p>{{edge.node.excerpt}}</p>
          </router-link>
        </article>
      </div>
    </section>

  </Layout>
</template>

<page-query>
  query {
    markdownages: allMarkdownPost {
      edges {
        node {
          id,
          title,
          excerpt
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>