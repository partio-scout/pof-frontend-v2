import React from 'react';
import { StrapiFrontPageFooter_SectionsLink_GroupsLinks } from '../../../graphql-types';
import CombinedLink from '../combinedLink';

function FooterLink({ description, email, phone_number, url, title }: StrapiFrontPageFooter_SectionsLink_GroupsLinks) {
  let linkClasses = 'hover:text-hardBlue font-bold';
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
  else {
    console.warn('FooterLink with nothing to show!');
    return null;
  }

  return (
    <div className="mb-2">
      {link}
      <p className="text-gray-semiDark tracking-wide">{description}</p>
    </div>
  );
}

export default FooterLink;
