import { graphql } from 'gatsby';

export const ActivityBlockFields = graphql`
  fragment ActivityBlockFields on STRAPI__COMPONENT_BLOCKS_ACTIVITY_BLOCK {
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
  fragment AgeGroupBlockFields on STRAPI__COMPONENT_BLOCKS_AGE_GROUP_BLOCK {
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
  fragment ContentPageBlockFields on STRAPI__COMPONENT_BLOCKS_CONTENT_PAGE_BLOCK {
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
  fragment HeroBlockFields on STRAPI__COMPONENT_BLOCKS_HERO_BLOCK {
    id
    title
    text
    link_text
    link_url
  }
`;

export const ImageBlockFields = graphql`
  fragment ImageBlockFields on STRAPI__COMPONENT_BLOCKS_IMAGE_BLOCK {
    id
  }
`;

export const LinkBlockFields = graphql`
  fragment LinkBlockFields on STRAPI__COMPONENT_BLOCKS_LINK_BLOCK {
    id
    url
    linkBlockText: text
  }
`;

export const TextBlockFields = graphql`
  fragment TextBlockFields on STRAPI__COMPONENT_BLOCKS_TEXT_BLOCK {
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
  fragment VideoBlockFields on STRAPI__COMPONENT_BLOCKS_VIDEO_BLOCK {
    id
    video_url
  }
`;
