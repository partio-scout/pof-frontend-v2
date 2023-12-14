import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { BlockProps, BlockType } from '.';
import { StrapiAgeGroup } from '../../../graphql-types';
import { prependApiUrl } from '../../utils/helpers';
import { findHeaderItemByTypeAndId } from '../../utils/navigation';
import useNavigation from '../../hooks/navigation';
import RichText from '../RichText';
import { hexToRgba } from '../../utils/color';
import { currentLocale } from '../../utils/helpers';

export interface AgeGroupBlockType extends BlockType {
  title?: string;
  ingress?: {
    data?: {
      ingress?: string;
    };
  };
}

const query = graphql`
  {
    allStrapiAgeGroup(sort: { fields: minimum_age }) {
      edges {
        node {
          strapi_id
          logo {
            formats {
              thumbnail {
                url
              }
            }
          }
          minimum_age
          color
          locale
          title
        }
      }
    }
  }
`;

function AgeGroupBlock({ block }: BlockProps<AgeGroupBlockType>) {
  const queryResult = useStaticQuery<{ allStrapiAgeGroup: { edges: StrapiAgeGroup[] } }>(query);
  const navigation = useNavigation(currentLocale());

  const { edges: ageGroups } = queryResult.allStrapiAgeGroup;
  console.log('TEST P ageGroups: ', ageGroups);
  console.log('TEST P currentLocale(): ', currentLocale());

  const currentLocaleAgeGroups = ageGroups.filter((group) => group.locale === currentLocale().toString());

  console.log('TEST P currentLocaleAgeGroups: ', currentLocaleAgeGroups);
  return (
    <div className="">
      <div className="flex flex-wrap mb-14">
        <h2 className="w-full lg:w-2/5 sm:text-4xl md:text-xxlw">{block.title}</h2>
        <RichText className="w-full lg:w-3/5" html={block.ingress?.data?.ingress} />
      </div>
      <div className="flex flex-wrap -mx-2 justify-center">
        {currentLocaleAgeGroups.map((group) => (
          <div
            className="m-2 text-center uppercase font-bold transform transition-transform duration-100 hover:-translate-y-0.5 w-44"
            key={group.strapi_id}
          >
            <Link to={findHeaderItemByTypeAndId('AgeGroup', group.strapi_id || 0, navigation)?.url || ''}>
              <div
                className="no-hover-focus:bg-gray-light flex justify-center items-center h-44 w-44 rounded-2xl mb-3"
                style={{ backgroundColor: hexToRgba(group.color || '', 0.2) }}
              >
                <img src={prependApiUrl(group.logo?.formats?.thumbnail?.url)} alt={group.title || ''} />
              </div>
              {group.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgeGroupBlock;
