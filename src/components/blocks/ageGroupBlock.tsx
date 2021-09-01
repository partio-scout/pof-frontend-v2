import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { BlockProps, BlockType } from '.';
import { StrapiAgeGroup } from '../../../graphql-types';
import { prependApiUrl } from '../../utils/helpers';
import { findHeaderItemByTypeAndId } from '../../utils/navigation';
import useNavigation from '../../hooks/navigation';
import RichText from '../RichText';

export interface AgeGroupBlockType extends BlockType {
  title?: string;
  ingress?: string;
}

const query = graphql`
  {
    allStrapiAgeGroup {
      nodes {
        strapiId
        logo {
          formats {
            thumbnail {
              url
            }
          }
        }
        locale
        title
      }
    }
  }
`;

const currentLocale = 'fi';

function AgeGroupBlock({ block }: BlockProps<AgeGroupBlockType>) {
  const queryResult = useStaticQuery<{ allStrapiAgeGroup: { nodes: StrapiAgeGroup[] } }>(query);
  const navigation = useNavigation(currentLocale);

  const { nodes: ageGroups } = queryResult.allStrapiAgeGroup;

  const currentLocaleAgeGroups = ageGroups.filter((group) => group.locale === currentLocale);

  return (
    <div className="">
      <div className="flex flex-wrap mb-14">
        <h2 className="w-full lg:w-2/5">{block.title}</h2>
        <RichText className="w-full lg:w-3/5" html={block.ingress} />
      </div>
      <div className="flex flex-wrap -mx-2 justify-center">
        {currentLocaleAgeGroups.map((group) => (
          <div className="m-2 text-center uppercase font-bold transform transition-transform duration-100 hover:scale-110 w-44" key={group.id}>
            <Link to={findHeaderItemByTypeAndId('AgeGroup', group.strapiId || 0, navigation)?.url || ''}>
              <div className="flex justify-center items-center h-44 w-44 rounded-2xl bg-gray-light mb-3">
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
