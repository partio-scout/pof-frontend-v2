import { graphql } from 'gatsby';

export const imageFragment = graphql`
  fragment ImageFragment on STRAPI__MEDIA {
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
    # provider
    createdAt
    updatedAt
  }

  fragment ImageFormatFragmentLarge on STRAPI__MEDIAFormatsLarge {
    ext
    url
    hash
    mime
    name
    size
    width
    height
  }

  fragment ImageFormatFragmentMedium on STRAPI__MEDIAFormatsMedium {
    ext
    url
    hash
    mime
    name
    size
    width
    height
  }

  fragment ImageFormatFragmentSmall on STRAPI__MEDIAFormatsSmall {
    ext
    url
    hash
    mime
    name
    size
    width
    height
  }

  fragment ImageFormatFragmentThumbnail on STRAPI__MEDIAFormatsThumbnail {
    ext
    url
    hash
    mime
    name
    size
    width
    height
  }

  fragment ImageFormatsFragment on STRAPI__MEDIAFormats {
    large {
      ...ImageFormatFragmentLarge
    }
    medium {
      ...ImageFormatFragmentMedium
    }
    small {
      ...ImageFormatFragmentSmall
    }
    thumbnail {
      ...ImageFormatFragmentThumbnail
    }
  }
`;
