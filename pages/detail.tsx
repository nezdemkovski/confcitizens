import React from 'react';

import Profile from '../components/profile/Profile';
import { Speaker } from '../data/speakers';
import algolia from '../utils/algolia';

interface Props {
  data: Speaker;
}

const ProfilePage = ({ data }: Props) => {
  if (!data) {
    return <div>Speaker not found</div>;
  }

  return <Profile data={data} />;
};

ProfilePage.getInitialProps = async ({ query }) => {
  try {
    const data = await algolia.getObject(query.username);

    return { data };
  } catch (error) {
    // TODO: return error 404 page
    return { data: null };
  }
};

export default ProfilePage;
