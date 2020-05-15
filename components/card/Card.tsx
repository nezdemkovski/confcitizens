import { FC } from 'react';
import Link from 'next/link';

import Social from '@components/Social';
import Tags from '@components/Tags';

import { Speaker } from '@speakers';
import { generateLocation } from '@utils/helpers';

interface Props {
  hit: Speaker;
}

const Card: FC<Props> = ({ hit }) => {
  return (
    <div className="px-6 py-4 border-solid border rounded border-gray-400 cursor-pointer">
      <Link href="/speaker/[username]" as={`/speaker/${hit.objectID}`}>
        <img
          src={hit.profileImageUrl}
          width={70}
          height={70}
          alt={hit.fullName}
        />
      </Link>

      <Link href="/speaker/[username]" as={`/speaker/${hit.objectID}`}>
        <div>
          <h3 className="text-2xl font-bold">{hit.fullName}</h3>

          <p>
            {generateLocation(
              hit.currentLocation.city,
              hit.currentLocation.country,
            )}
          </p>

          <Tags tagList={hit.tags} />
        </div>
      </Link>

      <Social data={hit} />
    </div>
  );
};

export default Card;
