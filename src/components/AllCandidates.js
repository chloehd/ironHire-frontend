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
      candidateArray: [],
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
            <div className="AllCandidatesDiv" key={oneCandidate._id}>
              <div>
                <img src={oneCandidate.candidate_pic} alt="" />

              

                <ul>
                  <li><h5>{oneCandidate.first_name} {oneCandidate.last_name}</h5></li>
                  <li>{oneCandidate.email}</li>
                  <li>{[oneCandidate.employment_status]}</li>
                  <li>{[oneCandidate.languages]}</li>
                  <li>{oneCandidate.skills}</li>
                  <li>{oneCandidate.experience}</li>
                  {
                    oneCandidate.education ?
                      <li> {oneCandidate.education}</li> :
                      null
                  }
                </ul>
              </div>

            </div>
          );
        })}
      </section>
    );
  }
}

export default AllCandidates;
