import styled from "styled-components";

import SpeakersList from "../components/speakersList/speakersList";
import { findResultsState } from "../components/instantSearch";

export default class extends React.Component {
  static async getInitialProps(params) {
    // const searchState = { "/": params.query.query };
    const resultsState = await findResultsState(SpeakersList, searchState);
    return { resultsState };
  }

  render() {
    return (
      <SpeakersList
        resultsState={this.props.resultsState}
        // searchState={this.props.searchState}
      />
    );
  }
}
