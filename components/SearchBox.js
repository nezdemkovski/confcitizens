import { connectSearchBox } from "react-instantsearch-dom";
import { Input } from "antd";

const SearchBox = connectSearchBox(({ refine }) => (
  <Input.Search
    placeholder="Find a speaker"
    onChange={e => refine(e.currentTarget.value)}
    size="large"
  />
));

export default SearchBox;
