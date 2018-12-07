import React from 'react';

import { initGA, logPageView } from '../utils/analytics';

interface Props {
  children: JSX.Element;
}

declare global {
  interface Window {
    GA_INITIALIZED: any;
  }
}

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
    return this.props.children;
  }
}
export default Layout;
