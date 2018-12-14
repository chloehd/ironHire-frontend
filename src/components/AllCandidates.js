import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function getCandidateUrl(oneCandidate) {
  return `/candidate/${oneCandidate._id}`;
}

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
       
        <ul>
          {candidateArray.map(oneCandidate => {
            return (
              <li key={oneCandidate._id}>


              <h3> 
                <Link to={getCandidateUrl(oneCandidate)}>
                {oneCandidate.first_name} {oneCandidate.last_name}
                </Link>
              </h3>
              
              <p>{oneCandidate.email}</p>
              <p>{[oneCandidate.employment_status]}</p>
              <p>{[oneCandidate.languages]}</p>
              <p>{oneCandidate.skills}</p>
               <p>{oneCandidate.experience}</p>
               {
                 oneCandidate.education ? 
                 <p>
                 {oneCandidate.education}</p> : 
                 null 
                }

              </li>

            ) 
              })}
              </ul>
            </section>
          );
        }
      }

export default AllCandidates;
