import { Button } from 'antd';
import React from 'react';
import { connectInfiniteHits } from 'react-instantsearch-dom';

import Card from '../card/Card';

const Cards = connectInfiniteHits(({ hits, hasMore, refine }) => (
  <React.Fragment>
    {hits.length ? (
      hits.map(hit => <Card key={hit.objectID} hit={hit} />)
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
