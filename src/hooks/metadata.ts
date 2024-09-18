import { useStaticQuery, graphql } from 'gatsby';
import { StrapiFrontPage, StrapiImage } from '../../graphql-types';

const metadataQuery = graphql`
  query MetaDataQuery {
    allStrapiFrontPage {
      nodes {
        title
        meta_description
        locale
        strapi_id
        hero_image {
          id
          name
          alternativeText
          caption
          width
          height
          formats {
            large {
              ext
              url
              hash
              mime
              name
              size
              width
              height
            }
            medium {
              ext
              url
              hash
              mime
              name
              size
              width
              height
            }
            small {
              ext
              url
              hash
              mime
              name
              size
              width
              height
            }
            thumbnail {
              ext
              url
              hash
              mime
              name
              size
              width
              height
            }
          }
          hash
          ext
          mime
          size
          url
          provider
          createdAt
          updatedAt
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
  const { allStrapiFrontPage } = useStaticQuery<{
    allStrapiFrontPage: {
      nodes: Pick<StrapiFrontPage, 'title' | 'meta_description' | 'ingress' | 'locale' | 'strapi_id' | 'hero_image'>[];
    };
  }>(metadataQuery);

  const correctMetadata = allStrapiFrontPage.nodes.find((node) => node.locale === currentLocale);

  const metadata: Metadata = {
    title: correctMetadata?.title || 'Partio-ohjelma',
    locale: correctMetadata?.locale || 'fi',
    meta_description: correctMetadata?.meta_description || correctMetadata?.ingress?.data || '',
    siteUrl: 'https://partio-ohjelma.fi',
    image: correctMetadata?.hero_image?.url || '',
  };

  return metadata;
};

export default useMetadata;
