<template>
  <Layout>
    <section>
      <h2>Here's our blogposts</h2>

      <hr>

      <div class="container">
        <article v-for="edge in $page.markdownages.edges" :key="edge.node.id">
          <router-link :to="{path: 'post/' + edge.node.title.replace(/ /g, '-').replace(/\?/g, '').toLowerCase() + '/'}">
            <h3>{{edge.node.title}}</h3>
            <p>{{edge.node.excerpt}}</p>
          </router-link>
        </article>
      </div>
    </section>

    <g-link to="/" class="go-back-link">Go back</g-link>

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