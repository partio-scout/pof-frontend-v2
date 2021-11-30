import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../layouts/default';
import { StrapiCookiePage } from '../../graphql-types';
import { currentLocale } from '../utils/helpers';


const CookiePage = ({ data }: PageProps<{ pages: { nodes: StrapiCookiePage[] } }>) => {
  const locale = currentLocale();
  const pageData = data.pages.nodes.find((page) => page.locale === locale);
  const { title, ingress } = pageData || {};


  return (
    <Layout>
      <div className="flex flex-col items-center my-10">
        <h1 className="uppercase sm:text-xxxlt md:text-xxxlw text-center">{title}</h1>
        {ingress && <p className="my-4 md:text-base">{ingress}</p>}
        <script
          id="CookieDeclaration"
          src={`https://consent.cookiebot.com/${process.env.GATSBY_COOKIEBOT_ID}/cd.js`}
          type="text/javascript"
        ></script>
      </div>
    </Layout>
  );
}; 

export default CookiePage

export const query = graphql`
  {
    pages: allStrapiCookiePage {
      nodes {
        content
        ingress
        title
        locale
      }
    }
  }
`;

