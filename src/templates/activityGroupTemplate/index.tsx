import { PageProps, useStaticQuery, graphql, Link } from 'gatsby';
import React from 'react';
import { StrapiActivityGroup, StrapiAgeGroup, StrapiSuggestion } from '../../../graphql-types';
import CombinedLink from '../../components/combinedLink';
import HeroTitleSection from '../../components/heroTitleSection';
import Metadata from '../../components/metadata';
import { PaddedContainer } from '../../components/ui.general';
import Layout from '../../layouts/default';

export const query = graphql`
  query Query($id: Int, $ageGroupId: Int) {
    ageGroup: strapiAgeGroup(activity_groups: { elemMatch: { id: { eq: $id } } }) {
      strapiId
      title
      main_image {
        url
        localFile {
          url
        }
      }
    }
    otherGroups: allStrapiActivityGroup(filter: { strapiId: { ne: $id }, age_group: { id: { eq: $ageGroupId } } }) {
      nodes {
        fields {
          path
        }
        logo {
          localFile {
            childImageSharp {
              fixed(height: 200) {
                src
              }
            }
          }
        }
        title
        strapiId
      }
    }
    suggestions: allStrapiSuggestion(
      filter: { activity: { activity_group: { eq: $id } } }
      sort: { fields: published_at, order: DESC }
      limit: 4
    ) {
      nodes {
        author
        content
        published_at
        title
        strapiId
        locale
        like_count
        id
      }
    }
  }
`;

interface ActivityGroupPageTemplateProps {
  data: StrapiActivityGroup;
}

interface QueryType {
  ageGroup: StrapiAgeGroup | null;
  otherGroups: { nodes: StrapiActivityGroup[] };
  suggestions: { nodes: StrapiSuggestion[] };
}

const currentLocale = 'fi';

const activityGroupTemplate = ({ pageContext, path, data }: PageProps<QueryType, ActivityGroupPageTemplateProps>) => {
  const {
    title,
    ingress,
    main_image,
    age_group,
    logo,
    links,
    activities,
    activity_group_category,
    activitygroup_term,
  } = pageContext.data;
  const { ageGroup, suggestions, otherGroups } = data;

  // const otherActivityGroups = ageGroup?.activity_groups?.filter((group) => group?.id !== strapiId);

  const subTitle = age_group?.title
    ? `${age_group.title}${activity_group_category?.name ? ' - ' + activity_group_category.name : ''}`
    : '';

  return (
    <Layout showBreadCrumbs>
      <Metadata title={title || ''} description={ingress || ''} path={path} locale={currentLocale} />
      <div className="relative overflow-hidden h-86 mb-8">
        <div className="bg-gradient-to-t from-blue w-full h-full absolute opacity-75"></div>
        <img src={main_image?.url || ageGroup?.main_image?.localFile?.url || ''} className="w-full max-h-6/8 "></img>
      </div>
      <PaddedContainer>
        <div className="relative -mt-40 pt-2">
          <HeroTitleSection mainTitle={title || ''} subTitle={subTitle} imageName={logo?.localFile?.publicURL || ''} />
        </div>
        <div className="flex py-5">
          <div className="flex-1 text-xl font-sourceSansPro tracking-wide">{ingress}</div>
          {(links?.length || 0) > 0 && (
            <div className="flex flex-col">
              {links?.map((link) => (
                <div className="mb-1">
                  <CombinedLink
                    to={link?.url || ''}
                    className="block bg-gray-light rounded-2xl p-5 font-tondu text-2xl uppercase tracking-wider"
                  >
                    {link?.description}
                  </CombinedLink>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="masonry before:box-inherit after:box-inherit">
          {activities?.map((activity) => (
            // TODO real activity cards
            <div className="break-inside bg-gray-light rounded-2xl p-8 mb-3" key={activity?.id}>
              {activity?.title}
            </div>
          ))}
        </div>
        <h2 className="uppercase">Uusimmat toteutusvinkit</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {suggestions.nodes.map((suggestion) => (
            <div className="bg-gray-light rounded-2xl p-8" key={suggestion.id}>
              <p>{suggestion.title}</p>
              <p>{suggestion.content}</p>
            </div>
          ))}
        </div>
        <h2>Muut {activitygroup_term?.plural}</h2>
        <div className="flex flex-row justify-items-center px-20 flex-wrap">
          {otherGroups?.nodes.map((group) => (
            <div className="">
              <img src={group?.logo?.localFile?.childImageSharp?.fixed?.src || ''} alt={group?.title || ''} />
            </div>
          ))}
        </div>
      </PaddedContainer>
    </Layout>
  );
};

export default activityGroupTemplate;
