import { Button } from 'antd';
import React from 'react';
import { connectInfiniteHits } from 'react-instantsearch-dom';
import styled from 'styled-components';

import Card from '../card/Card';

const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
`;

const Cards = connectInfiniteHits(({ hits, hasMore, refine }) => (
  <React.Fragment>
    {hits.length ? (
      <Wrapper>
        {hits.map(hit => (
          <Card key={hit.objectID} hit={hit} />
        ))}
      </Wrapper>
    ) : (
      <div>No one found :(</div>
    )}

    {hasMore && (
      <Button
        type="primary"
        size="large"
        block={true}
        onClick={() => {
          if (hasMore) {
            refine();
          }
        }}
      >
        Load more speakers
      </Button>
    )}
  </React.Fragment>
));

export default Cards;
