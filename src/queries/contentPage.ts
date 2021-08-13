export const getContentPage = `
  query getContentPage($id: Int!) {
    strapiContentpage(strapiId: { eq: $id }) {
      title
      content
      locale
      main_text
      ingress
      strapiId
    }
  }
`;
