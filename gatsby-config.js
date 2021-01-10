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
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Inter`,
            variants: [`400`]
          },
        ],
      },
    }
  ],
};
