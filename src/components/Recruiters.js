import React, { Component } from "react";
import { Link } from "react-router-dom";

class Recruiters extends Component {

  render() {
  
    return (
      <section className="AllCandidatesSection">
      <h2>Welcome, recruiters!</h2>
      <Link to="/recruiter/allcandidates">View Candidates</Link>
        
      </section>
    );
  }
}
export default Recruiters;
