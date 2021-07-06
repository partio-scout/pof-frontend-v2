import React from 'react';
import Header from '../components/header';

interface LayoutProps {
  children: React.ReactNode;
  showBreadCrumbs?: boolean;
}

const mockHeaderItems = [
  {
    name: 'Partio-Ohjelma',
    subMenu: [
      {
        name: 'Sudenpennut',
        ingress: '7-9 vuotiaat',
        url: '/sudenpennut',
      },
      {
        name: 'Seikkailijat',
        ingress: '10-12 vuotiaat',
        url: '/seikkailijat',
      },
      {
        name: 'Tarpojat',
        ingress: '15-17 vuotiaat',
        url: '/tarpojat',
      },
      {
        name: 'Samoajat',
        ingress: '15-17 vuotiaat',
        url: '/samoajat',
      },
      {
        name: 'Vaeltajat',
        ingress: '18-22 vuotiaat',
        url: '/vaeltajat',
      },
      {
        name: 'Perhepartio',
        ingress: 'Lorem ipsum dolor',
        url: '/perhepartio',
      },
    ],
  },
  {
    name: 'Ajankohtaista',
  },
  {
    name: 'Materiaalit',
  },
  {
    name: 'Partiokasvatus',
  },
];

const DefaultLayout = ({ children, showBreadCrumbs = false }: LayoutProps) => {
  return (
    <div>
      <Header headerItems={mockHeaderItems} showBreadCrumbs={showBreadCrumbs} />
      <div className="mx-auto">{children}</div>
    </div>
  );
};

export default DefaultLayout;
