import React from 'react';
import { Strapi__Component_Footer_Link_Group } from '../../../graphql-types';
import FooterLink from './footerLink';
import FooterSomeLinks from './footerSomeLinks';

function FooterLinkGroup({ links, some_links }: Strapi__Component_Footer_Link_Group) {
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
