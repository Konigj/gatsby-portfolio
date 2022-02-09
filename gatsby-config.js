module.exports = {
  siteMetadata: {
      title: `Juan Rey's Portfolio`,
    siteUrl: `https://www.juanrey.co`, 
    author: `Juan Rey`,
    description: `Juan Rey's Portfolio created using Gatsby`,
  },
  plugins: ['gatsby-plugin-postcss',
    {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "asf"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp",
  {
    resolve: `gatsby-source-strapi`,
    options: {
      apiURL: `http://localhost:1337`,
      queryLimit: 1000,
      collectionTypes: [`blogs`, `projects`],
      singleTypes: [`about-section`, `hero-section`],
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /images/
      }
    }
  },
  ]
};