import React, { Component } from "react";
import AllJobs from "./AllJobs";

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
    const { data } = this.props;
    const { userInput } = this.state;

    const filteredArray = data.filter(dataFilter => {
      return (
        dataFilter.name.toLowerCase().indexOf(userInput.toLowerCase()) !== -1
      );
    });

    return (
      <div>
        <form action="search">
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Search..."
          />
          {userInput &&
            filteredArray.map(oneData => {
              return <AllJobs data={oneData} />;
            })}
        </form>
      </div>
    );
  }
}

export default Search;
