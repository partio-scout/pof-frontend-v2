import { commonFragment } from './common';

export const getContentPage = `
  query getContentPage($id: Int!) {
    strapiContentPage(strapiId: { eq: $id }) {
      ${commonFragment}
      content
      main_text
      ingress
    }
  }
`;
