import React from "react";
import Router from "next/router";
import qs from "qs";
import styled from "styled-components";

const Logo = styled.h1`
  text-align: center;
  margin: 50px 0;
  font-weight: 700;
  font-family: "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
`;

import SpeakersList from "../components/speakersList/speakersList";
import { findResultsState } from "../components/instantSearch";

const searchStateToUrl = searchState =>
  searchState ? `${window.location.pathname}?${qs.stringify(searchState)}` : "";

export default class extends React.Component {
  static async getInitialProps(params) {
    const searchState = qs.parse(
      params.asPath.substring(params.asPath.indexOf("?") + 1)
    );
    const resultsState = await findResultsState(SpeakersList, { searchState });

    return { resultsState, searchState };
  }

  onSearchStateChange = searchState => {
    clearTimeout(this.debouncedSetState);
    this.debouncedSetState = setTimeout(() => {
      const href = searchStateToUrl(searchState);

      console.log({ href });
      Router.push(href, href, {
        shallow: true
      });
    }, 500);
    this.setState({ searchState });
  };

  componentDidMount() {
    this.setState({ searchState: qs.parse(window.location.search.slice(1)) });
  }

  componentWillReceiveProps() {
    this.setState({ searchState: qs.parse(window.location.search.slice(1)) });
  }

  render() {
    return (
      <React.Fragment>
        <Logo>Let's speak about IT!</Logo>

        <SpeakersList
          resultsState={this.props.resultsState}
          onSearchStateChange={this.onSearchStateChange}
          searchState={
            this.state && this.state.searchState
              ? this.state.searchState
              : this.props.searchState
          }
        />
      </React.Fragment>
    );
  }
}
