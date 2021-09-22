import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../layouts/default';
import { useSearchContext } from '../contexts/searchContext';

const NotFoundComponent = () => {
  const { dispatch } = useSearchContext();

  return (
    <div>
      {/* TODO translate these */}
      <h1>Etsimääsi sivua ei löytynyt</h1>
      <div>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: 'set-search-active', payload: true });
          }}
        >
          Avaa haku
        </a>
      </div>
      <div>
        <Link to="/">Palaa etusivulle</Link>
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
