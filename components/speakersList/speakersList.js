import { RefinementList, Configure } from "react-instantsearch-dom";
import styled from "styled-components";
// import debounce from "lodash.debounce";

import { InstantSearch } from "../instantSearch";
import SearchBox from "../SearchBox";
import Cards from "../card/Cards";

const Wrapper = styled.div`
  display: grid;
  /* justify-content: center; */
  grid-gap: 10px;
  padding: 50px 10px;

  @media (min-width: 992px) {
    padding: 50px 100px;
  }

  @media (min-width: 1200px) {
    padding: 50px 300px;
  }
`;

const ALGOLIA_APPLICATION_ID = process.env.ALGOLIA_APPLICATION_ID;
const ALGOLIA_SEARCH_ONLY_API_KEY = process.env.ALGOLIA_SEARCH_ONLY_API_KEY;
const ALGOLIA_INDEX_NAME = process.env.ALGOLIA_INDEX_NAME;

const SpeakersList = ({ resultsState }) => {
  return (
    <InstantSearch
      appId={ALGOLIA_APPLICATION_ID}
      apiKey={ALGOLIA_SEARCH_ONLY_API_KEY}
      indexName={ALGOLIA_INDEX_NAME}
      resultsState={resultsState}
      //   onSearchStateChange={() => onSearchStateChange(searchState)}
      //   searchState={searchState}
    >
      <Configure hitsPerPage={20} />
      <RefinementList attributeName="category" />
      <Wrapper>
        <SearchBox />
        <Cards />
      </Wrapper>
    </InstantSearch>
  );
};

export default SpeakersList;
