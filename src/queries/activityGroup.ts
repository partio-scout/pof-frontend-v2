export const getActivityGroup = `
#query getActivityGroup($id: Int!) {
#  strapiActivityGroup(strapi_id: {eq: $id}) {

query getActivityGroup($title: String!) {
  strapiActivityGroup(title: {eq: $title}) {
    localizations {
        data {
          id
          attributes {
            locale
            publishedAt
          }
        }
      }
    locale
    activities {
      id
      title
      locale
      strapi_id
    }
  }
}
`;
