import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function getCandidateUrl(oneCandidate) {
  return `/recruiter/allcandidates/${oneCandidate._id}`;
}

class AllCandidates extends Component {
  constructor(props) {
    super(props);

    this.state = {
      candidateArray: [],
    };
  }

  componentDidMount() {
    axios.get(
      process.env.REACT_APP_SERVER_URL + "/api/recruiter", 
      { withCredentials: true}
      )
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

        {candidateArray.map(oneCandidate => {
          return (
            <Link to={getCandidateUrl(oneCandidate)}>
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
                  { oneCandidate.education && <li> {oneCandidate.education}</li>}
                </ul>
              </div>

            </div>
            </Link>
          );
        })}
      </section>
    );
  }
}

export default AllCandidates;
