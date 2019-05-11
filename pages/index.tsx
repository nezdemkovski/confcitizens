import Head from 'next/head';
import Router from 'next/router';
import React, { useState, Fragment } from 'react';

import SpeakersList from '../components/SpeakersList';
import { findResultsState } from '../utils/instantSearch';

const useUrlState = (initial: any) => {
  const [state, setState] = useState(initial);

  return {
    state,
    setState,
  };
};

const Index = ({ searchState, resultsState }: any) => {
  const urlState = useUrlState({});

  const changeRoute = (state: any) => {
    const href = {
      pathname: '/',
      query: {
        ...(state.query && { search: state.query }),
        ...(state.refinementList &&
          state.refinementList['currentLocation.continent'] && {
            continents: state.refinementList[
              'currentLocation.continent'
            ].join(),
          }),
      },
    };

    // @ts-ignore
    Router.push(href, href, { shallow: true });
  };

  const onSearchStateChange = (state: any) => {
    changeRoute(state);
    urlState.setState({ searchState: state });
  };

  return (
    <Fragment>
      <Head>
        <title>ConfCitizens</title>
        <meta name="description" content="" />
        <meta property="og:title" content="ConfCitizens" />
        <meta property="og:url" content="https://confcitizens.com/" />
        <meta
          property="og:description"
          content="ConfCitizens is a place where all speakers come together!"
        />
        <meta
          property="og:image"
          content={`https://og-image.confcitizens.com/${encodeURIComponent(
            '**ConfCitizens**<br/>A place where all speakers come together!.png?theme=light&md=1',
          )}`}
        />
        <meta property="og:site_name" content="ConfCitizens" />
        <meta property="og:type" content="website" />
      </Head>

      <SpeakersList
        resultsState={resultsState}
        onSearchStateChange={onSearchStateChange}
        searchState={
          urlState.state && urlState.state.searchState
            ? urlState.state.searchState
            : searchState
        }
      />
    </Fragment>
  );
};

Index.getInitialProps = async ({ query }: any) => {
  const searchState = {
    ...(query.search && { query: query.search }),
    ...(query.continents && {
      refinementList: {
        'currentLocation.continent': query.continents.split(','),
      },
    }),
  };
  const resultsState = await findResultsState(SpeakersList, { searchState });

  return { resultsState, searchState };
};

export default Index;
