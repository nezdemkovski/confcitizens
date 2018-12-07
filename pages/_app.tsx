import App, { Container } from 'next/app';
import React from 'react';

import Layout from '../components/Layout';

class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}
export default MyApp;
