module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-emotion",
    "gatsby-plugin-postcss",
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    }
  ],
};
