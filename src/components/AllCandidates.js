import React, { Component } from 'react';
<<<<<<< HEAD
import { Redirect } from "react-router-dom";
import axios from "axios"; 
// import { Link } from "react-router-dom";
=======
import axios from "axios";
import { Link } from "react-router-dom";
>>>>>>> 73e2681ad83d501260476fe53a75e4fa0c9464cb

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

<<<<<<< HEAD
axios.get(
    process.env.REACT_APP_SERVER_URL + "/api/candidate/candidatedata",
    { withCredentials: true }
)
.then(response => {
  console.log("Candidate Data", response.data);
  this.setState({candidateArray: response.data})
})
=======
    axios.get(
      process.env.REACT_APP_SERVER_URL + "/api/candidate/candidatedata",
      { withCredentials: true }
    )
      .then(response => {
        this.setState({ candidateArray: response.data })
        console.log("Candidate Data", response.data);
      })
>>>>>>> 73e2681ad83d501260476fe53a75e4fa0c9464cb

      .catch(err => {
        console.log("candidate data ERROR", err);
        alert("Sorry! Candidate data not loading");
      });
  }




<<<<<<< HEAD
render() {
  const { candidateArray } = this.state;
  
=======
  render() {
    const { candidateArray } = this.state;
>>>>>>> 73e2681ad83d501260476fe53a75e4fa0c9464cb
    return (
      <section className="AllCandidatesSection">
        <h2>All Candidates</h2>

        <ul>
          {candidateArray.map(oneCandidate => {
<<<<<<< HEAD
          return (
            <div className="AllCandidatesDiv">
            <li>{oneCandidate.first_name}</li>
{/*       
              <li >
=======
            return (
              <div className="AllCandidatesDiv">
                <li>{oneCandidate.first_name}</li>
                <li>
                </li>
                {/* <li >
>>>>>>> 73e2681ad83d501260476fe53a75e4fa0c9464cb
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