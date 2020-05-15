import { useState } from 'react';
import { NextPage, GetServerSideProps } from 'next';
import Router from 'next/router';

import Cards from '@components/card/Cards';
import SocialMeta from '@components/social-meta';

import algolia from '@utils/algolia';
import useAlgolia from '@apiHooks/useAlgolia';

import { Speaker } from '@speakers';

const useUrlState = (initial: any) => {
  const [state, setState] = useState(initial);

  return {
    state,
    setState,
  };
};

const Index: NextPage<{ initialData: Speaker[] }> = ({ initialData }) => {
  // const urlState = useUrlState({});
  const { data } = useAlgolia('', { initialData });

  console.log({ data });

  // const changeRoute = (state: any) => {
  //   const href = {
  //     pathname: '/',
  //     query: {
  //       ...(state.query && { search: state.query }),
  //       ...(state.refinementList &&
  //         state.refinementList['currentLocation.continent'] && {
  //           continents: state.refinementList[
  //             'currentLocation.continent'
  //           ].join(),
  //         }),
  //     },
  //   };

  //   Router.push(href, href, { shallow: true });
  // };

  // const onSearchStateChange = (state: any) => {
  //   changeRoute(state);
  //   urlState.setState({ searchState: state });
  // };

  return (
    <>
      <SocialMeta
        image={`https://og-image.confcitizens.com/${encodeURIComponent(
          '**ConfCitizens**<br/>Open-source and crowd-sourced conference speakers website.png?theme=light&md=1',
        )}`}
        title="Confcitizens"
        url="https://confcitizens.com"
        description=""
      />

      <Cards {...data} />
    </>
  );
};

// Index.getInitialProps = async ({ query }) => {
//   const searchState = {
//     ...(query.search && { query: query.search }),
//     ...(query.continents && {
//       refinementList: {
//         'currentLocation.continent': String(query.continents).split(','),
//       },
//     }),
//   };
//   const resultsState = await findResultsState(SpeakersList, { searchState });

//   return { resultsState, searchState };
// };

export const getServerSideProps: GetServerSideProps = async (req) => {
  const query = req.query.phrase ? String(req.query.phrase) : '';
  const initialData = await algolia.search(query);

  return { props: { initialData } };
};

export default Index;
