import { FC } from 'react';
import dayjs from 'dayjs';

import { Speaker } from '@speakers';

interface Props {
  data: Speaker['talks'];
  userId: string;
}

// const TalksWrapper = styled.div`
//   margin-bottom: 20px;
// `;

// const TalkItemWrapper = styled.div`
//   margin-bottom: 50px;

//   &:last-child {
//     margin-bottom: 0;
//   }
// `;

// const TalkItemDate = styled.h3`
//   color: #a7928b;
// `;

// const Link = styled.a`
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const FutureTalk = styled.span`
//   color: white;
//   background-color: #4393fc;
//   border-radius: 4px;
//   padding: 5px;
//   font-size: 0.5em;
//   font-weight: 500;
//   margin-left: 10px;
//   vertical-align: middle;
// `;

const TalkItem: FC<Speaker['talks'][0]> = ({
  date,
  eventName,
  title,
  description,
  videoUrl,
  slidesUrl,
  location,
}) => (
  <div>
    <h2 className="text-2xl font-bold">
      {title}
      {dayjs().isBefore(dayjs(date)) && <span>upcoming talk</span>}
    </h2>
    <h3>
      <span>{dayjs(date).format('D MMMM YYYY')}</span> at {eventName} (
      {location ? `${location.country}, ${location.city}` : 'Online'})
    </h3>
    {description && <p>{description}</p>}
    <span>
      {videoUrl && (
        <a href={videoUrl} target="_blank" rel="noopener noreferrer">
          Video
        </a>
      )}
      {videoUrl && slidesUrl && ' • '}
      {slidesUrl && (
        <a href={slidesUrl} target="_blank" rel="noopener noreferrer">
          Slides
        </a>
      )}
    </span>
  </div>
);

const Talks = ({ data, userId }: Props) =>
  data.length ? (
    <div>
      {data.map((talk, id) => (
        <TalkItem key={`${talk.date}-${id}`} {...talk} />
      ))}
    </div>
  ) : (
    <div>
      <p>⭐ Hey Legend! ⭐ It's in your hands making your profile shine!</p>
      <p>
        Please open this{' '}
        <a
          href="https://github.com/yakovlevyuri/confcitizens/blob/master/data/speakers.ts"
          target="_blank"
          rel="noopener noreferrer"
        >
          file
        </a>{' '}
        and edit <b>{userId}</b> info or add the first talk to the list. Make
        everybody happy!
      </p>
    </div>
  );

export default Talks;
