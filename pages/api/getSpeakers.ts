import { NextApiRequest, NextApiResponse } from 'next';
import algoliasearch from 'algoliasearch';

import {
  ALGOLIA_API_KEY,
  ALGOLIA_APPLICATION_ID,
  ALGOLIA_INDEX_NAME,
} from '@config';
import speakers from '@speakers';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const client = algoliasearch(ALGOLIA_APPLICATION_ID, ALGOLIA_API_KEY);
  const index = client.initIndex(ALGOLIA_INDEX_NAME);

  const query = req.query.phrase ? String(req.query.phrase) : '';

  console.log({ query });

  const searchResult = await index.search(query);

  // console.log({ searchResult });

  res.status(200).json(searchResult);

  // .then(({ hits }) => {
  //   console.log(hits);
  // })
  // .catch((err) => {
  //   console.log(err);
  // });

  // index.partialUpdateObjects(speakers, (err, content) => {
  //   if (err) {
  //     return res.status(500).json(err);
  //   }

  //   res.status(200).json(content);
  // });
};
