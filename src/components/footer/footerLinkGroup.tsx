import React from 'react'
import {
  StrapiFrontPageFooter_SectionsLink_Groups,
} from '../../../graphql-types';
import FooterLink from './footerLink';
import FooterSomeLinks from './footerSomeLinks';

function FooterLinkGroup({ links, some_links }: StrapiFrontPageFooter_SectionsLink_Groups) {
  return (
    <div className="flex flex-col mb-4">
      {links?.map((link) => (
        <FooterLink {...link} key={link?.id} />
      ))}
      {some_links && <FooterSomeLinks {...some_links} />}
    </div>
  );
}

export default FooterLinkGroup;
