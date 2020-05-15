import { useEffect, FC } from 'react';

import { initGA, logPageView } from '../../utils/analytics';
import Footer from './Footer';
import Header from './Header';

declare global {
  interface Window {
    GA_INITIALIZED: any;
  }
}

// const Content = styled.div`
//   padding: 0 15px;
//   background: #ffffff;

//   @media (min-width: 992px) {
//     padding: 0 100px;
//   }

//   @media (min-width: 1200px) {
//     padding: 0 300px;
//   }
// `;

const Layout: FC = ({ children }) => {
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
    <>
      <Header />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-16">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
