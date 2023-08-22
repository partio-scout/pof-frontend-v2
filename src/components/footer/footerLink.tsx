import React from 'react';
import { StrapiFrontPageFooter_SectionsLink_GroupsLinks } from '../../../graphql-types';
import CombinedLink from '../combinedLink';
import { addLineBreaks } from './utils';

function FooterLink({ description, email, phone_number, url, title }: StrapiFrontPageFooter_SectionsLink_GroupsLinks) {
  const linkClasses = 'hover:text-hardBlue font-bold';
  let link;
  if (url)
    link = (
      <CombinedLink to={url} className={linkClasses}>
        {title}
      </CombinedLink>
    );
  else if (email)
    link = (
      <a href={'mailto:' + email} className={linkClasses}>
        {title || email}
      </a>
    );
  else if (phone_number)
    link = (
      <a href={'tel:' + phone_number} className={linkClasses}>
        {title || phone_number}
      </a>
    );

  return (
    <div className="mb-2">
      {link && link}
      <p className="text-gray-semiDark tracking-wide md:text-base">{addLineBreaks(description)}</p>
    </div>
  );
}

export default FooterLink;
