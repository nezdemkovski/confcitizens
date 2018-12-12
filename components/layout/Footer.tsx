import { Layout } from 'antd';
import React from 'react';
import styled from 'styled-components';

const AlgoliaLogo = require('./assets/algolia.svg') as string;

const FooterWrapper = styled(Layout.Footer)`
  text-align: center;
  padding: 50px 0;
  background: #ffffff;
`;

const Link = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <p>
      <Link
        href="https://github.com/yakovlevyuri/confcitizens"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </Link>
      {' • '}
      <Link
        href="https://twitter.com/yakovlevyuri"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </Link>
    </p>

    <AlgoliaLogo />
  </FooterWrapper>
);

export default Footer;
