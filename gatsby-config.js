module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Happy Meal",
    description: "recipes and food",
    author: "rahul@gamil.com",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/asset/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `styles`,
        path: `${__dirname}/src/asset/css`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
