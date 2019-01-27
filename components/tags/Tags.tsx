import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Speaker } from '../../data/speakers';

interface Props {
  data: Speaker['tags'];
}

const TagWrapper = styled.div`
  margin: 0;
  margin-right: 8px;
  margin-bottom: 10px;
  background: #fff;
  border-style: solid;
  display: inline-block;
  color: rgba(0, 0, 0, 0.65);
  padding: 0;
  line-height: 20px;
  padding: 0 7px;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  font-size: 12px;
  white-space: nowrap;
  /* user-select: none; */
`;

const Tags = ({ data }: Props) => (
  <Fragment>
    {data.map((tag, id) => (
      <TagWrapper key={id}>
        {tag}
        {/* <Link href={{ pathname: '/', query: { search: tag } }}>
          <a>{tag}</a>
        </Link> */}
      </TagWrapper>
    ))}
  </Fragment>
);

export default Tags;
