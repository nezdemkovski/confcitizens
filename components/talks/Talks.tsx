import dayjs from 'dayjs';
import React from 'react';
import styled from 'styled-components';

import { Speaker } from '../../data/speakers';

interface Props {
  data: Speaker['talks'];
  userId: string;
}

const TalksWrapper = styled.div`
  margin-bottom: 20px;
`;

const TalkItemWrapper = styled.div`
  margin-bottom: 50px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TalkItemTitle = styled.h2`
  font-weight: 700;
  font-size: 1.5em;
  color: #4e4e52;
  margin: 0;
`;

const TalkItemDate = styled.h3`
  color: #a7928b;
`;

const Link = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;

const FutureTalk = styled.span`
  color: white;
  background-color: #4393fc;
  border-radius: 4px;
  padding: 5px;
  font-size: 0.5em;
  font-weight: 500;
  margin-left: 10px;
  vertical-align: middle;
`;

const TalkItem = ({
  date,
  eventName,
  title,
  description,
  videoUrl,
  slidesUrl,
  location,
}: Speaker['talks'][0]) => (
  <TalkItemWrapper>
    <TalkItemTitle>
      {title}
      {dayjs().isBefore(dayjs(date)) && <FutureTalk>upcoming talk</FutureTalk>}
    </TalkItemTitle>
    <TalkItemDate>
      <span>{dayjs(date).format('D MMMM YYYY')}</span> at {eventName} (
      {location ? `${location.country}, ${location.city}` : 'Online'})
    </TalkItemDate>
    {description && <p>{description}</p>}
    <span>
      {videoUrl && (
        <Link href={videoUrl} target="_blank" rel="noopener noreferrer">
          Video
        </Link>
      )}
      {videoUrl && slidesUrl && ' • '}
      {slidesUrl && (
        <Link href={slidesUrl} target="_blank" rel="noopener noreferrer">
          Slides
        </Link>
      )}
    </span>
  </TalkItemWrapper>
);

const Talks = ({ data, userId }: Props) =>
  data.length ? (
    <TalksWrapper>
      {data.map((talk, id) => (
        <TalkItem key={`${talk.date}-${id}`} {...talk} />
      ))}
    </TalksWrapper>
  ) : (
    <div>
      <p>⭐ Hey Legend! ⭐ It's in your hands making your profile shine!</p>
      <p>
        Please open this{' '}
        <Link
          href="https://github.com/yakovlevyuri/confcitizens/blob/master/data/speakers.ts"
          target="_blank"
          rel="noopener noreferrer"
        >
          file
        </Link>{' '}
        and edit <b>{userId}</b> info or add the first talk to the list. Make
        everybody happy!
      </p>
    </div>
  );

export default Talks;
