import { Button, Tag, Tooltip } from 'antd';
import styled from 'styled-components';
import { Speaker } from '../../content/speakersData';

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

const Card = ({ hit }: Props) => (
  <Wrapper>
    <Image
      src={`https://avatars.io/twitter/${hit.social.twitter}/medium`}
      width={70}
      height={70}
      alt={hit.fullName}
    />

    <Content>
      <Title>{hit.fullName}</Title>
      <div>
        {`Current location: ${hit.currentLocation.country}, ${
          hit.currentLocation.city
        }`}
      </div>

      <div>
        {hit.tags.map((tag, id) => (
          <Tag color="#108ee9" key={id}>
            {tag}
          </Tag>
        ))}
      </div>
    </Content>

    <Links>
      {hit.social.slides && (
        <Tooltip title="Slides">
          <Button
            shape="circle"
            icon="file-ppt"
            size="large"
            href={hit.social.slides}
            target="_blank"
            rel="noopener noreferrer"
          />
        </Tooltip>
      )}

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

      {hit.social.website && (
        <Tooltip title="Website">
          <Button
            shape="circle"
            icon="global"
            size="large"
            href={hit.social.website}
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
