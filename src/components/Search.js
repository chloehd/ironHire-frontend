import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      userInput: ""
    };
  }

  handleChange = e => {
    this.setState({ userInput: e.target.value });
  };

  render() {
    return (
      <div>
        <form action="search">
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Search..."
          />
        </form>
      </div>
    );
  }
}

export default Search;
