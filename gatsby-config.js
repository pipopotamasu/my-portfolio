module.exports = {
  siteMetadata: {
    title: `pipopotamasu portfolio`,
    description: `pipopotamasu's portfolio site`,
    author: `@pipopotamasu`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `pipopotamasu portfolio`,
        short_name: `pipopotamasu portfolio`,
        start_url: `/`,
        background_color: `#242424`,
        theme_color: `#242424`,
        display: `minimal-ui`,
        icon: `src/images/pipopotamasu.jpg`,
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
