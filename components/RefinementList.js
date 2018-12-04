import { Checkbox, Row, Col } from "antd";
import { connectRefinementList } from "react-instantsearch-dom";
import styled from "styled-components";

const StyledRow = styled(Row)`
  margin-bottom: 20px;
`;

const RefinementList = connectRefinementList(
  ({ items, refine, currentRefinement }) => {
    return (
      <StyledRow>
        {items.map(item => (
          <Col span={4} key={item.label.toLowerCase()}>
            <Checkbox
              onChange={() => refine(item.value)}
              key={item.label.toLowerCase()}
              checked={item.isRefined}
            >
              {item.label} ({item.count})
            </Checkbox>
          </Col>
        ))}
      </StyledRow>
    );
  }
);

export default RefinementList;
