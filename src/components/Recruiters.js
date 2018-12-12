import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Recruiters extends Component {


  render() {
    return (
      <section className="recruiters">
      <h1>Welcome, recruiter!</h1>
      
      <ul>

        <li>
          <Link to="/recruiter/allcandidates">View Candidates</Link> 
          </li>

        <li>
        <Link to="/add-job">Add a Job</Link> 
        </li>

      </ul>

      </section>
    )
  }
}

export default Recruiters;