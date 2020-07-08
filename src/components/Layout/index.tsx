import React from 'react';

import Header from '../Header';
import Sidebar from '../Sidebar';
import PlayMusic from '../PlayMusic';
import PanelInfo from '../PanelInfo';

import { Grid } from './styles';

const Layout: React.FC = () => {
  return (
    <Grid>
      <Header />
      <Sidebar />
      <PanelInfo />
      <PlayMusic />
    </Grid>
  );
}

export default Layout;