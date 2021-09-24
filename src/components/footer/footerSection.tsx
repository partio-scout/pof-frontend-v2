import React from 'react';
import {
  StrapiFrontPageFooter_Sections,
  StrapiFrontPageFooter_SectionsLink_Groups,
  StrapiFrontPageFooter_SectionsLink_GroupsLinks,
  StrapiFrontPageFooter_SectionsLink_GroupsSome_Links,
} from '../../../graphql-types';
import CombinedLink from '../combinedLink';
import FacebookIcon from '../../images/facebook.inline.svg';
import TwitterIcon from '../../images/twitter.inline.svg';
import InstagramIcon from '../../images/instagram.inline.svg';
import YoutubeIcon from '../../images/youtube.inline.svg';

interface FooterSectionProps {
  data: StrapiFrontPageFooter_Sections;
}

function FooterSection({ data }: FooterSectionProps) {
  return (
    <div className="flex flex-col text-white mr-6">
      {data.title && (
        <h2 className="text-white text-xl mb-4">
          {data.title.split('\n').map((span, i, arr) => (
            <>
              {span}
              {i !== arr.length - 1 && <br />}
            </>
          ))}
        </h2>
      )}
      {(data.link_groups?.length || 0) > 0 &&
        data.link_groups?.map((linkGroup) => (
          <FooterLinkGroup {...linkGroup} key={linkGroup?.id} />
        ))}
    </div>
  );
}

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

function FooterSomeLinks({
  facebook_url,
  twitter_url,
  instagram_url,
  youtube_url,
}: StrapiFrontPageFooter_SectionsLink_GroupsSome_Links) {
  return (
    <div className="flex flex-col">
      {facebook_url && <FooterSomeLink url={facebook_url} name="Facebook" icon={FacebookIcon} />}
      {twitter_url && <FooterSomeLink url={twitter_url} name="Twitter" icon={TwitterIcon} />}
      {instagram_url && <FooterSomeLink url={instagram_url} name="Instagram" icon={InstagramIcon} />}
      {youtube_url && <FooterSomeLink url={youtube_url} name="YouTube" icon={YoutubeIcon} />}
    </div>
  );
}

interface FooterSomeLinkProps {
  url: string;
  name: string;
  icon: typeof FacebookIcon;
}

function FooterSomeLink({ url, name, icon }: FooterSomeLinkProps) {
  const Icon = icon;
  return (
    <a className="text-white font-bold flex hover:text-hardBlue mb-2" href={url} target="_blank">
      <Icon className="fill-current mr-1" />
      {name}
    </a>
  );
}

function FooterLink({ description, email, phone_number, url, title }: StrapiFrontPageFooter_SectionsLink_GroupsLinks) {
  let linkClasses = "hover:text-hardBlue font-bold";
  let link;
  if (url) link = <CombinedLink to={url} className={linkClasses}>{title}</CombinedLink>;
  else if (email) link = <a href={'mailto:' + email} className={linkClasses}>{title || email}</a>;
  else if (phone_number) link = <a href={'tel:' + phone_number} className={linkClasses}>{title || phone_number}</a>;
  else {
    console.warn('FooterLink with nothing to show!');
    return null;
  }

  return <div className="mb-2">
    {link}
    <p className="text-gray-semiDark tracking-wide">{description}</p>
  </div>
}

export default FooterSection;
