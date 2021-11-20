<template>
    <Layout>  
        <main v-html="$page.markdownPost.content"/>

        <g-link to="/" class="go-back-link">Go to homepage</g-link>

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


<style>
    .go-back-link {
        text-decoration: none;
        color: #000;
        margin: 5rem auto;
        display: block;
        width: max-content;
    }
</style>
