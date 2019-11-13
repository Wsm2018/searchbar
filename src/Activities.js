import React, { Component } from "react";
import SearchBar from "./SearchBar";

class Activities extends Component {
  state = {
    activities: [
      {
        name: "camel ride",
        duration: "1 hour"
      },
      {
        name: "boat tour",
        duration: "1 hour"
      },
      {
        name: "helicopter ride",
        duration: "1 hour"
      },
      {
        name: "gaming store",
        duration: "1 hour"
      }
    ]
  };
  render() {
    return (
      <div>
        <SearchBar activities={this.state.activities} />
      </div>
    );
  }
}

export default Activities;
