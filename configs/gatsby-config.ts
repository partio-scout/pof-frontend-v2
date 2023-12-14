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
  // flags: {
  //   PRESERVE_WEBPACK_CACHE: true,
  // },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.GATSBY_API_URL,
        queryLimit: -1,
        skipFileDownloads: true,
        collectionTypes: [
          {
            singularName: 'activity',
            queryParams: {
              populate: '*',
            },
            pluginOptions: {
              i18n: {
                locale: 'all',
              },
            },
          },
          {
            singularName: 'age-group',
            queryParams: {
              populate: '*',
            },
            pluginOptions: {
              i18n: {
                locale: 'all',
              },
            },
          },
          {
            singularName: 'duration',
            queryParams: {
              populate: '*',
            },
            pluginOptions: {
              i18n: {
                locale: 'all',
              },
            },
          },
          {
            singularName: 'location',
            queryParams: {
              populate: '*',
            },
            pluginOptions: {
              i18n: {
                locale: 'all',
              },
            },
          },
          {
            singularName: 'activity-group',
            queryParams: {
              populate: '*',
            },
            pluginOptions: {
              i18n: {
                locale: 'all',
              },
            },
          },
        ],
        singleTypes: [
          {
            singularName: 'front-page',
            queryParams: {
              populate: {
                hero_image: '*',
                content: {
                  on: {
                    'blocks.age-group-block': {
                      populate: {
                        block_width: '*',
                      },
                    },
                    'blocks.activity-block': {
                      populate: {
                        block_width: '*',
                      },
                    },

                    'blocks.content-page-block': {
                      populate: {
                        block_width: '*',
                        content_pages: {
                          populate: {
                            main_image: {
                              populate: {
                                formats: '*',
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
                footer_sections: {
                  populate: {
                    link_groups: {
                      populate: {
                        links: '*',
                        some_links: '*',
                      },
                    },
                  },
                },
                navigation: {
                  populate: {
                    subnavigation: {
                      populate: {
                        page: '*',
                        subnavigation: {
                          populate: {
                            page: {
                              populate: '*',
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            pluginOptions: { i18n: { locale: 'fi' } },
          },
          {
            singularName: 'front-page',
            queryParams: {
              populate: {
                hero_image: '*',
                footer_sections: {
                  populate: {
                    link_groups: {
                      populate: {
                        links: '*',
                        some_links: '*',
                      },
                    },
                  },
                },
                navigation: {
                  populate: {
                    subnavigation: {
                      populate: {
                        page: '*',
                        subnavigation: {
                          populate: {
                            page: {
                              populate: '*',
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            pluginOptions: { i18n: { locale: 'sv' } },
          },
          {
            singularName: 'front-page',
            queryParams: {
              populate: {
                hero_image: '*',
                footer_sections: {
                  populate: {
                    link_groups: {
                      populate: {
                        links: '*',
                        some_links: '*',
                      },
                    },
                  },
                },
                navigation: {
                  populate: {
                    subnavigation: {
                      populate: {
                        page: '*',
                        subnavigation: {
                          populate: {
                            page: {
                              populate: '*',
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            pluginOptions: { i18n: { locale: 'en' } },
          },
          {
            singularName: 'front-page',
            queryParams: {
              populate: {
                hero_image: '*',
                footer_sections: {
                  populate: {
                    link_groups: {
                      populate: {
                        links: '*',
                        some_links: '*',
                      },
                    },
                  },
                },
                navigation: {
                  populate: {
                    subnavigation: {
                      populate: {
                        page: '*',
                        subnavigation: {
                          populate: {
                            page: {
                              populate: '*',
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            pluginOptions: { i18n: { locale: 'sme' } },
          },
          {
            singularName: 'front-page',
            queryParams: {
              populate: {
                hero_image: '*',
                footer_sections: {
                  populate: {
                    link_groups: {
                      populate: {
                        links: '*',
                        some_links: '*',
                      },
                    },
                  },
                },
                navigation: {
                  populate: {
                    subnavigation: {
                      populate: {
                        page: '*',
                        subnavigation: {
                          populate: {
                            page: {
                              populate: '*',
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            pluginOptions: { i18n: { locale: 'smn' } },
          },
          {
            singularName: 'not-found-page',
            queryParams: {
              populate: '*',
            },
            pluginOptions: { i18n: { locale: 'fi' } },
          },
          {
            singularName: 'not-found-page',
            queryParams: {
              populate: '*',
            },
            pluginOptions: { i18n: { locale: 'sv' } },
          },
          {
            singularName: 'not-found-page',
            queryParams: {
              populate: '*',
            },
            pluginOptions: { i18n: { locale: 'en' } },
          },
          {
            singularName: 'not-found-page',
            queryParams: {
              populate: '*',
            },
            pluginOptions: { i18n: { locale: 'sme' } },
          },
          {
            singularName: 'not-found-page',
            queryParams: {
              populate: '*',
            },
            pluginOptions: { i18n: { locale: 'smn' } },
          },
          {
            singularName: 'cookie-page',
            queryParams: {
              populate: '*',
            },
            pluginOptions: { i18n: { locale: 'fi' } },
          },
          {
            singularName: 'cookie-page',
            queryParams: {
              populate: '*',
            },
            pluginOptions: { i18n: { locale: 'sv' } },
          },
          {
            singularName: 'cookie-page',
            queryParams: {
              populate: '*',
            },
            pluginOptions: { i18n: { locale: 'en' } },
          },
          {
            singularName: 'cookie-page',
            queryParams: {
              populate: '*',
            },
            pluginOptions: { i18n: { locale: 'sme' } },
          },
          {
            singularName: 'cookie-page',
            queryParams: {
              populate: '*',
            },
            pluginOptions: { i18n: { locale: 'smn' } },
          },
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
