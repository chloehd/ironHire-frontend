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
      candidateArray: []
    };
  }

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_SERVER_URL + "/api/recruiter", {
        withCredentials: true
      })
      .then(response => {
        this.setState({ candidateArray: response.data });
      })
      .catch(err => {
        console.log("candidates ERROR 🦄", err);
        alert("Sorry! Candidate data not loading");
      });
  }

  render() {
    const { candidateArray } = this.state;
    const candidateHTML = candidateArray.map(oneCandidate => {
      return (
        <div className="AllCandidatesDiv" key={oneCandidate._id}>
          <div className="candidatesInfo">

            <div>
              <Link to={getCandidateUrl(oneCandidate)}>
                <img src={oneCandidate.candidate_pic} alt="" />
              </Link>
            </div>

            <h5>
              {oneCandidate.first_name} {oneCandidate.last_name}
            </h5>
            <p>{oneCandidate.email}</p>
            <p>{oneCandidate.employment_status}</p>
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
