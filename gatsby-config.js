module.exports = {
  siteMetadata: {
    title: `Ny York Vintage`,
    description: `Vintage Wear & Jeans.`,
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
        baseUrl: 'admin.nyyork.no',
        protocol: 'https',
        hostingWPCOM: false,
        useACF: true,
        searchAndReplaceContentUrls: {
          sourceUrl: 'https://admin.nyyork.no',
          replacementUrl: '',
        },
      },
    },
    {
      resolve: "gatsby-source-shopify",
      options: {
        // The domain name of your Shopify shop. This is required.
        // Example: 'gatsby-source-shopify-test-shop' if your Shopify address is
        // 'gatsby-source-shopify-test-shop.myshopify.com'.
        // If you are running your shop on a custom domain, you need to use that
        // as the shop name, without a trailing slash, for example:
        // shopName: "gatsby-shop.com",
        shopName: "nyyorkvintage",
  
        // An API access token to your Shopify shop. This is required.
        // You can generate an access token in the "Manage private apps" section
        // of your shop's Apps settings. In the Storefront API section, be sure
        // to select "Allow this app to access your storefront data using the
        // Storefront API".
        // See: https://help.shopify.com/api/custom-storefronts/storefront-api/getting-started#authentication
        accessToken: "3c9636e135b756e8269b2818a9ce846c",
  
        // Set the API version you want to use. For a list of available API versions,
        // see: https://help.shopify.com/en/api/storefront-api/reference/queryroot
        // Defaults to 2019-07
        apiVersion: "2020-01",
  
        // Set verbose to true to display a verbose output on `npm run develop`
        // or `npm run build`. This prints which nodes are being fetched and how
        // much time was required to fetch and process the data.
        // Defaults to true.
        verbose: true,
  
  
        // List of collections you want to fetch.
        // Possible values are: 'shop' and 'content'.
        // Defaults to ['shop', 'content'].
        includeCollections: ['shop'],
      },
    },
    {
      resolve: 'gatsby-source-instagram',
        options: {
          username: 'vintagewearbyny'
        },
    },
    `gatsby-plugin-transition-link`,
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
