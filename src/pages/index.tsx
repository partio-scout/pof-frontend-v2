import React from 'react';
import CurrentNewsHighlights from '../components/currentNewsHighlights';
import Header from '../components/header/';
import Hero from '../components/hero';
import AgeGroups from '../components/ageGroups/frontPageSection';

const IndexPage = () => {
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

  const mockNews = [
    {
      title: 'Lorem ipsum dolor ajankohtaista heading',
      ingress:
        'Nulla fringilla eros vel ex eleifend accumsan. Phasellus porta massa eu neque viverra varius. Fusce id sapien tortor. Sed bibendum eleifend...',
      date: '1.8.2021',
      buttonText: 'Lue lisää',
    },
    {
      title: 'Lorem ipsum dolor ajankohtaista ',
      ingress:
        'Nulla fringilla eros vel ex eleifend accumsan. Phasellus porta massa eu neque viverra varius. Fusce id sapien tortor. Sed bibendum eleifend...',
      date: '28.8.2021',
      buttonText: 'Lue lisää',
    },
    {
      title: 'Lorem ipsum dolor ajankohtaista ',
      ingress:
        'Nulla fringilla eros vel ex eleifend accumsan. Phasellus porta massa eu neque viverra varius. Fusce id sapien tortor. Sed bibendum eleifend...',
      date: '28.8.2021',
      buttonText: 'Lue lisää',
    },
  ];

  return (
    <div>
      <Header headerItems={mockHeaderItems} />
      <div className="md:px-24 2xl:px-0 mx-auto max-w-7xl">
        <Hero />
        <CurrentNewsHighlights currentNews={mockNews} />
        <AgeGroups />
      </div>
    </div>
  );
};

export default IndexPage;
