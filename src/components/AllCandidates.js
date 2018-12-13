import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

// function getCandidateUrl(oneCandidate) {
//   return `/onecandidate/${oneCandidate._id}`;
// }

class AllCandidates extends Component {
  constructor(props) {
    super(props);

    this.state = {
      candidateArray: []
    };
  }

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_SERVER_URL + "/api/recruiter/allcandidates", {
        withCredentials: true
      })
      .then(response => {
        console.log("Candidates", response.data);
        this.setState({ candidateArray: response.data });
      })
      .catch(err => {
        console.log("candidates ERROR 🦄", err);
        alert("Sorry! Candidate data not loading");
      });
  }

  render() {
    const { candidateArray } = this.state;
    return (
      <section className="AllCandidatesSection">
        <h2>Welcome, Recruiter!</h2>

      
          {candidateArray.map(oneCandidate => {
            return (
                <div className="AllCandidatesDiv">
              <ul>
              <li>{oneCandidate.first_name}</li>
              <li>{oneCandidate.last_name}</li>
              {/* <li>{oneCandidate.email}</li>
              <li>{oneCandidate.telephone_number}</li>
              <li>{oneCandidate.employment_status}</li>
              <li>{oneCandidate.skills}</li> */}
              {/* <li>{oneCandidate.experience}</li> */}
              {/* <li>{oneCandidate.languages}</li> */}
              {/* <li>[{oneCandidate.education}]</li> */}
              </ul>
              </div>
            );
    })}
       </section>
  );
 }
}

export default AllCandidates;