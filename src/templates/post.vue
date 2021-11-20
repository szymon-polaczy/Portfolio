<template>
  <Layout>

    <main v-html="$page.markdownPost.content"/>
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
</style>
