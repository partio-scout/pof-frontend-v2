import React from 'react';
import { SitePage, StrapiActivityGroup } from '../../../graphql-types';
import CombinedLink from '../../components/combinedLink';
import { prependApiUrl } from '../../utils/helpers';

interface ActivityGroupListProps {
  groups: StrapiActivityGroup[];
  links:  SitePage[] | null;
}

function ActivityGroupList({ groups, links }: ActivityGroupListProps) {
  const findUrlFromLinks = (id: number) => {
    if (links) {
      const link = links.find((l) => l.context?.strapi_id === id);
      if (link) {
        return link.path || '';
      }
    }
    return '';
  }

  let categories = groups.reduce((prev, curr) => {
    const category = curr.activity_group_category;

    const i = prev.findIndex((x) => x.category === (category?.name || ''));
    if (i > -1) {
      prev[i].groups.push(curr);
    } else {
      prev.push({
        category: category?.name || '',
        sort_order: curr.activity_group_category?.sort_order || Infinity,
        groups: [{ ...curr, sort_order: curr.sort_order || 1000 }],
      });
    }
    return prev;
  }, [] as { category: string; sort_order: number; groups: StrapiActivityGroup[] }[]);

  categories = categories.sort((categoryA, categoryB) => (categoryA.sort_order < categoryB.sort_order ? -1 : 1));

  const categoryWithNoNameIndex = categories.findIndex((c) => c.category === '');

  let categoryWithNoName;

  if (categoryWithNoNameIndex) {
    categoryWithNoName = categories.splice(categoryWithNoNameIndex, 1)[0];
  }

  if (categoryWithNoName) {
    categories = [categoryWithNoName, ...categories];
  }

  return (
    <div>
      {categories.map(({ category, groups }) => {
        return (
          <div className="text-center" key={category}>
            {category !== '' && <h3 className="sm:text-xlt md:text-xlw">{category}</h3>}
            <div className="flex flex-row justify-center lg:px-20 flex-wrap mb-5 mt-2">
              {groups
                .sort((a, b) => ((a.sort_order || 0) > (b.sort_order || 0) ? 1 : -1))
                .map((group) => (
                  <CombinedLink
                    to={findUrlFromLinks(group.strapi_id as number) || ''}
                    className="flex flex-col min-h-32 max-w-32 m-2 transform transition-transform duration-100 hover:scale-110 text-center items-center font-bold break-words hyphens-auto"
                    key={group.strapi_id}
                  >
                    <img
                      src={prependApiUrl(group?.logo?.formats?.thumbnail?.url || group.logo?.url) || ''}
                      alt={group?.title || ''}
                      className="h-20 w-auto mb-1"
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
