import pluralize from 'pluralize';
import React, { Fragment } from 'react';
import styled from 'styled-components';

import { Speaker } from '../../data/speakers';
import Social from '../social/Social';
import Tags from '../tags/Tags';
import Talks from '../talks/Talks';

interface Props {
  data: Speaker;
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 50px;
  justify-items: center;

  @media (min-width: 768px) {
    grid-template-columns: auto 1fr auto;
    justify-items: stretch;
  }
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  margin-bottom: 25px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const ProfileInfo = styled.div`
  padding: 10px 20px;
  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: 0;
    text-align: left;
  }
`;

const Username = styled.h2`
  font-weight: 700;
  font-size: 1.5em;
  color: #4e4e52;
  margin: 0;
`;

const Fullname = styled.h3`
  color: #a7928b;
`;

const TalkCount = styled.h4`
  color: #a7928b;
  font-size: 1.17em;

  & span {
    font-weight: 700;
    font-size: 1.5em;
    color: #4e4e52;
  }
`;

const SocialLinks = styled.div`
  padding: 10px 0;
`;

const Profile = ({ data }: Props) => {
  return (
    <Fragment>
      <Wrapper>
        <ProfilePicture
          src={`https://avatars.io/twitter/${data.social.twitter}/large`}
          width={180}
          height={180}
          alt={data.fullName}
        />

        <ProfileInfo>
          <Username>{data.objectID}</Username>
          <Fullname>{data.fullName}</Fullname>

          <Tags data={data.tags} />

          <TalkCount>
            <span>{data.talks.length}</span>{' '}
            {pluralize('Talk', data.talks.length)}
          </TalkCount>
        </ProfileInfo>

        <SocialLinks>
          <Social data={data} />
        </SocialLinks>
      </Wrapper>

      <Talks data={data.talks} />
    </Fragment>
  );
};

export default Profile;
