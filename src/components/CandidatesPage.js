import React, { Component } from 'react';
import AllJobs from "./AllJobs.js";

class CandidatesPage extends Component {

  render() {
    return (
      <section className="candidates">

      <h1>Welcome, candidates!</h1>
      <AllJobs />
      <ul>
        <li> Add a CV </li>
      </ul>

      </section>
    )
  }
}

export default CandidatesPage;