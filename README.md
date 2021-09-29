# pof-frontend-v2
Partio-ohjelma frontend


TODO

## Environment variables

For development, add the following variables into file: `.env.development`.

Required environment variables:

- `API_URL`: The address of the Strapi API
- `GATSBY_ALGOLIA_APP_ID`: Id of the Algolia application
- `GATSBY_ALGOLIA_API_KEY`: API-KEY for the Algolia application
- `GATSBY_ALGOLIA_ENVIRONMENT`: the environment used in Algolia
- `GA_TRACKING_ID`: Google Analytics tracking-id (not needed in development)
- `GATSBY_COOKIEBOT_ID`: Cookiebot Id (not needed in development)

Optional environment variables:

- `GATSBY_UPDATE_SCHEMA_SNAPSHOT`: Set this to true to update the graphql schema on `yarn develop`
- `ENABLE_GATSBY_REFRESH_ENDPOINT`: Set this to true to enable Gatsby's refresh-endpoint on `yarn develop`. Useful when running a preview server.

## Note about Gatsby's graphql schema
Gatsby's normally dynamic graphql schema has been locked down with `gatsby-plugin-schema-snapshot` which writes the current schema to `./schema.gql` and uses it an override after initial creation. This way optional fields from Strapi don't need to be populated all the time.
If there are changes in the Strapi data so that the schema has to updated, just set environment variable `GATSBY_UPDATE_SCHEMA_SNAPSHOT` to true and restart the development server. That updates the schema. 

