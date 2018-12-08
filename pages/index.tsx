import Router from 'next/router';
import React, { useState } from 'react';
// import debounce from "lodash.debounce";

import Logo from '../components/Logo';
import SpeakersList from '../components/SpeakersList';
import { findResultsState } from '../utils/instantSearch';

const useUrlState = initial => {
  const [state, setState] = useState(initial);

  return {
    state,
    setState,
  };
};

const Index = ({ searchState, resultsState }) => {
  const urlState = useUrlState({});

  const changeRoute = state => {
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

    Router.push(href, href, { shallow: true });
  };

  const onSearchStateChange = state => {
    // @ts-ignore
    clearTimeout(debouncedSetState);

    const debouncedSetState = setTimeout(() => {
      changeRoute(state);
    }, 500);

    urlState.setState({ searchState: state });
  };

  return (
    <React.Fragment>
      <Logo>ConfCitizens</Logo>

      <SpeakersList
        resultsState={resultsState}
        onSearchStateChange={onSearchStateChange}
        searchState={
          urlState.state && urlState.state.searchState
            ? urlState.state.searchState
            : searchState
        }
      />
    </React.Fragment>
  );
};

Index.getInitialProps = async ({ query }) => {
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
