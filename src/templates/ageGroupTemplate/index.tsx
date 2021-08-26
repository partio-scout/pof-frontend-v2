import React from 'react';
import HeroTitleSection from '../../components/heroTitleSection';
import { PaddedContainer } from '../../components/ui.general';
import mockHero from '../../images/mockHero.png';
import Layout from '../../layouts/default';
import { graphql, PageProps } from 'gatsby';
import { Maybe, StrapiActivityGroup, StrapiAgeGroup, StrapiAgeGroupActivity_Groups } from '../../../graphql-types';
import Metadata from '../../components/metadata';
import CombinedLink from '../../components/combinedLink';
import ActivityGroupList from '../../components/activityGroupList';
import { prependApiUrl } from '../../utils/helpers';
import PillLink from '../../components/pillLink';

interface AgeGroupPageTemplateProps {
  data: StrapiAgeGroup;
}

export const query = graphql`
  query ActivityGroupQuery($id: Int) {
    activityGroups: allStrapiActivityGroup(filter: { age_group: { id: { eq: $id } } }) {
      nodes {
        fields {
          path
        }
        logo {
          url
          formats {
            thumbnail {
              width
              url
              size
              name
              mime
              height
            }
          }
        }
        activity_group_category {
          name
          id
        }
        title
        strapiId
      }
    }
  }
`;

interface QueryType {
  activityGroups: { nodes: StrapiActivityGroup[] };
}

const currentLocale = 'fi';

const AgeGroupTemplate = ({ pageContext, path, data }: PageProps<QueryType, AgeGroupPageTemplateProps>) => {
  const { title, ingress, content, main_image, maximum_age, minimum_age, logo, links, subactivitygroup_term } =
    pageContext.data;

  const activityGroups = data.activityGroups.nodes;

  // TODO translate
  const subTitle = `${minimum_age}-${maximum_age} vuotiaat`;

  return (
    <Layout showBreadCrumbs={true}>
      <Metadata title={title || ''} description={ingress || ''} path={path} locale={currentLocale} />
      <div className="relative overflow-hidden h-86 mb-8">
        <div className="bg-gradient-to-t from-blue w-full h-full absolute opacity-75"></div>
        <img src={prependApiUrl(main_image?.url) || ''} className="w-full max-h-6/8 "></img>
      </div>
      <div className="px-8 md:px-0">
        <div className="relative -mt-40 pt-2">
          <HeroTitleSection
            mainTitle={title || ''}
            subTitle={subTitle}
            imageName={prependApiUrl(logo?.formats?.thumbnail?.url || logo?.url) || ''}
            smallMainTitle
          />
        </div>
        <div className="flex flex-col md:flex-row py-5">
          <div className="flex flex-col flex-1 pb-3 md:py-0 md:pr-3">
            <div className="text-xl font-sourceSansPro tracking-wide font-semibold mb-4">{ingress}</div>
            <div className="" dangerouslySetInnerHTML={{ __html: content || '' }} />
          </div>
          {(links?.length || 0) > 0 && (
            <div className="flex flex-row md:flex-col">
              {links?.map((link) => (
                <div className="mb-1 mr-2 md:mr-0">
                  <PillLink to={link?.url || ''}>{link?.description}</PillLink>
                </div>
              ))}
            </div>
          )}
        </div>
        <h2 className="uppercase text-center mb-6">{subactivitygroup_term?.plural}</h2>
        <ActivityGroupList groups={activityGroups} />
      </div>
    </Layout>
  );
};

export default AgeGroupTemplate;
