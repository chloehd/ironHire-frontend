import React, { Component } from 'react';
import AllJobs from "./AllJobs.js";


class CandidatesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
    }
  }

  render() {
    return (
      <section className="candidates">

      <h1>Welcome, {this.state.first_name}</h1>
      <AllJobs />
      <ul>
        <li> Add a CV </li>
      </ul>

      </section>
    )
  }
}

export default CandidatesPage;