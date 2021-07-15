import 'dotenv';

module.exports = {
  siteMetadata: {
    title: 'Partio-Ohjelma',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.API_URL,
        collectionTypes: ['activity', 'age-group'],
      },
    },
    'gatsby-plugin-graphql-codegen',
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/ // See below to configure properly
        }
      }
    }
  ],
};
