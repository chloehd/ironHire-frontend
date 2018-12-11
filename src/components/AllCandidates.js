import React, { Component } from 'react';
import axios from "axios"; 
import { Link } from "react-router-dom";

function getCandidateUrl(oneCandidate) {
  return `/one-candidate/${oneCandidate._id}`;
}

class AllCandidates extends Component {
    constructor(props) {
    super(props);

    this.state = { candidateData: []
        };

}

componentDidMount() {

axios.get(
    "http://localhost:5555/api/canadidatedata",
    { withCredentials: true }
)
.then(response => {
    console.log("Candidate Data", response.data);
})

.catch(err => {
    console.log("candidate data ERROR", err);
    alert("Sorry! Candidate data not loading");
});
}


render() {
  const { candidateArray } = this.state;
    return (
      <section className="AllCandidatesSection"> 
      <h2>All Candidates</h2>
      
        <ul>
          {candidateArray.map(oneCandidate => {
          return (
            <div className="AllCandidatesDiv">
              <li key={oneCandidate._id}>
              <h3>
              <Link to={getCandidateUrl(oneCandidate)}>
              {oneCandidate.firstName} {oneCandidate.lastName}
              </Link>
              </h3>
              </li>
              <img src={oneCandidate.candidatePic} />
              <li>{oneCandidate.email}</li>
              <li>{oneCandidate.telephoneNumber}</li>
              <li>{oneCandidate.employmentStatus}</li>
              <li>{oneCandidate.skills}</li>
              <li>{oneCandidate.experience}</li>
              <li>{oneCandidate.languages}</li>
              <li>{oneCandidate.education}</li>

              </div>
              );
              })}
        </ul>
      </section>
    
            );
            }
          }
  export default AllCandidates;