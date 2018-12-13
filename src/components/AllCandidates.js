import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

function getCandidateUrl(oneCandidate) {
  return `/candidate/all/${oneCandidate._id}`;
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
      process.env.REACT_APP_SERVER_URL + "/api/candidate/all",
      { withCredentials: true },
    )
      .then(response => {
        console.log("All Candidates data", response.data);
        this.setState({candidateArray: response.data})
      })
      .catch(err => {
        console.log("all candidate ERROR", err);
        alert("Sorry! Candidates not loading");
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
              <li key={oneCandidate._id}>
                <h3>
                  <Link to={getCandidateUrl(oneCandidate)}>
                    {oneCandidate.first_name} {oneCandidate.last_name}
                  </Link>
                </h3>

                <img src={oneCandidate.candidate_pic} alt="" />
                <p>Employment status: {oneCandidate.employment_status}</p>
                <p>Skills: {oneCandidate.skills}</p>
              </li>

            );
          })}
        </ul>
      </section>

    );
  }
}

export default AllCandidates;
