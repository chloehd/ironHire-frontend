import React, { Component } from "react";
import { NavLink } from "react-router-dom";
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
        <div className="row">
        <div className="card col s6 offset-s3" key={oneCandidate._id}>
          <div className="card-image waves-effect waves-block waves-light">
            <NavLink to={getCandidateUrl(oneCandidate)}>
                  <img className="activator" src={oneCandidate.candidate_pic} alt="" />
            </NavLink>
          </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">{oneCandidate.first_name} {oneCandidate.last_name}
                <i className="material-icons right">more_vert</i></span>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">{oneCandidate.first_name} {oneCandidate.last_name}<i className="material-icons right">close</i></span>
              <p>{oneCandidate.email}</p>
              <p>{oneCandidate.employment_status}</p>
            </div>
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
