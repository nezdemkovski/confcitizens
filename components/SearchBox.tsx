import { Input } from "antd";
import { connectSearchBox } from "react-instantsearch-dom";
import styled from "styled-components";

const StyledInput = styled(Input.Search)`
  margin-bottom: 20px;
`;

const SearchBox = connectSearchBox(({ refine, currentRefinement }) => (
  <StyledInput
    placeholder="Search speakers by their name, tags and social networks"
    onChange={e => refine(e.currentTarget.value)}
    size="large"
    value={currentRefinement}
  />
));

export default SearchBox;
