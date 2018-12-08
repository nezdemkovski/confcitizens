import React from 'react';
import styled from 'styled-components';

import { initGA, logPageView } from '../utils/analytics';

interface Props {
  children: JSX.Element;
}

declare global {
  interface Window {
    GA_INITIALIZED: any;
  }
}

const Wrapper = styled.div`
  padding: 50px 10px;

  @media (min-width: 992px) {
    padding: 50px 100px;
  }

  @media (min-width: 1200px) {
    padding: 0 300px 100px;
  }
`;

class Layout extends React.Component<Props> {
  public componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      if (!window.GA_INITIALIZED) {
        initGA();
        window.GA_INITIALIZED = true;
      }
      logPageView();
    }
  }

  public render() {
    return <Wrapper>{this.props.children}</Wrapper>;
  }
}
export default Layout;
