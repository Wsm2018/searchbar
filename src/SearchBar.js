import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    hotelSearch: "",
    activitySearch:""
  };

  handleHotelSearch = event => {
    this.setState({ hotelSearch: event.target.value.substr(0, 20) });
  };

  handleActivitySearch = event => {
    this.setState({ activitySearch: event.target.value.substr(0, 20) });
  };

  render() {
    if (this.props.hotels) {
      let filteredArray = this.props.hotels.filter(item => {
        return item.name.toLowerCase().indexOf(this.state.hotelSearch) !== -1;
      });
      return (
        <div>
          <ul>
            {filteredArray.map(item => (
              <li>{`Name: ${item.name} Age: ${item.age} Phone: ${item.phone}`}</li>
            ))}
          </ul>
          <label>Search:</label>
          <input type="text" onChange={this.handleHotelSearch} name="search" />
        </div>
      );
    } else {
        let filteredArray = this.props.activities.filter(item => {
            return item.name.toLowerCase().indexOf(this.state.activitySearch) !== -1;
          });
          return (
            <div>
              <ul>
                {filteredArray.map(item => (
                  <li>{`Name: ${item.name} Duration: ${item.duration}`}</li>
                ))}
              </ul>
              <label>Search:</label>
              <input type="text" onChange={this.handleActivitySearch} name="search" />
            </div>
          )
    }
  }
}

export default SearchBar;
