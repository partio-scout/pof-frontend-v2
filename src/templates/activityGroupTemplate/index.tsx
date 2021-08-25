import { PageProps, graphql } from 'gatsby';
import React from 'react';
import { StrapiActivity, StrapiActivityGroup, StrapiAgeGroup, StrapiSuggestion } from '../../../graphql-types';
import CombinedLink from '../../components/combinedLink';
import HeroTitleSection from '../../components/heroTitleSection';
import Metadata from '../../components/metadata';
import Layout from '../../layouts/default';
import Suggestions from './suggestions';
import Activities from './activities';
import SiblingGroups from './siblingGroups';

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
              fixed(height: 150) {
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
    activities: allStrapiActivity(filter: { activity_group: { id: { eq: $id } } }) {
      nodes {
        fields {
          path
        }
        title
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
  activities: { nodes: StrapiActivity[] };
}

const currentLocale = 'fi';

const activityGroupTemplate = ({ pageContext, path, data }: PageProps<QueryType, ActivityGroupPageTemplateProps>) => {
  const { title, ingress, main_image, age_group, logo, links, activity_group_category, activitygroup_term } =
    pageContext.data;
  const { ageGroup, suggestions, otherGroups, activities } = data;

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
      <div className="px-8 md:px-0">
        <div className="relative -mt-40 pt-2">
          <HeroTitleSection mainTitle={title || ''} subTitle={subTitle} imageName={logo?.localFile?.publicURL || ''} />
        </div>
        <div className="flex flex-col md:flex-row py-5">
          <div className="flex-1 text-xl font-sourceSansPro tracking-wide pb-3 md:py-0 md:pr-3">{ingress}</div>
          {(links?.length || 0) > 0 && (
            <div className="flex flex-row md:flex-col">
              {links?.map((link) => (
                <div className="mb-1 mr-2 md:mr-0">
                  <CombinedLink
                    to={link?.url || ''}
                    className="block bg-gray-light rounded-2xl p-3 md:p-5 font-tondu text-2xl uppercase tracking-wider"
                  >
                    {link?.description}
                  </CombinedLink>
                </div>
              ))}
            </div>
          )}
        </div>
        <Activities activities={activities.nodes} />
        <h2 className="uppercase">Uusimmat toteutusvinkit</h2>
        <Suggestions suggestions={suggestions.nodes} />
        <h2 className="uppercase text-center">Muut {activitygroup_term?.plural}</h2>
        <SiblingGroups groups={otherGroups.nodes} />
      </div>
    </Layout>
  );
};

export default activityGroupTemplate;
