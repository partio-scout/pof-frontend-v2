import { graphql, useStaticQuery } from 'gatsby';
import React, { createContext, useContext } from 'react';
import { ActivityLogo } from '../../graphql-types';

interface LogoContextState {
  activityLogos: { [key: string]: string };
}

const LogoContext = createContext<LogoContextState | undefined>(undefined);

export const useLogoContext = () => {
  const context = useContext(LogoContext);

  if (context === undefined) throw new Error('useLogoContext must be used within a LogoContextProvider');

  return context;
};

const logoQuery = graphql`
  query LogoQuery {
    allActivityLogo {
      nodes {
        logo {
          url
        }
        id
      }
    }
  }
`;

export const LogoContextProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const { allActivityLogo } = useStaticQuery<{ allActivityLogo: { nodes: ActivityLogo[] } }>(logoQuery);

  const activityLogos = allActivityLogo.nodes.reduce((logos, logo) => {
    const id = logo.id.replace('activity-logo-', '');
    logos[id] = logo.logo!;
    return logos;
  }, {} as { [key: string]: string });

  const state: LogoContextState = {
    activityLogos: activityLogos,
  };

  return <LogoContext.Provider value={state}>{children}</LogoContext.Provider>;
};
