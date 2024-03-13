import { useStaticQuery, graphql } from 'gatsby';

const metadataQuery = graphql`
  {
    allStrapiFrontPage {
      nodes {
        title
        meta_description
        ingress
        locale
        strapiId
        hero_image {
          ...ImageFragment
        }
      }
    }
  }
`;

interface Metadata {
  title: string;
  meta_description: string;
  locale: string;
  siteUrl: string;
  image: string;
}

const useMetadata = (currentLocale: string): Metadata => {
  const { allStrapiFrontPage } = useStaticQuery(metadataQuery);

  const correctMetadata = allStrapiFrontPage.nodes.find((node) => node.locale === currentLocale);

  const metadata: Metadata = {
    title: correctMetadata?.title || 'Partio-ohjelma',
    locale: correctMetadata?.locale || 'fi',
    meta_description: correctMetadata?.meta_description || correctMetadata?.ingress || '',
    siteUrl: 'https://partio-ohjelma.fi',
    image: correctMetadata?.hero_image?.url || '',
  };

  return metadata;
};

export default useMetadata;
