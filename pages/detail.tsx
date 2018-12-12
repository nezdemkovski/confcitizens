import React from 'react';

import algolia from '../utils/algolia';

const Speaker = ({ data }) => {
  if (!data) {
    return <div>Speaker not found</div>;
  }

  return <div>{data.fullName}</div>;
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
