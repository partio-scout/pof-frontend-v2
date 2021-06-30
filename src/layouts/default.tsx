import React from 'react';
import Header from '../components/header';

interface LayoutProps {
  children: React.ReactNode;
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

const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <div className="container">
      <Header headerItems={mockHeaderItems} />
      <div className="md:px-24 2xl:px-0 mx-auto max-w-7xl">{children}</div>
    </div>
  );
};

export default DefaultLayout;
