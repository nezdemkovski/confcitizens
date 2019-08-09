import algoliasearch from 'algoliasearch';
import * as dotenv from 'dotenv';

import { ALGOLIA_APPLICATION_ID, ALGOLIA_INDEX_NAME } from '../config';
import speakers from '../data/speakers';

dotenv.config();

const updateSpeakers = () => {
  const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY || '';

  const client = algoliasearch(ALGOLIA_APPLICATION_ID, ALGOLIA_API_KEY);
  const index = client.initIndex(ALGOLIA_INDEX_NAME);

  index.saveObjects(speakers, err => {
    if (err) {
      throw err;
    }

    /* tslint:disable-next-line:no-console */
    console.log('Data updated successfully');
  });
};

updateSpeakers();
