import { FC } from 'react';

import { Speaker } from '@speakers';
import Button from '@components/Button';

interface Props {
  data: Speaker;
}

const Social: FC<Props> = ({ data }) => (
  <div className="flex space-x-2">
    {data.social.blog && <Button icon="book" href={data.social.blog} />}

    {data.social.linkedin && (
      <Button icon="linkedin" href={data.social.linkedin} />
    )}

    {data.website && <Button icon="global" href={data.website} />}

    {data.social.twitter && (
      <Button
        icon="twitter"
        href={`https://twitter.com/${data.social.twitter}`}
      />
    )}

    {data.social.github && (
      <Button icon="github" href={`https://github.com/${data.social.github}`} />
    )}
  </div>
);

export default Social;
