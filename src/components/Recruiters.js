import React, { Component } from "react";
import AllCandidates from "./AllCandidates.js";

class Recruiters extends Component {

  render() {
  
    return (
      <section className="AllCandidatesSection">
      
      <h2>Welcome, recruiters!</h2>

      <AllCandidates />
        
      </section>
    );
  }
}
export default Recruiters;
