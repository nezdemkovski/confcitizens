import { Layout } from 'antd';
import React from 'react';
import styled from 'styled-components';

const AlgoliaLogo = require('./assets/algolia.svg') as string;

const FooterWrapper = styled(Layout.Footer)`
  text-align: center;
  padding: 50px 0;
`;

const Footer = () => (
  <FooterWrapper>
    <p>
      We ♥{' '}
      <a
        href="https://github.com/yakovlevyuri/confcitizens"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open Source
      </a>
    </p>
    <p>2018. Website works until the last visitor leaves</p>

    <AlgoliaLogo />
  </FooterWrapper>
);

export default Footer;
