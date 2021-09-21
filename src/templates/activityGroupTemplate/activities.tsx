import { Link } from 'gatsby';
import React from 'react';
import { StrapiActivity } from '../../../graphql-types';

interface ActivitiesProps {
  activities: StrapiActivity[];
  mandatoryTitle?: string | null;
  mandatoryDescription?: string | null;
  optionalTitle?: string | null;
  optionalDescription?: string | null;
}

const Heading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl uppercase mb-3">{children}</h2>
);

const Paragraph = ({children}: { children: React.ReactNode }) => (
  <p className="mb-5 tracking-wide">{children}</p>
)

function Activities({
  activities,
  mandatoryTitle,
  mandatoryDescription,
  optionalTitle,
  optionalDescription,
}: ActivitiesProps) {
  const mandatoryActivities = activities.filter((activity) => activity.mandatory);
  const optionalActivities = activities.filter((activity) => !activity.mandatory);

  return (
    <div>
      {/* TODO Translate */}
      {mandatoryActivities.length > 0 && (
        <>
          <Heading>{mandatoryTitle || 'Pakolliset aktiviteetit'}</Heading>
          {mandatoryDescription && <Paragraph>{mandatoryDescription}</Paragraph>}
          <div className="masonry before:box-inherit after:box-inherit mb-5">
            {mandatoryActivities?.map((activity) => (
              // TODO real activity cards
              <Link
                to={activity.fields?.path || ''}
                className="block break-inside bg-gray-light rounded-2xl p-8 mb-3"
                key={activity?.strapiId}
              >
                {activity?.title}
              </Link>
            ))}
          </div>
        </>
      )}
      {optionalActivities.length > 0 && (
        <>
          <Heading>{optionalTitle || 'Valinnaiset aktiviteetit'}</Heading>
          {optionalDescription && <Paragraph>{optionalDescription}</Paragraph>}
          <div className="masonry before:box-inherit after:box-inherit mb-5">
            {optionalActivities?.map((activity) => (
              // TODO real activity cards
              <Link
                to={activity.fields?.path || ''}
                className="block break-inside bg-gray-light rounded-2xl p-8 mb-3"
                key={activity?.strapiId}
              >
                {activity?.title}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Activities;
