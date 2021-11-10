# pof-frontend-v2
Partio-ohjelma frontend

## 1. Project purpose

Website for Partio-scout Finland

## 2. Architecture

Gatsby app hosted in Gatsby cloud
Strapi as a CMS
Written with ReactJs
Backend hosted in Azure
Algolia as a search engine

### 2.1. Graphql schema

Gatsby uses graphql as its data query language, and it creates the schema for it automatically base on the data that it has. This doesn't work well for Strapi data, since unpopulated fields are not returned from the REST-API which the plugin `gatsby-source-strapi` uses to fetch the data. This leads to unpopulated starpi fields not ending up in the schema, and we don't want that. This problem has been fixed by defining the schema for Strapi data statically, in the file `configs/typeDefs.gql`. If you need to define something else manually, add those definitions to the same file.

## 3. Development environment
### 3.1. Prerequisites, and what to do first

- Install dependencies with `yarn install`

### 3.2 Environment variables

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

You can find the .env-file from LastPass.
### 3.3. Run tests

TODO: Tests

### 3.4. Start the application locally

`yarn develop`

If you're using development server as an API and the build fails for statuscode 403 - Forbidden, make sure that the public roles are correctly set. Go to `localhost:1337/admin` -> General -> Settings -> USERS & PERMISSIONS PLUGIN  -> Roles -> public -> Permissions. Check from production strapi what permissions to give.

### 3.5. Access the application locally

`http://localhost:8000/`

### 3.6. Version control

Create a new branch when working with new feature or fixing a bug.
Create a pull request into `staging` branch. There should be at least one reviewer for changes.
Test your changes and if everything is fine, merge staging branch to `main`

## 4. Test environment

### 4.1. Access

-  `https://stage.partio-ohjelma.fi/`

### 4.2. Deployment

Merge a branch to staging, Gatsby cloud automatically deploys new changes to staging.

### 4.3. Verifying that a deployment was successful

Check the build logs in Github actions and go to staging site, test if everything is workjing okay.

### 4.4. Logs

Deployment logs can be founf from Gatsby cloud and Github,

## 5. Production environment

### 5.1. Access

-  `https://partio-ohjelma.fi/`

### 5.2. Deployment

Merge staging branch to main, Gatsby cloud automatically deploys changes to production.

### 5.3. Verifying that a deployment was successful

// TODO

#### 5.3.1. Automated test cases
// TODO

#### 5.3.2. Manual test cases

// TODO

### 5.4. Rollback
// TODO

### 5.5. Logs
// TODO

## 6. Continuous integration

// TODO




