import React, { Component } from 'react';
import AllJobs from "./AllJobs.js";

class CandidatesPage extends Component {

  render() {
    return (
      <section className="candidates">

      <div className="candidatesJobs">
      <AllJobs />
      </div>
      
  
      </section>
    )
  }
}

export default CandidatesPage;