import algoliasearch from "algoliasearch/lite";

const appId = process.env.GATSBY_ALGOLIA_APP_ID || '';
const apiKey = process.env.GATSBY_ALGOLIA_API_KEY || '';

const client = algoliasearch(appId, apiKey);

export { client };