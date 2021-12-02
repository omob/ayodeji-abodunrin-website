require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Ayodeji Abodunrin Website`,
    description: `A software development and solutions providing company`,
    author: `@omo_b33`,
    url: `https://deevcorp.netlify.app`,
    twitterUsername: "@deevcorp",
    image: "/twitter-card.png",
    siteUrl: `https://deevcorp.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          backgroundColor: `transparent`,
        },
      },
    },
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "projects",
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "experience",
        path: `${__dirname}/src/experience/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              backgroundColor: `transparent`,
              maxWidth: 500,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
  ],
};
