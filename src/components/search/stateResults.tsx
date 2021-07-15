import React from "react";
import { connectStateResults } from "react-instantsearch-dom";

const StateResults = connectStateResults(({ searchState, children }) => {
  if (searchState?.query) {
    return children as React.ReactElement;
  }
  return <div>Syötä hakusana</div>;
});

export default StateResults;
