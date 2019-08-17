import App from 'next/app';
import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Layout from '../components/layout/Layout';
import { Normalize } from '../utils/normalize';

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 14px;
  }

  body,
  .ant-input,
  .ant-tag,
  .ant-checkbox-wrapper,
  .ant-timeline {
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
              serif;
  }
`;

class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Layout>
          <Component {...pageProps} />
        </Layout>

        <Normalize />
        <GlobalStyle />
      </>
    );
  }
}
export default MyApp;
