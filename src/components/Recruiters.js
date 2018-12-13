import React, { Component } from "react";
import { Link } from "react-router-dom";
import AllCandidates from "./AllCandidates.js";

class Recruiters extends Component {

  render() {
  
    return (
      <section className="AllCandidatesSection">
      <h2>Welcome, recruiters!</h2>
      <Link to="/recruiter/allcandidates">View Candidates</Link>

      <AllCandidates />
        
      </section>
    );
  }
}
export default Recruiters;
