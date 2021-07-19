import React from 'react';
import { StrapiActivity } from '../../../graphql-types';

interface AdditionalInfoSection {
  data: StrapiActivity;
}

const AdditionalInfoSection = ({ data }: AdditionalInfoSection) => (
  <div className="mt-8 bg-gray-light py-20 px-24">
    <div>
      <p className="text-blue mt-4">{data.content}</p>
    </div>
    <div></div>
  </div>
);

export default AdditionalInfoSection;
