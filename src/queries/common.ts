export const mediaFragment = `
  width
  url
  size
  name
  mime
  height
  formats {
    large {
      height
      mime
      name
      size
      url
      width
    }
    medium {
      width
      url
      size
      name
      mime
      height
    }
    small {
      width
      url
      size
      name
      mime
      height
    }
    thumbnail {
      width
      url
      size
      name
      mime
      height
    }
  }
`;

export const fileFragment = `
  url
  size
  name
  mime
  id
`;

export const commonFragment = `
  locale
  localizations {
    locale
    id
  }
  title
  updated_at
  created_at
  published_at
  id
  strapiId
`;
