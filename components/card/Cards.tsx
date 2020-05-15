import { Speaker } from '@speakers';
import Card from './Card';

// const Wrapper = styled.div`
//   display: grid;
//   grid-gap: 10px;
// `;

// const ButtonWrapper = styled.div`
//   display: grid;
//   margin-top: 25px;

//   @media (min-width: 992px) {
//     justify-items: center;
//   }
// `;

const Cards = ({ hits, hasMore }: { hits: Speaker[]; hasMore: boolean }) => (
  <>
    {hits.length ? (
      <div className="space-y-6">
        {hits.map((hit) => (
          <Card key={hit.objectID} hit={hit} />
        ))}
      </div>
    ) : (
      <div>No one found :(</div>
    )}
    {/* 
      {hasMore && (
        <div>
          <button
            onClick={() => {
              if (hasMore) {
                refineNext();
              }
            }}
          >
            Load more speakers
          </button>
        </div>
      )} */}
  </>
);

export default Cards;
