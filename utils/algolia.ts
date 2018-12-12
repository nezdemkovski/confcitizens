import algoliasearch from 'algoliasearch';

import {
  ALGOLIA_APPLICATION_ID,
  ALGOLIA_INDEX_NAME,
  ALGOLIA_SEARCH_ONLY_API_KEY,
} from '../config';

const client = algoliasearch(
  ALGOLIA_APPLICATION_ID,
  ALGOLIA_SEARCH_ONLY_API_KEY,
);
const algolia = client.initIndex(ALGOLIA_INDEX_NAME);

export default algolia;
