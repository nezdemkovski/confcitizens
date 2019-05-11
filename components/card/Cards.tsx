import { Button } from 'antd';
import React from 'react';
import { connectInfiniteHits } from 'react-instantsearch-dom';
import styled from 'styled-components';

import { Speaker } from '../../data/speakers';
import Card from '../card/Card';

const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
`;

const ButtonWrapper = styled.div`
  display: grid;
  margin-top: 25px;

  @media (min-width: 992px) {
    justify-items: center;
  }
`;

const Cards = connectInfiniteHits(
  ({
    hits,
    hasMore,
    refine,
  }: {
    hits: Speaker[];
    hasMore: boolean;
    refine: any;
  }) => (
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
        <ButtonWrapper>
          <Button
            type="primary"
            size="large"
            onClick={() => {
              if (hasMore) {
                refine();
              }
            }}
          >
            Load more speakers
          </Button>
        </ButtonWrapper>
      )}
    </React.Fragment>
  ),
);

export default Cards;
