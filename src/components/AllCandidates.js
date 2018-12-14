import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function getCandidateUrl(oneCandidate) {
<<<<<<< HEAD
  return `/candidate/${oneCandidate._id}`;
=======
  return `/recruiter/allcandidates/${oneCandidate._id}`;
>>>>>>> fd8eaa3ab86f16412488dda61fe1299a7d7852e0
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
<<<<<<< HEAD
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
=======

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
>>>>>>> fd8eaa3ab86f16412488dda61fe1299a7d7852e0

export default AllCandidates;
