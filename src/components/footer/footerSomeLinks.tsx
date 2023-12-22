import React from 'react';
import { Strapi__Component_Footer_Some_Links } from '../../../graphql-types';
import FacebookIcon from '../../images/facebook.inline.svg';
import TwitterIcon from '../../images/twitter.inline.svg';
import InstagramIcon from '../../images/instagram.inline.svg';
import YoutubeIcon from '../../images/youtube.inline.svg';
import FooterSomeLink from './footerSomeLink';

function FooterSomeLinks({
  facebook_url,
  twitter_url,
  instagram_url,
  youtube_url,
}: Strapi__Component_Footer_Some_Links) {
  return (
    <div className="flex flex-col">
      {facebook_url && <FooterSomeLink url={facebook_url} name="Facebook" icon={FacebookIcon} />}
      {twitter_url && <FooterSomeLink url={twitter_url} name="Twitter" icon={TwitterIcon} />}
      {instagram_url && <FooterSomeLink url={instagram_url} name="Instagram" icon={InstagramIcon} />}
      {youtube_url && <FooterSomeLink url={youtube_url} name="YouTube" icon={YoutubeIcon} />}
    </div>
  );
}

export default FooterSomeLinks;
