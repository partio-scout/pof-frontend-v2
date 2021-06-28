import React from 'react';
import CurrentNewsHighlights from '../components/currentNewsHighlights';
import Layout from '../layouts/default';
import Hero from '../components/hero';
import AgeGroups from '../components/ageGroups/frontPageSection';

const IndexPage = () => {
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
    <Layout>
      <Hero />
      <CurrentNewsHighlights currentNews={mockNews} />
      <AgeGroups />
    </Layout>
  );
};

export default IndexPage;
