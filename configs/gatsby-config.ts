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
  plugins: [
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
              populate: {
                activity_group: '*',
                age_group: '*',
                educational_objectives: '*',
                leader_skills: '*',
                files: '*',
                preparation_duration: '*',
                group_sizes: '*',
                skill_areas: '*',
                duration: '*',
                locations: '*',
                suggestions: {
                  populate: '*',
                },
                logo: '*',
                main_image: '*',
                name: '*',
                description: '*',
                content: '*',
                images: '*',
              },
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
              populate: {
                activity_groups:  {
                  populate: {
                    activity_group: '*',
                  },
                },
                main_image:  '*',
                logo:  '*',
                icon:  '*',
                activities:  {
                  populate: '*',
                  activity_group: {
                    populate: '*',
                    logo: '*',
                    subactivitygroup_term: {
                      populate: '*',
                    },
                  },
                },

                links: '*',
                lower_content_area: {
                  populate: '*',
                },
                upper_content_area: {
                  populate: '*',
                },
                content: '*',
                ingress: '*',
              },
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
              populate: '*'
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
              populate: '*'
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
              populate: {
                activities: {
                  populate: '*',
                },
                age_group: {
                  populate: '*',
                },
                logo: '*',
                main_image: '*',
                activity_group_category: {
                  populate: '*',
                },    
                subactivity_term: {
                  populate: '*',
                },
                activitygroup_term: {
                  populate: '*',
                },

                subactivitygroup_term: {
                  populate: '*',
                },
                links: {
                  populate: '*',
                },
              },
            },
            pluginOptions: {
              i18n: {
                locale: 'all',
              },
            },
          },

          {
            singularName: 'content-page',
            queryParams: {
              populate: {
                title: '*',
                ingress: '*',
                main_image: {
                  populate: {
                    formats: '*',
                  },
                },
                content: {
                  on: {
                    'blocks.activity-block': {
                      populate: {
                        block_width: '*',
                        activities: {
                          populate: '*',
                        },
                        link_text: {
                          populate: '*',
                        },
                        link_url: {
                          populate: '*',
                        },
                      },
                    },
                    'blocks.age-group-block': {
                      populate: {
                        block_width: '*',
                        age_group: '*',
                        content: {
                          populate: '*',
                        },
                        ingress: '*',
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
                    'blocks.hero-block': {
                      populate: {
                        block_width: '*',
                      },
                    },
                    'blocks.image-block': {
                      populate: {
                        block_width: '*',
                      },
                    },
                    'blocks.link-block': {
                      populate: {
                        block_width: '*',
                      },
                    },
                    'blocks.text-block': {
                      populate: {
                        block_width: '*',
                      },
                    },
                    'blocks.video-block': {
                      populate: {
                        block_width: '*',
                      },
                    },
                  },
                },
                main_text: {
                  data: '*',
                },
                meta_description: '*',
                meta_title: '*',
              }
            },
            pluginOptions: {
              i18n: {
                locale: 'all',
              },
            },
          },
          {
            singularName: 'suggestion',
            queryParams: {
              populate: '*',
              locations: {
                populate: '*',
              },
              activity: {
                populate: '*',
              },
              duration: {
                populate: '*',
              },
            },
            pluginOptions: {
              i18n: {
                locale: 'all',
              },
            }
          }
        ],
        singleTypes: [
          {
            singularName: 'front-page',
            queryParams: {
              locale: 'all',
              populate: {
                locale: '*',
                strapi_id: '*',
                ingress: '*',
                content: {
                  on: {
                    'blocks.activity-block': {
                      populate: {
                        block_width: '*',
                        activities: {
                          populate: '*',
                        },
                        link_text: {
                          populate: '*',
                        },
                        link_url: {
                          populate: '*',
                        },
                      },
                    },
                    'blocks.age-group-block': {
                      populate: {
                        block_width: '*',
                        age_group: '*',
                        content: {
                          populate: '*',
                        },
                        ingress: '*',
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
                    'blocks.hero-block': {
                      populate: {
                        block_width: '*',
                      },
                    },
                    'blocks.image-block': {
                      populate: {
                        block_width: '*',
                      },
                    },
                    'blocks.link-block': {
                      populate: {
                        block_width: '*',
                      },
                    },
                    'blocks.text-block': {
                      populate: {
                        block_width: '*',
                      },
                    },
                    'blocks.video-block': {
                      populate: {
                        block_width: '*',
                      },
                    },
                  },
                },
                hero_image: {
                  populate: '*',
                },
                hero_link_text: {
                  populate: '*',
                },
                hero_link_url: {
                  populate: '*',
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
              locale: 'sv',
              populate: {
                content: {
                  on: {
                    'blocks.activity-block': {
                      populate: {
                        block_width: '*',
                        activities: {
                          populate: '*',
                        },
                        link_text: {
                          populate: '*',
                        },
                        link_url: {
                          populate: '*',
                        },
                      },
                    },
                    'blocks.age-group-block': {
                      populate: {
                        block_width: '*',
                        age_group: '*',
                        content: {
                          populate: '*',
                        },
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
                    'blocks.hero-block': {
                      populate: {
                        block_width: '*',
                      },
                    },
                    'blocks.image-block': {
                      populate: {
                        block_width: '*',
                      },
                    },
                    'blocks.link-block': {
                      populate: {
                        block_width: '*',
                      },
                    },
                    'blocks.text-block': {
                      populate: {
                        block_width: '*',
                      },
                    },
                    'blocks.video-block': {
                      populate: {
                        block_width: '*',
                      },
                    },
                  },
                },
                hero_image: {
                  populate: '*',
                },
                hero_link_text: {
                  populate: '*',
                },
                hero_link_url: {
                  populate: '*',
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
            pluginOptions: { i18n: { locale: 'sv' } },
          },
          /*
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
            pluginOptions: { i18n: { locale: 'smn' } },
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
          */

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
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
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
