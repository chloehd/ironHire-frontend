import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AllJobs from "./AllJobs.js";

// THIS PAGE NEEDS TO BE IMPORTED IN APP JS ONCE CHLOE CHOSES A NAME

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