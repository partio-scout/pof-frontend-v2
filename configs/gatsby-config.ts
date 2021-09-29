import 'dotenv';
import { GatsbyConfig } from 'gatsby';

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Partio-Ohjelma',
    siteUrl: `https://www.partio-ohjelma.fi`,
  },
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.API_URL,
        queryLimit: -1,
        collectionTypes: [
          { name: 'activity', api: { qs: { _locale: 'all' } } },
          { name: 'age-group', api: { qs: { _locale: 'all' } } },
          { name: 'duration', api: { qs: { _locale: 'all' } } },
          { name: 'location', api: { qs: { _locale: 'all' } } },
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
        include: { // Create fixed schema for Strapi data only.  
          plugins: ['gatsby-source-strapi']
        },
        update: process.env.GATSBY_UPDATE_SCHEMA_SNAPSHOT,
      },
    },
    `gatsby-plugin-use-query-params`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GA_TRACKING_ID, // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          // anonymize_ip: true,
          // cookie_expires: 0,
          // send_page_view: false
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
  ],
};

module.exports = config;
