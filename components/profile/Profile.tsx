import { FC } from 'react';
import pluralize from 'pluralize';

import { generateLocation } from '@utils/helpers';
import Social from '@components/Social';
import Tags from '@components/Tags';
import Talks from '@components/Talks';

import { Speaker } from '@speakers';

interface Props {
  data: Speaker;
}

// const Wrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   margin-bottom: 50px;
//   justify-items: center;

//   @media (min-width: 768px) {
//     grid-template-columns: auto 1fr auto;
//     justify-items: stretch;
//   }
// `;

// const ProfilePicture = styled.img`
//   border-radius: 50%;
//   margin-bottom: 25px;

//   @media (min-width: 768px) {
//     margin-bottom: 0;
//   }
// `;

// const ProfileInfo = styled.div`
//   padding: 10px 20px;
//   text-align: center;

//   @media (min-width: 768px) {
//     margin-bottom: 0;
//     text-align: left;
//   }
// `;

// const Fullname = styled.h3`
//   color: #a7928b;
// `;

// const CurrentLocation = styled.p`
//   color: #a7928b;
// `;

// const TalkCount = styled.h4`
//   color: #a7928b;
//   font-size: 1.17em;

//   & span {
//     font-weight: 700;
//     font-size: 1.5em;
//     color: #4e4e52;
//   }
// `;

// const SocialLinks = styled.div`
//   padding: 10px 0;
// `;

const Profile: FC<Props> = ({ data }) => {
  return (
    <>
      <div>
        <img
          src={data.profileImageUrl}
          width={180}
          height={180}
          alt={data.fullName}
        />

        <div>
          <h2 className="text-2xl font-bold">{data.objectID}</h2>
          <h3>{data.fullName}</h3>

          <p>
            {generateLocation(
              data.currentLocation.city,
              data.currentLocation.country,
            )}
          </p>

          <Tags tagList={data.tags} />

          <h4>
            <span>{data.talks.length}</span>{' '}
            {pluralize('Talk', data.talks.length)}
          </h4>
        </div>
        <div>
          <Social data={data} />
        </div>
      </div>

      <Talks data={data.talks} userId={data.objectID} />
    </>
  );
};

export default Profile;
