import { Icon, Timeline } from 'antd';
import dayjs from 'dayjs';
import React from 'react';

import algolia from '../utils/algolia';

{
  /* <React.Fragment>
        <Icon type="check-circle" style={{ color: 'green' }} />{' '}
        <span>{dayjs(date).format('D MMMM YYYY')}</span>
      </React.Fragment> */
}

const TimelineItem = ({
  date,
  eventName,
  title,
  description,
  videoUrl,
  slideUrl,
  location,
}) => (
  <Timeline.Item
    dot={<Icon type="check-circle" style={{ color: 'green', fontSize: 18 }} />}
  >
    <p>
      {dayjs(date).format('D MMMM YYYY')} at {eventName}
    </p>
    <p>{title}</p>
    {description && <p>{description}</p>}
    {videoUrl && <p>{videoUrl}</p>}
    {slideUrl && <p>{slideUrl}</p>}
    <p>
      <Icon type="global" /> {`${location.country}, ${location.city}`}
    </p>
  </Timeline.Item>
);

const Speaker = ({ data }) => {
  if (!data) {
    return <div>Speaker not found</div>;
  }

  return (
    <div>
      <p>{data.fullName}</p>

      <Timeline>
        {data.talks.map((talk, id) => (
          <TimelineItem key={`${talk.date}-${id}`} {...talk} />
        ))}
      </Timeline>
    </div>
  );
};

Speaker.getInitialProps = async ({ query }) => {
  try {
    const data = await algolia.getObject(query.username);

    return { data };
  } catch (error) {
    return { data: null };
  }
};

export default Speaker;
