import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: ""
    };
  }

  render() {
    return (
      <div>
        <form action="search">
          <input
            type="text"
            onChange={this.props.onChange}
            placeholder="Search..."
          />
        </form>
      </div>
    );
  }
}

export default Search;
