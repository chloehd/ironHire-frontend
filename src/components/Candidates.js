import React, { Component } from 'react';
import axios from "axios";

class Candidates extends Component {


  render() {
    return (
      <section className="candidates">
      <h1>Welcome, candidates!</h1>



      
      <ul>
        <li>View Jobs</li>
        <li>Add a Job</li>
      </ul>


      </section>
    )
  }
}

export default Candidates;