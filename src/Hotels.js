import React, { Component } from "react";
import SearchBar from "./SearchBar";

class Hotel extends Component {
  state = {
    hotels: [
      {
        name: "ABC",
        age: 25,
        phone: "54684651"
      },
      {
        name: "BCD",
        age: 26,
        phone: "6546451"
      },
      {
        name: "CDE",
        age: 24,
        phone: "6548654"
      },
      {
        name: "EDG",
        age: 44,
        phone: "684651"
      },
      {
        name: "DSS",
        age: 85,
        phone: "684765"
      }
    ]
  };
  render() {
    return (
      <div>
        <h2>Hotels</h2>
        <SearchBar hotels={this.state.hotels} />
      </div>
    );
  }
}

export default Hotel;
