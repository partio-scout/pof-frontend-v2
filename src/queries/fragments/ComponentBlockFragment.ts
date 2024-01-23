import { graphql } from 'gatsby';

export const ActivityBlockFields = graphql`
  fragment ActivityBlockFields on StrapiComponentBlocksActivityBlock {
    strapi_id
    strapi_component
    activities {
      title
    }
    block_width {
      name
    }
  }
`;

export const AgeGroupBlockFields = graphql`
  fragment AgeGroupBlockFields on StrapiComponentBlocksAgeGroupBlock {
    strapi_id
    strapi_component
    title
    ingress {
      data {
        ingress
      }
    }
    block_width {
      name
    }
  }
`;

export const ContentPageBlockFields = graphql`
  fragment ContentPageBlockFields on StrapiComponentBlocksContentPageBlock {
    strapi_id
    strapi_component
    content_pages {
      id
      title
      ingress
      publishedAt
      updatedAt
      # main_image {
      #  formats
      #}
    }
    block_width {
      name
    }
  }
`;

export const HeroBlockFields = graphql`
  fragment HeroBlockFields on StrapiComponentBlocksHeroBlock {
    id
    title
    text
    link_text
    link_url
  }
`;

export const ImageBlockFields = graphql`
  fragment ImageBlockFields on StrapiComponentBlocksImageBlock {
    id
  }
`;

export const LinkBlockFields = graphql`
  fragment LinkBlockFields on StrapiComponentBlocksLinkBlock {
    id
    url
    linkBlockText: text
  }
`;

export const TextBlockFields = graphql`
  fragment TextBlockFields on StrapiComponentBlocksTextBlock {
    id
    title
    textBlockText: text {
      data {
        text
      }
    }
  }
`;

export const VideoBlockFields = graphql`
  fragment VideoBlockFields on StrapiComponentBlocksVideoBlock {
    id
    video_url
  }
`;
