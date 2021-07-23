module.exports = {
  siteMetadata: {
    siteUrl: `https://get-over.online`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-emotion",
    "gatsby-plugin-postcss",
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    }
  ],
};
