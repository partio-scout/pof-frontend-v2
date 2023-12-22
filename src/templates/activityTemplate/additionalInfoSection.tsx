import React from 'react';
import { Strapi_Activity } from '../../../graphql-types';

interface AdditionalInfoSection {
  data: Strapi_Activity;
}

const AdditionalInfoSection = ({ data }: AdditionalInfoSection) => (
  <div className="mt-8 bg-gray-light py-20 px-24">
    <div>
      <p className="text-blue mt-4 md:text-base">{data.content}</p>
    </div>
    <div></div>
  </div>
);

export default AdditionalInfoSection;
