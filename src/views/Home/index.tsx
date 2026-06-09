import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Action from './components/Action';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Action />
    </>
  );
};

export default Home;
