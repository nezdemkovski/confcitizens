import Head from 'next/head';
import React, { Fragment } from 'react';

import Profile from '../components/profile/Profile';
import { Speaker } from '../data/speakers';
import algolia from '../utils/algolia';

interface Props {
  data: Speaker;
}

interface OgImageProps {
  baseUrl: string;
  speaker: Speaker;
  theme: 'light' | 'dark';
}

const generateOgImage = ({
  baseUrl,
  speaker: {
    objectID,
    fullName,
    social: { twitter },
    tags,
  },
  theme,
}: OgImageProps): string => {
  const generatedTags = tags.length
    ? tags.map(tag => `tags=${tag}`).join('&')
    : '';
  const urlParams = `**${objectID}**<br/>${fullName}.png?theme=${theme}&md=1&fontSize=75px&images=https://avatars.io/twitter/${twitter}/large&${generatedTags}`;

  return `${baseUrl}/${encodeURIComponent(urlParams)}`;
};

const ProfilePage = ({ data }: Props) => {
  if (!data) {
    return <div>Speaker not found</div>;
  }

  return (
    <Fragment>
      <Head>
        <title>{data.fullName} | ConfCitizens</title>
        <meta
          property="og:image"
          content={generateOgImage({
            baseUrl: 'https://og-image.confcitizens.com',
            speaker: data,
            theme: 'light',
          })}
        />
      </Head>
      <Profile data={data} />
    </Fragment>
  );
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
