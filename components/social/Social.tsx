import { Tooltip } from 'antd';
import React from 'react';
import styled from 'styled-components';

import { Speaker } from '../../data/speakers';
import Button from '../button/Button';

interface Props {
  data: Speaker;
}

const SocialWrapper = styled.div`
  display: flex;
  grid-area: links;
  align-items: center;
  justify-content: center;

  & > a {
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const Social = ({ data }: Props) => (
  <SocialWrapper>
    {data.social.blog && (
      <Tooltip title="Blog">
        <Button icon="book" href={data.social.blog} />
      </Tooltip>
    )}

    {data.social.linkedin && (
      <Tooltip title="LinkedIn">
        <Button icon="linkedin" href={data.social.linkedin} />
      </Tooltip>
    )}

    {data.website && (
      <Tooltip title="Website">
        <Button icon="global" href={data.website} />
      </Tooltip>
    )}

    {data.social.twitter && (
      <Tooltip title="Twitter">
        <Button
          icon="twitter"
          href={`https://twitter.com/${data.social.twitter}`}
        />
      </Tooltip>
    )}

    {data.social.github && (
      <Tooltip title="Github">
        <Button
          icon="github"
          href={`https://github.com/${data.social.github}`}
        />
      </Tooltip>
    )}
  </SocialWrapper>
);

export default Social;
