import React from 'react';
import { StrapiFrontPageFooter_Sections } from '../../../graphql-types';
import FooterLinkGroup from './footerLinkGroup';
import { addLineBreaks } from './utils';

interface FooterSectionProps {
  data: StrapiFrontPageFooter_Sections;
}

function FooterSection({ data }: FooterSectionProps) {
  return (
    <div className="flex flex-col text-white mr-6">
      {data.title && (
        <p className="text-white text-l mb-4 sm:text-xl md:text-xl">
          {addLineBreaks(data.title, 'font-tondu uppercase tracking-wider')}
        </p>
      )}
      {(data.link_groups?.length || 0) > 0 &&
        data.link_groups?.map((linkGroup) => <FooterLinkGroup {...linkGroup} key={linkGroup?.id} />)}
    </div>
  );
}

export default FooterSection;
