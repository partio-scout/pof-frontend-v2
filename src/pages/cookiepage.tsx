import React, { useState, useEffect } from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../layouts/default';
import { StrapiCookiePage } from '../../graphql-types';
import { currentLocale } from '../utils/helpers';

const loadDeclarationScript = (callback: any) => {
  const existingScript = document.getElementById('CookieDeclaration');
  if (!existingScript) {
    const script = document.createElement('script');
    script.src = `https://consent.cookiebot.com/${process.env.GATSBY_COOKIEBOT_ID}/cd.js`;
    script.id = 'CookieDeclaration';
    document.body.appendChild(script);
    script.onload = () => {
      if (callback) callback();
    };
  }
  if (existingScript && callback) callback();
};

const CookiePageComponent = ({ page }: { page?: StrapiCookiePage }) => {
  const { title, ingress } = page || {};

  return (
    <div className="flex flex-col items-center my-10">
      <h1 className="uppercase sm:text-xxxlt md:text-xxxlw text-center">{title}</h1>
      {ingress && <p className="my-4 md:text-base">{ingress}</p>}
      <script
        id="CookieDeclaration"
        src={`https://consent.cookiebot.com/${process.env.GATSBY_COOKIEBOT_ID}/cd.js`}
        type="text/javascript"
      ></script>
    </div>
  );
};

const CookiePage = ({ data }: PageProps<{ pages: { nodes: StrapiCookiePage[] } }>) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loadDeclarationScript(() => {
      setLoaded(true);
    });
  });

  const locale = currentLocale();
  const pageData = data.pages.nodes.find((page) => page.locale === locale);

  return <Layout>{loaded ? <CookiePageComponent page={pageData} /> : ''}</Layout>;
};

export default CookiePage;

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
