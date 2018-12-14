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
    console.log(candidateArray);
    const candidateHTML = candidateArray.map(oneCandidate => {
      return (
        <div className="AllCandidatesDiv" key={oneCandidate._id}>
          <div>
            <Link to={getCandidateUrl(oneCandidate)}>
              <img src={oneCandidate.candidate_pic} alt="" />
            </Link>
          </div>

          <div className="candidatesInfo">
            <h5>
              {oneCandidate.first_name} {oneCandidate.last_name}
            </h5>
            {oneCandidate.email}
            {[oneCandidate.employment_status]}
            {[oneCandidate.languages]}
            {oneCandidate.skills}
            {oneCandidate.experience}
            {oneCandidate.education} && {oneCandidate.education}
          </div>

        </div>
      );
    })

    return (
      <section className="AllCandidatesSection">
      {candidateHTML}
      </section>
    );
  }
  }


export default AllCandidates;
