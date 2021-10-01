import React from 'react';

interface FooterSomeLinkProps {
  url: string;
  name: string;
  icon: any;
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

export default FooterSomeLink;
