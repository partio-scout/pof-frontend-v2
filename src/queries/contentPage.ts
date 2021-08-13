import { commonFragment } from './common';

export const getContentPage = `
  query getContentPage($id: Int!) {
    strapiContentpage(strapiId: { eq: $id }) {
      ${commonFragment}
      content
      main_text
      ingress
    }
  }
`;
