export const getActivityGroup = `
query getActivityGroup($id: Int!) {
  strapiActivityGroup(strapiId: {eq: $id}) {
    activities {
      id
      title
    }
  }
}
`;
