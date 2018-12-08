import { Checkbox } from 'antd';
import { connectRefinementList } from 'react-instantsearch-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  padding: 20px 0 40px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(6, 1fr);
  }

  .ant-checkbox-wrapper + .ant-checkbox-wrapper {
    margin: 0;
  }
`;

const RefinementList = connectRefinementList(({ items, refine }) => {
  return (
    <Wrapper>
      {items.map(item => (
        <Checkbox
          onChange={() => refine(item.value)}
          checked={item.isRefined}
          key={item.label.toLowerCase()}
        >
          {item.label} ({item.count})
        </Checkbox>
      ))}
    </Wrapper>
  );
});

export default RefinementList;
