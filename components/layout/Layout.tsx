import { Layout as AntLayout } from 'antd';
import React, { useEffect } from 'react';
import styled from 'styled-components';

import { initGA, logPageView } from '../../utils/analytics';
import Footer from './Footer';
import Header from './Header';

interface Props {
  children: JSX.Element;
}

declare global {
  interface Window {
    GA_INITIALIZED: any;
  }
}

const Content = styled(AntLayout.Content)`
  padding: 0 15px;

  @media (min-width: 992px) {
    padding: 0 100px;
  }

  @media (min-width: 1200px) {
    padding: 0 300px;
  }
`;

const Layout = ({ children }: Props) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      if (!window.GA_INITIALIZED) {
        initGA();
        window.GA_INITIALIZED = true;
      }
      logPageView();
    }
  }, []);

  return (
    <AntLayout>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </AntLayout>
  );
};

export default Layout;
