import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../layouts/default';
import { useSearchContext } from '../contexts/searchContext';
import { useTranslation } from 'react-i18next';

const NotFoundComponent = () => {
  const { t } = useTranslation();
  const { dispatch } = useSearchContext();

  return (
    <div>
      <h1>{t('page-not-found')}</h1>
      <div>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: 'set-search-active', payload: true });
          }}
        >
          {t('open-search')}
        </a>
      </div>
      <div>
        <Link to="/">{t('return-home')}</Link>
      </div>
    </div>
  );
};

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <NotFoundComponent />
    </Layout>
  );
};

export default NotFoundPage;
