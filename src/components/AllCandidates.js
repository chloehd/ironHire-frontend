import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import axios from "axios";
// import { Link } from "react-router-dom";

function getCandidateUrl(oneCandidate) {
  return `/one-candidate/${oneCandidate._id}`;
}

class AllCandidates extends Component {
  constructor(props) {
    super(props);

    this.state = {
      candidateArray: []
    };

  }

  componentDidMount() {

    axios.get(
      process.env.REACT_APP_SERVER_URL + "/api/candidate/candidatedata",
      { withCredentials: true }
    )
      .then(response => {
        console.log("Candidate Data", response.data);
        this.setState({ candidateArray: response.data })
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
                <li>{oneCandidate.first_name}</li>
                {/*       
              <li >
              <h3>
              <Link to={getCandidateUrl(oneCandidate)}>
              {oneCandidate.firstName} {oneCandidate.last_name}
              </Link>
              </h3>
              </li>
              <img src={oneCandidate.candidatePic} alt="" />
              <li>{oneCandidate.email}</li>
              <li>{oneCandidate.telephoneNumber}</li>
              <li>{oneCandidate.employmentStatus}</li>
              <li>{oneCandidate.skills}</li>
              <li>{oneCandidate.experience}</li>
              <li>{oneCandidate.languages}</li>
              <li>{oneCandidate.education}</li> */}

              </div>
            );
          })}
        </ul>
      </section>

    );
  }
}
export default AllCandidates;