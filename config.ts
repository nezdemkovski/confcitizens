const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY || '';
const ALGOLIA_APPLICATION_ID = 'JDMQGRNX7K';
const ALGOLIA_SEARCH_ONLY_API_KEY = '7f88af4a8740a4559e15f509a39ca83d';
const ALGOLIA_INDEX_NAME = 'speakers';
const GA_TRACKING_CODE = 'UA-134274102-1';
const TWITTER_API_KEY = process.env.TWITTER_API_KEY || '';
const TWITTER_API_SECRET_KEY = process.env.TWITTER_API_SECRET_KEY || '';

export const getTwitterBearer = async () => {
  var basicToken = Buffer.from(
    `${TWITTER_API_KEY}:${TWITTER_API_SECRET_KEY}`,
  ).toString('base64');

  const fetchTwitterOauth = await fetch(
    'https://api.twitter.com/oauth2/token',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        Authorization: `Basic ${basicToken}`,
      },
      body: 'grant_type=client_credentials',
    },
  );

  const twitter = await fetchTwitterOauth.json();

  return twitter.access_token;
};

export {
  ALGOLIA_API_KEY,
  ALGOLIA_APPLICATION_ID,
  ALGOLIA_SEARCH_ONLY_API_KEY,
  ALGOLIA_INDEX_NAME,
  GA_TRACKING_CODE,
};

// const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY || '';
// const ALGOLIA_APPLICATION_ID =
//   process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID || '';
// const ALGOLIA_SEARCH_ONLY_API_KEY =
//   process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY || '';
// const ALGOLIA_INDEX_NAME = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || '';
// const GA_TRACKING_CODE = process.env.GA_TRACKING_CODE || '';
// const TWITTER_BEARER = process.env.TWITTER_BEARER || '';

// export {
//   ALGOLIA_API_KEY,
//   ALGOLIA_APPLICATION_ID,
//   ALGOLIA_SEARCH_ONLY_API_KEY,
//   ALGOLIA_INDEX_NAME,
//   GA_TRACKING_CODE,
//   TWITTER_BEARER,
// };
