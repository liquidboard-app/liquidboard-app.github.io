import React from 'react';
import Hero from './components/Hero';
import ListMarquee from './components/ListMarquee';
import ListFeatures from './components/ListFeatures';
import WritingTool from './components/WritingTool';
import ListAction from './components/ListAction';
import { NewVersionPage } from './styled';

const NewVersion: React.FC = () => <NewVersionPage>
  <Hero />
  <ListMarquee />
  <ListFeatures />
  <ListAction />
  <WritingTool />
</NewVersionPage>;

export default NewVersion;
