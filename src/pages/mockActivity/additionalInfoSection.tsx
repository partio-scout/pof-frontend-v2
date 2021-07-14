import React from 'react';

const AdditionalInfoSection = ({ data }) => (
  <div className="mt-8 bg-gray-light py-20 px-24">
    <div>
      <h3 className="text-blue">{data.header}</h3>
      <p className="text-blue mt-4">{data.content}</p>
      <h4 className="text-blue mt-4">{data.subHeader}</h4>
    </div>
    <div></div>
  </div>
);

export default AdditionalInfoSection;
