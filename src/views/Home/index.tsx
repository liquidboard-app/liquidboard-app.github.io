import React from 'react';
import Hero from './components/Hero';
import ListMarquee from './components/ListMarquee';
import ListFeatures from './components/ListFeatures';
import WritingTool from './components/WritingTool';
import ListAction from './components/ListAction';
import { HomePage } from './styled';

const Home: React.FC = () => <HomePage>
  <Hero />
  <ListMarquee />
  <ListFeatures />
  <ListAction />
  <WritingTool />
</HomePage>;

export default Home;
