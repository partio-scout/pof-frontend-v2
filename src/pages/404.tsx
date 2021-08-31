import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../layouts/default';

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <h1>Etsimääsi sivua ei löytynyt</h1>
      <Link to="/">Palaa etusivulle</Link>
    </Layout>
  );
};

export default NotFoundPage;
