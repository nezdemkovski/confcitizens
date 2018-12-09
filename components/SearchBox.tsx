import { Input } from 'antd';
import debounce from 'lodash.debounce';
import { useState } from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import styled from 'styled-components';

const StyledInput = styled(Input.Search)`
  padding: 20px 0;
`;

const onChange = (refine, value) => {
  refine(value);
};

const debounced = debounce(onChange, 500);

const SearchBox = ({ refine, currentRefinement }) => {
  const [state, setState] = useState({ value: currentRefinement });

  const onChangeDebounced = event => {
    setState({ value: event.currentTarget.value });
    debounced(refine, event.currentTarget.value);
  };

  return (
    <StyledInput
      placeholder="Search speakers by their name, tags and social networks"
      onChange={onChangeDebounced}
      size="large"
      value={state.value}
    />
  );
};

const DebouncedSearchBox = connectSearchBox(SearchBox);

export default DebouncedSearchBox;
