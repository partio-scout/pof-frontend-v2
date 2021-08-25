import React from 'react';
import { StrapiActivityGroup } from '../../../graphql-types';
import CombinedLink from '../../components/combinedLink';

interface SiblingGroupsProps {
  groups: StrapiActivityGroup[];
}

function SiblingGroups({ groups }: SiblingGroupsProps) {
  return (
    <div className="flex flex-row justify-center lg:px-20 flex-wrap mb-5 mt-2">
      {groups
        ?.sort((a, b) => (a.title! > b.title! ? 1 : -1))
        .map((group) => (
          <div className="w-44 h-44 m-2 transform transition-transform duration-100 hover:scale-110 bg-gray-light rounded-2xl p-2 text-center">
            <CombinedLink to={group.fields?.path || ''} className="flex flex-col h-full">
              {group.title}
              <div className="flex flex-grow justify-center items-center">
                <img
                  src={group?.logo?.localFile?.childImageSharp?.fixed?.src || ''}
                  alt={group?.title || ''}
                  className="h-20 w-20"
                />
              </div>
            </CombinedLink>
          </div>
        ))}
    </div>
  );
}

export default SiblingGroups;
