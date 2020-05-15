import { FC } from 'react';

import { Speaker } from '@speakers';

interface Props {
  tagList: Speaker['tags'];
}

const Tags: FC<Props> = ({ tagList }) => (
  <div className="flex space-x-2">
    {tagList.map((tag, id) => (
      <div
        className="px-1 py-1 text-sm whitespace-no-wrap	border-solid border rounded border-gray-300 cursor-pointer"
        key={`${id}-${tag}`}
      >
        {tag}
      </div>
    ))}
  </div>
);

export default Tags;
