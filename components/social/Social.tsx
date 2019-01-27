import { Button, Tooltip } from 'antd';
import React from 'react';
import styled from 'styled-components';

import { Speaker } from '../../data/speakers';

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
        <Button
          shape="circle"
          icon="book"
          size="large"
          href={data.social.blog}
          target="_blank"
          rel="noopener noreferrer"
        />
      </Tooltip>
    )}

    {data.social.linkedin && (
      <Tooltip title="LinkedIn">
        <Button
          shape="circle"
          icon="linkedin"
          size="large"
          href={data.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        />
      </Tooltip>
    )}

    {data.website && (
      <Tooltip title="Website">
        <Button
          shape="circle"
          icon="global"
          size="large"
          href={data.website}
          target="_blank"
          rel="noopener noreferrer"
        />
      </Tooltip>
    )}

    {data.social.twitter && (
      <Tooltip title="Twitter">
        <Button
          shape="circle"
          icon="twitter"
          size="large"
          href={`https://twitter.com/${data.social.twitter}`}
          target="_blank"
          rel="noopener noreferrer"
        />
      </Tooltip>
    )}

    {data.social.github && (
      <Tooltip title="Github">
        <Button
          shape="circle"
          icon="github"
          size="large"
          href={`https://github.com/${data.social.github}`}
          target="_blank"
          rel="noopener noreferrer"
        />
      </Tooltip>
    )}
  </SocialWrapper>
);

export default Social;
