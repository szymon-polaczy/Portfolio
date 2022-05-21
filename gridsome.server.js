// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const slug = (title) => {
  return title.replace(/ /g, '-').replace(/\?/g, '').toLowerCase();
};

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`
      query markdownPost {
        markdownages: allMarkdownPost {
          edges {
            node {
              id,
              title,
              excerpt
            }
          }
        }
      }`)

    data.markdownages.edges.forEach(({ node }) => {
      createPage({
        path: `/blog/post/${slug(node.title)}`,
        component: './src/templates/post.vue',
        context: {
          id: node.id
        }
      })
    })
  })
}
