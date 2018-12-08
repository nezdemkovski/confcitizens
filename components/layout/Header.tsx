import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  text-align: center;
  padding: 50px 0 25px;
`;

const Logo = styled.h1`
  font-weight: 700;
  font-family: 'Chinese Quote', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue',
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
`;

const Header = () => (
  <FooterWrapper>
    <Logo>ConfCitizens</Logo>
  </FooterWrapper>
);

export default Header;
