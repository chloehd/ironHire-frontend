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
      <div className="candidatesJobs">

      <h1>Welcome, {this.state.first_name}</h1>
      <AllJobs />
      </div>

      
      <nav className="addcvlink">Add a CV</nav>
      
  
      </section>
    )
  }
}

export default CandidatesPage;