import Router from 'next/router';
import React, { useState } from 'react';
// import debounce from "lodash.debounce";

import Logo from '../components/Logo';
import { findResultsState } from '../components/instantSearch';
import SpeakersList from '../components/speakersList/speakersList';

const useUrlState = initial => {
  const [state, setState] = useState(initial);

  return {
    state,
    setState,
  };
};

const Index = ({ searchState, resultsState }) => {
  const urlState = useUrlState({});

  const changeRoute = searchState => {
    const href = {
      pathname: '/',
      query: {
        ...(searchState.query && { search: searchState.query }),
        ...(searchState.refinementList &&
          searchState.refinementList['currentLocation.continent'] && {
            continents: searchState.refinementList[
              'currentLocation.continent'
            ].join(),
          }),
      },
    };

    Router.push(href, href, { shallow: true });
  };

  const onSearchStateChange = searchState => {
    clearTimeout(debouncedSetState);

    const debouncedSetState = setTimeout(() => {
      changeRoute(searchState);
    }, 500);

    urlState.setState({ searchState });
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
