import { graphql } from "gatsby";

export const imageFragment = graphql`
  fragment ImageFragment on StrapiImage {
    id
    name
    alternativeText
    caption
    width
    height
    formats {
      ...ImageFormatsFragment
    }
    hash
    ext
    mime
    size
    url
    provider
    created_at
    updated_at
  }
  fragment ImageFormatFragment on StrapiImageFormat {
    ext
    url
    hash
    mime
    name
    size
    width
    height
  }

  fragment ImageFormatsFragment on StrapiImageFormats {
    large {
      ...ImageFormatFragment
    }
    small {
      ...ImageFormatFragment
    }
    medium {
      ...ImageFormatFragment
    }
    thumbnail {
      ...ImageFormatFragment
    }
  }
`;