import React from 'react';
import { Helmet } from 'react-helmet';
import useMetadata from '../../hooks/metadata';
import { Locale } from '../../types/locale';

export interface MetadataProps {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  imageUrl?: string;
}

const languageTerritories = {
  fi: 'fi_FI',
  sv: 'sv_SE',
  en: 'en_US',
  // These two are probably not correct, couldn't find anything
  sme: 'sme',
  smn: 'smn',
};

/**
 * Creates Helmet element with page-specific metadata.
 * Use this in page templates to add their data as site metadata.
 */
function Metadata({ description, title, locale, path, imageUrl }: MetadataProps) {
  const metadata = useMetadata(locale);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:locale" content={languageTerritories[locale]} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={`${title} | ${metadata.title}`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${metadata.siteUrl}${path}`} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={`${title} | ${metadata.title}`} />
    </Helmet>
  );
}

export default Metadata;
