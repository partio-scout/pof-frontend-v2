import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StrapiFrontPage } from '../../../graphql-types';
import FooterSection from './footerSection';
import LogoIcon from '../../images/logo.inline.svg';

const footerQuery = graphql`
  {
    allStrapiFrontPage {
      nodes {
        locale
        footer_sections {
          id
          link_groups {
            id
            links {
              id
              url
              phone_number
              email
              description
              title
            }
            some_links {
              id
              facebook_url
              instagram_url
              twitter_url
              youtube_url
            }
          }
          title
        }
      }
    }
  }
`;

const currentLocale = 'fi';

function Footer() {
  const { allStrapiFrontPage } = useStaticQuery<{ allStrapiFrontPage: { nodes: StrapiFrontPage[] } }>(footerQuery);

  const footerSections = allStrapiFrontPage.nodes.find((x) => x.locale === currentLocale)?.footer_sections;

  return (
    <div className="bg-blue">
      <div className="flex flex-wrap flex-col lg:flex-row justify-between align-middle container mx-auto max-w-7xl p-16">
        <div className="w-full mb-12">
          <LogoIcon className="text-white fill-current" />
        </div>
        {footerSections?.map((section) => (
          <FooterSection data={section!} key={section?.id} />
        ))}
      </div>
    </div>
  );
}

export default Footer;