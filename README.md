# pof-frontend-v2
Partio-ohjelma frontend


## Graphql schema

Gatsby uses graphql as its data query language, and it creates the schema for it automatically base on the data that it has. This doesn't work well for Strapi data, since unpopulated fields are not returned from the REST-API which the plugin `gatsby-source-strapi` uses to fetch the data. This leads to unpopulated starpi fields not ending up in the schema, and we don't want that. This problem has been fixed by defining the schema for Strapi data statically, in the file `configs/typeDefs.gql`. If you need to define something else manually, add those definitions to the same file.

## Environment variables

For development, add the following variables into file: `.env.development`.

Required environment variables:

- `GATSBY_API_URL`: The address of the Strapi API
- `GATSBY_ALGOLIA_APP_ID`: Id of the Algolia application
- `GATSBY_ALGOLIA_API_KEY`: API-KEY for the Algolia application
- `GATSBY_ALGOLIA_ENVIRONMENT`: the environment used in Algolia
- `GA_TRACKING_ID`: Google Analytics tracking-id (not needed in development)  
- `GATSBY_COOKIEBOT_ID`: Cookiebot Id (not needed in development)

Optional environment variables:

- `GATSBY_UPDATE_SCHEMA_SNAPSHOT`: Set this to true to update the graphql schema on `yarn develop`
- `ENABLE_GATSBY_REFRESH_ENDPOINT`: Set this to true to enable Gatsby's refresh-endpoint on `yarn develop`. Useful when running a preview server.
