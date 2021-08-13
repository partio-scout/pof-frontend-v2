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
        collectionTypes: [
          { name: 'activity', api: { qs: { _limit: fetchLimit, _locale: 'all' } } },
          { name: 'age-group', api: { qs: { _limit: fetchLimit, _locale: 'all' } } },
          { name: 'activity-group', api: { qs: { _limit: fetchLimit, _locale: 'all' } } },
          {
            name: 'contentpage',
            endpoint: 'content-pages',
            api: { qs: { _limit: fetchLimit, _locale: 'all' } },
          },
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
  ],
};
