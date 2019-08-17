import Link from 'next/link';
import React from 'react';
import GithubCorner from 'react-github-corner';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  text-align: center;
  padding: 50px 0 25px;
  background: #ffffff;
`;

const Logo = styled.h1`
  font-weight: 700;
  font-family: 'Chinese Quote', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue',
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  cursor: pointer;
  user-select: none;
`;

const Header = () => (
  <HeaderWrapper>
    <Link href="/">
      <Logo>ConfCitizens</Logo>
    </Link>
    <p>Open-source and crowd-sourced conference speakers website</p>
    <GithubCorner href="https://github.com/yakovlevyuri/confcitizens" />
  </HeaderWrapper>
);

export default Header;
