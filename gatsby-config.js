module.exports = {
  siteMetadata: {
    title: `Ny York Vintage`,
    description: `This is a web site for Ny York Vintage.`,
    author: `@brungoth`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        includedRoutes: ["/*/*/posts", "/*/*/media", '/*/*/acf'],
        baseUrl: 'nyyork.test',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true,
        searchAndReplaceContentUrls: {
          sourceUrl: 'https://nyyork.test',
          replacementUrl: '',
        },
      },
    },
    {       
      resolve: "@pasdo501/gatsby-source-woocommerce",
      options: {
       // Base URL of Wordpress site
        api: 'nyyork.test',
        // true if using https. false if nah.
        https: false,
        api_keys: {
          consumer_key: 'ck_4fa18fc13f5f95d13a29e3d5c59e93fe1b2143f8',
          consumer_secret: 'cs_07e402f1c530c52b2a9b1275a59bf9fb9f29bcb8',
        },
        // Array of strings with fields you'd like to create nodes for...
        fields: ['products', 'products/categories', 'products/attributes']
      }
    },
    {
      resolve: 'gatsby-source-instagram',
        options: {
          username: 'vintagewearbyny',
        },
    },
    `gatsby-plugin-favicon`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
  
      }
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Poppins',
            variants: ['200', '400', '500', '600', '700'],
          },
        ],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
