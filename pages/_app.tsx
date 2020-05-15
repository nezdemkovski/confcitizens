import { AppProps } from 'next/app';

import Layout from '@components/layout/Layout';

import '@styles';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <p className="text-3xl text-red-700">The website is under construction!</p>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default MyApp;
