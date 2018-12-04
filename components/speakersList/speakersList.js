import {
  Configure,
  CurrentRefinements,
  PoweredBy
  // SearchBox
} from "react-instantsearch-dom";
import styled from "styled-components";
// import debounce from "lodash.debounce";
import orderby from "lodash.orderby";

import { InstantSearch } from "../instantSearch";
import SearchBox from "../SearchBox";
import Cards from "../card/Cards";
import RefinementList from "../RefinementList";
import {
  ALGOLIA_APPLICATION_ID,
  ALGOLIA_SEARCH_ONLY_API_KEY,
  ALGOLIA_INDEX_NAME
} from "../../config";

const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  padding: 50px 10px;

  @media (min-width: 992px) {
    padding: 50px 100px;
  }

  @media (min-width: 1200px) {
    padding: 0 300px 100px;
  }
`;

const AlgoliaLogo = styled(PoweredBy)`
  text-align: center;
  margin-bottom: 50px;
`;

const SpeakersList = ({ resultsState, searchState, onSearchStateChange }) => {
  console.log({ searchState });
  return (
    <InstantSearch
      appId={ALGOLIA_APPLICATION_ID}
      apiKey={ALGOLIA_SEARCH_ONLY_API_KEY}
      indexName={ALGOLIA_INDEX_NAME}
      resultsState={resultsState}
      onSearchStateChange={onSearchStateChange}
      searchState={searchState}
    >
      <Configure hitsPerPage={10} />
      <Wrapper>
        <SearchBox />
        <RefinementList
          attribute="currentLocation.continent"
          transformItems={items =>
            orderby(items, ["label", "count"], ["asc", "desc"])
          }
        />
        <Cards />
      </Wrapper>

      <AlgoliaLogo />
    </InstantSearch>
  );
};

export default SpeakersList;
