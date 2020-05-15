import { NextApiRequest, NextApiResponse } from 'next';
import algoliasearch from 'algoliasearch';

import speakers from '@speakers';
import {
  ALGOLIA_APPLICATION_ID,
  ALGOLIA_API_KEY,
  ALGOLIA_INDEX_NAME,
} from '@config';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const client = algoliasearch(ALGOLIA_APPLICATION_ID, ALGOLIA_API_KEY);
      const index = client.initIndex(ALGOLIA_INDEX_NAME);

      const getSpeakerList = speakers.map(async (speaker) => {
        const getTwitter = await fetch(
          `http://localhost:3000/api/twitter?username=${speaker.social.twitter}`,
        );
        const twitterProfile = await getTwitter.json();

        return {
          ...speaker,
          profileImageUrl: twitterProfile.profileImageUrlHttps.large,
        };
      });

      const speakerList = await Promise.all(getSpeakerList);
      const data = await index.partialUpdateObjects(speakerList);

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(500).json({ error: 'GET request is not supported.' });
  }
};
