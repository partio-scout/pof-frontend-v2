import React from 'react';
import { StrapiActivityGroup } from '../../../graphql-types';
import CombinedLink from '../../components/combinedLink';
import { prependApiUrl } from '../../utils/helpers';

interface ActivityGroupListProps {
  groups: StrapiActivityGroup[];
}

function ActivityGroupList({ groups }: ActivityGroupListProps) {
  const categories = groups.reduce((prev, curr) => {
    const category = curr.activity_group_category?.name || '0';
    prev[category] = [...(prev[category] || []), curr];
    return prev;
  }, {} as Record<string, StrapiActivityGroup[]>);

  return (
    <div>
      {Object.entries(categories)
        ?.sort(([categoryA], [categoryB]) => (categoryA > categoryB ? 1 : -1))
        .map(([category, groups]) => {
          return (
            <div className="text-center" key={category}>
              {category !== '0' && <h3>{category}</h3>}
              <div className="flex flex-row justify-center lg:px-20 flex-wrap mb-5 mt-2">
                {groups.map((group) => (
                  <CombinedLink
                    to={group.fields?.path || ''}
                    className="flex flex-col h-32 max-w-32 m-2 transform transition-transform duration-100 hover:scale-110 text-center items-center font-bold"
                    key={group.id}
                  >
                    <img
                      src={prependApiUrl(group?.logo?.formats?.thumbnail?.url || group.logo?.url) || ''}
                      alt={group?.title || ''}
                      className="h-20 w-20 mb-1"
                    />
                    {group.title}
                  </CombinedLink>
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ActivityGroupList;
