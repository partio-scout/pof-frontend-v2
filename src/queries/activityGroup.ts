export const getActivityGroup = `
query getActivityGroup($id: Int!) {
  strapiActivityGroup(strapiId: {eq: $id}) {
    localizations {
      id
      locale
      published_at
    }
    locale
    activities {
      id
      title
      locale
    }
  }
}
`;
