const path = require('path');

module.exports = {
  siteMetadata: {
    siteUrl: "https://willich.io",
    title: "Hi, I'm Andi",
    subtitle: "",
    author: "@SabotageAndi"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-slug",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `development`,
        path: `./src/content/development`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `testautomation`,
        path: `./src/content/testautomation`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `devrel`,
        path: `./src/content/devrel`,
      },
    },
  ],
};
