import { Tooltip } from 'antd';
import Link from 'next/link';
import React, { Fragment } from 'react';
import styled from 'styled-components';

import { countries } from '../../data/countries';
import { Speaker } from '../../data/speakers';
import Social from '../social/Social';
import Tags from '../tags/Tags';

interface Props {
  hit: Speaker;
}

const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image content' 'links links';
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 15px 20px;

  @media (min-width: 768px) {
    grid-template-columns: auto 1fr auto;
    grid-template-areas: 'image content links';
  }

  &:hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  grid-area: image;
`;

const Title = styled.h3`
  font-size: 1.3em;
  font-weight: 700;
`;

const Content = styled.div`
  grid-area: content;
`;

const Flag = styled.span`
  font-size: 1.5em;
  vertical-align: middle;
  margin-left: 10px;
`;

const generateTitle = ({ fullName, currentLocation }) => (
  <Title>
    {fullName}
    <Tooltip title={`${currentLocation.country}, ${currentLocation.city}`}>
      <Flag>
        {countries[currentLocation.country] &&
          countries[currentLocation.country].emoji}
      </Flag>
    </Tooltip>
  </Title>
);

const Card = ({ hit }: Props) => (
  <Wrapper>
    <Link as={`/${hit.objectID}`} href={`/detail?username=${hit.objectID}`}>
      <Image
        src={`https://avatars.io/twitter/${hit.social.twitter}/medium`}
        width={70}
        height={70}
        alt={hit.fullName}
      />
    </Link>

    <Link as={`/${hit.objectID}`} href={`/detail?username=${hit.objectID}`}>
      <Content>
        {generateTitle(hit)}

        <Tags data={hit.tags} />
      </Content>
    </Link>

    <Social data={hit} />
  </Wrapper>
);

export default Card;
