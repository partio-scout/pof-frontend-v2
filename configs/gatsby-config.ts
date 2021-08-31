import 'dotenv';

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const fetchLimit = -1;

module.exports = {
  siteMetadata: {
    title: 'Partio-Ohjelma',
    siteUrl: `https://www.partio-ohjelma.fi`,
  },
  // flags: {
  //   FAST_DEV: true,
  // },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
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
        queryLimit: -1,
        collectionTypes: [
          { name: 'activity', api: { qs: { _locale: 'all' } } },
          { name: 'age-group', api: { qs: { _locale: 'all' } } },
          { name: 'activity-group', api: { qs: { _locale: 'all' } } },
          {
            name: 'content-page',
            api: { qs: { _locale: 'all' } },
          },
          { name: 'suggestion', api: { qs: { _locale: 'all' } } },
        ],
        singleTypes: [
          { name: 'front-page', api: { qs: { _locale: 'fi' } } },
          { name: 'front-page', api: { qs: { _locale: 'sv' } } },
          { name: 'front-page', api: { qs: { _locale: 'en' } } },
          { name: 'front-page', api: { qs: { _locale: 'smn' } } },
          { name: 'front-page', api: { qs: { _locale: 'sme' } } },
        ],
      },
    },
    `gatsby-plugin-graphql-codegen`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/, // See below to configure properly
        },
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-schema-snapshot`,
      options: {
        path: `schema.gql`,
        exclude: {
          types: ['SitePage'],
        },
        update: process.env.GATSBY_UPDATE_SCHEMA_SNAPSHOT,
      },
    },
    `gatsby-plugin-use-query-params`,
  ],
};
