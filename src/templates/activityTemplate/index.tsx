import React, { useEffect } from 'react';
import Layout from '../../layouts/default';
import mockHero from '../../images/mockHero.png';
import HeroTitleSection from '../../components/heroTitleSection';
import { PaddedContainer } from '../../components/ui.general';
import ActivityContentSection from './activityContentSection';
import ActivitySpecsSection from './activitySpecsSection';
import { PageProps } from 'gatsby';
import { StrapiActivity, StrapiActivityGroup } from '../../../graphql-types';
import SuggestionsSection from './suggestionsSection/';
import Metadata from '../../components/metadata';
import { prependApiUrl } from '../../utils/helpers';

interface ActivityPageTemplateProps {
  data: { activity: StrapiActivity; activityGroup: StrapiActivityGroup };
}

const currentLocale = 'fi';

const ActivityPageTemplate = ({ pageContext, path }: PageProps<object, ActivityPageTemplateProps>) => {
  const {
    data: { activity, activityGroup },
  } = pageContext;

  const subTitle = `${activityGroup?.title || ''}${
    activityGroup?.activity_group_category?.name ? ` - ${activityGroup.activity_group_category?.name}` : ''
  }`;

  return (
    <Layout
      showBreadCrumbs
      pageHeader={
        <HeroTitleSection
          logoUrl={
            prependApiUrl(activity.activity_group?.logo?.formats?.thumbnail?.url || activityGroup?.logo?.url) || ''
          }
          mainImageUrl={mockHero}
          mainTitle={activityGroup?.title || ''}
          subTitle={subTitle}
          smallMainTitle
          color={activity.age_group?.color}
        />
      }
    >
      <Metadata title={activity.title || ''} description={activity.ingress || ''} path={path} locale={currentLocale} />
      <h2 className="pt-4">{activity.title}</h2>
      <ActivityContentSection data={activity} />
      <ActivitySpecsSection data={activity} />
      <SuggestionsSection data={activity} activityId={activity.strapiId!} />
    </Layout>
  );
};

export default ActivityPageTemplate;
