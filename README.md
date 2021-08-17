# pof-frontend-v2
Partio-ohjelma frontend


TODO

## Note about Gatsby's graphql schema
Gatsby's normally dynamic graphql schema has been locked down with `gatsby-plugin-schema-snapshot` which writes the current schema to `./schema.gql` and uses it an override after initial creation. This way optional fields from Strapi don't need to be populated all the time.
If there are changes in the Strapi data so that the schema has to updated, just set environment variable `GATSBY_UPDATE_SCHEMA_SNAPSHOT` to true and restart the development server. That updates the schema. 


