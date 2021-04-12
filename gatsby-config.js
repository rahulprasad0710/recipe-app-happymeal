require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Happy Meal",
    description: "recipes and food",
    author: "rahul@gamil.com",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `700`, `300`, `900`],
          },
          {
            family: `Lato`,
            variants: [`400`, `700`, `300`, `900`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `a3vg8yxpqbec`,
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
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
