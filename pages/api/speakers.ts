import { NextApiRequest, NextApiResponse } from 'next';
import algoliasearch from 'algoliasearch';

import {
  ALGOLIA_API_KEY,
  ALGOLIA_APPLICATION_ID,
  ALGOLIA_INDEX_NAME,
} from '@config';

// POST /api/speakers
const handleGET = async (req: NextApiRequest, res: NextApiResponse) => {
  const client = algoliasearch(ALGOLIA_APPLICATION_ID, ALGOLIA_API_KEY);
  const index = client.initIndex(ALGOLIA_INDEX_NAME);

  const query = req.query.phrase ? String(req.query.phrase) : '';
  const page = req.query.page && Number(req.query.page);
  const hitsPerPage = req.query.hitsPerPage && Number(req.query.hitsPerPage);

  const searchResult = await index.search(query, {
    ...(page && { page }),
    ...(hitsPerPage && { hitsPerPage }),
  });

  res.status(200).json(searchResult);
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      return handleGET(req, res);

    default:
      res.status(405).json({
        error: `The HTTP ${req.method} method is not supported at this route.`,
      });
  }
};
