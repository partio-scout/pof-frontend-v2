import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../layouts/default';
import { useSearchContext } from '../contexts/searchContext';
import { useTranslation } from 'react-i18next';
import { currentLocale } from '../utils/helpers';
import LibuoyIcon from '../images/lifebuoy.inline.svg';
import BlockArea from '../components/blockArea';

const NotFoundComponent = ({ page }: { page?: StrapiNotFoundPage }) => {
  const { t } = useTranslation();
  const { dispatch } = useSearchContext();

  const { title, ingress, content } = page || {};

  return (
    <div className="flex flex-col items-center my-10">
      <div className="flex font-tondu text-hardBlue text-8xl py-10">
        4<LibuoyIcon className="mx-1 fill-current text-notFoundRed" />4
      </div>
      <h1 className="uppercase sm:text-xxxlt md:text-xxxlw text-center">{title}</h1>
      {ingress && <p className="my-4 md:text-base">{ingress}</p>}
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: 'set-search-active', payload: true });
        }}
        className="inline-block bg-hardBlue uppercase text-xl rounded px-6 py-3 font-tondu text-white tracking-wide"
      >
        {t('avaa-haku')}
      </a>
      <div className="pt-10">
        <BlockArea blocks={content} />
      </div>
    </div>
  );
};

// markup
const NotFoundPage = ({ data }: PageProps<{ pages: { nodes: StrapiNotFoundPage[] } }>) => {
  const locale = currentLocale();

  const pageData = data.pages.nodes.find((page) => page.locale === locale);

  return (
    <Layout>
      <NotFoundComponent page={pageData} />
    </Layout>
  );
};

export default NotFoundPage;

export const query = graphql`
  query NotFoundPage {
    pages: allStrapiNotFoundPage {
      nodes {
        content
        ingress
        title
        locale
      }
    }
  }
`;
