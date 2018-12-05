import { Checkbox, Col, Row } from 'antd';
import { connectRefinementList } from 'react-instantsearch-dom';
import styled from 'styled-components';

const StyledRow = styled(Row)`
  margin-bottom: 20px;
`;

const RefinementList = connectRefinementList(({ items, refine }) => {
  return (
    <StyledRow>
      {items.map(item => (
        <Col span={4} key={item.label.toLowerCase()}>
          <Checkbox
            onChange={() => refine(item.value)}
            checked={item.isRefined}
          >
            {item.label} ({item.count})
          </Checkbox>
        </Col>
      ))}
    </StyledRow>
  );
});

export default RefinementList;
