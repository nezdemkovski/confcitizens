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
        <meta name="description" content="" />
        <meta property="og:title" content={`${data.fullName} | ConfCitizens`} />
        <meta
          property="og:url"
          content={`https://confcitizens.com/${data.objectID}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:description"
          content={`Hi, I'm ${
            data.fullName
          } and I'm an expert in ${data.tags.join(', ')}`}
        />
        <meta
          property="og:image"
          content={generateOgImage({
            baseUrl: 'https://og-image.confcitizens.com',
            speaker: data,
            theme: 'light',
          })}
        />
        <meta property="og:site_name" content="ConfCitizens" />
        <meta property="og:type" content="website" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Profile data={data} />
    </Fragment>
  );
};

ProfilePage.getInitialProps = async ({
  query,
}: {
  query: {
    speaker: string;
  };
}) => {
  try {
    const data = await algolia.getObject(query.speaker);

    return { data };
  } catch (error) {
    // TODO: return error 404 page
    return { data: null };
  }
};

export default ProfilePage;
