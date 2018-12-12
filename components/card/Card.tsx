import { Button, Tag, Tooltip } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

import { countries } from '../../data/countries';
import { Speaker } from '../../data/speakers';

interface Props {
  hit: Speaker;
}

const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image content' 'links links';
  background: white;
  padding: 15px 20px;

  @media (min-width: 768px) {
    grid-template-columns: auto 1fr auto;
    grid-template-areas: 'image content links';
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

const Links = styled.div`
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

const Flag = styled.span`
  font-size: 1.5em;
  vertical-align: middle;
  margin-left: 10px;
`;

const TagWrapper = styled(Tag)`
  margin-bottom: 10px;
`;

const Card = ({ hit }: Props) => (
  <Wrapper>
    <Image
      src={`https://avatars.io/twitter/${hit.social.twitter}/medium`}
      width={70}
      height={70}
      alt={hit.fullName}
    />

    <Content>
      <Link as={`/${hit.objectID}`} href={`/detail?username=${hit.objectID}`}>
        <Title>
          {hit.fullName}
          <Tooltip
            title={`${hit.currentLocation.country}, ${
              hit.currentLocation.city
            }`}
          >
            <Flag>
              {countries[hit.currentLocation.country] &&
                countries[hit.currentLocation.country].emoji}
            </Flag>
          </Tooltip>
        </Title>
      </Link>

      <div>
        {hit.tags.map((tag, id) => (
          <TagWrapper color="blue" key={id}>
            <Link href={{ pathname: '/', query: { search: tag } }}>
              <a>{tag}</a>
            </Link>
          </TagWrapper>
        ))}
      </div>
    </Content>

    <Links>
      {hit.social.blog && (
        <Tooltip title="Blog">
          <Button
            shape="circle"
            icon="book"
            size="large"
            href={hit.social.blog}
            target="_blank"
            rel="noopener noreferrer"
          />
        </Tooltip>
      )}

      {hit.social.linkedin && (
        <Tooltip title="LinkedIn">
          <Button
            shape="circle"
            icon="linkedin"
            size="large"
            href={hit.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          />
        </Tooltip>
      )}

      {hit.website && (
        <Tooltip title="Website">
          <Button
            shape="circle"
            icon="global"
            size="large"
            href={hit.website}
            target="_blank"
            rel="noopener noreferrer"
          />
        </Tooltip>
      )}

      {hit.social.twitter && (
        <Tooltip title="Twitter">
          <Button
            shape="circle"
            icon="twitter"
            size="large"
            href={`https://twitter.com/${hit.social.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
          />
        </Tooltip>
      )}

      {hit.social.github && (
        <Tooltip title="Github">
          <Button
            shape="circle"
            icon="github"
            size="large"
            href={`https://github.com/${hit.social.github}`}
            target="_blank"
            rel="noopener noreferrer"
          />
        </Tooltip>
      )}
    </Links>
  </Wrapper>
);

export default Card;
