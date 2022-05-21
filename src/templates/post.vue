<template>
    <Layout>  
        <main v-html="$page.markdownPost.content"/>

        <g-link to="/blog/" class="go-back-link">Go back</g-link>

    </Layout>
</template>

<page-query>
  query ($id: ID) {
    markdownPost(id: $id ) {
        title,
        content
    }
}
</page-query>