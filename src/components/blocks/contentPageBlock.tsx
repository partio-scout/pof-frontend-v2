import { Link } from 'gatsby';
import React from 'react';
import { BlockProps, BlockType } from '.';
import { StrapiContentPage } from '../../../graphql-types';
import useNavigation from '../../hooks/navigation';
import { prependApiUrl } from '../../utils/helpers';
import { findHeaderItemByTypeAndId } from '../../utils/navigation';
import { useTranslation } from 'react-i18next';
import { currentLocale } from '../../utils/helpers';

type ContentPageFromBlock = StrapiContentPage & {
  id: number;
  strapi_id: number;
};

interface ContentPageCardProps {
  page: ContentPageFromBlock;
}

const ContentPageCard = ({ page }: ContentPageCardProps) => {
  const { t } = useTranslation();
  const navigation = useNavigation(currentLocale());

  const { title, ingress, publishedAt, id, main_image, strapi_id } = page;

  const url = findHeaderItemByTypeAndId('ContentPage', strapi_id, navigation)?.url;

  const imageUrl = prependApiUrl(main_image?.url);

  // return url ? (
  return (
    <div className="flex flex-col rounded-lg m-3 max-w-card h-491  overflow-hidden">
      {imageUrl && (
        <div>
          <img src={imageUrl} className="w-full h-64 object-cover" alt={title || ''} />
        </div>
      )}
      <div className="flex flex-col justify-around bg-gray-light w-full grow">
        <div className="grow p-2">
          <h4 className="bold font-tondu tracking-wider text-blue sm:text-lt md:text-lw">{title}</h4>
          <p className="text-blue md:text-base">{ingress?.data}</p>
        </div>
        <div className="flex justify-between items-center pl-2">
          <span className="font-sourceSansPro pl-2 pb-2 text-gray-dark">
            {new Date(publishedAt).toLocaleDateString('fi')}
          </span>
          <Link
            to={url}
            className="rounded px-4 py-3.5 w-1/2 bg-lightBlue hover:bg-hardBlue font-tondu tracking-wider text-center"
          >
            {t('lue-lisaa')}
          </Link>
        </div>
      </div>
    </div>
    // ) : null;
  );
};

export interface ContentPageBlockType extends BlockType {
  content_pages?: ContentPageFromBlock[];
}

const ContentPageBlock = ({ block }: BlockProps<ContentPageBlockType>) => (
  <div className="flex flex-row flex-wrap justify-center">
    {block.content_pages?.map((page, index: number) => (
      <ContentPageCard key={page.title + index.toString()} page={page} />
    ))}
  </div>
);

export default ContentPageBlock;
