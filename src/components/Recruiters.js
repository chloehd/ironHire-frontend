import React, { Component } from "react";
import axios from "axios";
import AllCandidates from "./AllCandidates.js";
import Login from "./Login.js";

class Recruiters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobsArray: []
    };
  }

  syncCurrentUser(userDoc) {
    this.setState({ currentUser: userDoc });
  }


  updateJobsArray(oneJob) {
    const jobsArrayCopy = [...this.state.jobsArray];
    jobsArrayCopy.unshift(oneJob);
    this.setState({ jobsArray: jobsArrayCopy });
  }



  logoutClick() {
    axios.delete(
      process.env.REACT_APP_SERVER_URL + "/api/logout",
      { withCredentials: true }
    )
      .then(() => {
        this.syncCurrentUser(null);
      })
      .catch(err => {
        console.log("Logout ERROR", err);
      });
  }

  render() {

    return (
      <section className="row">

        {!this.props.currentUser &&
          <div className="row">
            <div className="col m6">
              <p>Dear Recruiters, you are looking for employees and
                you are sure that integrating people that are in difficulties is a good thing,
                you are in the right place. You can add job offers here and see candidate profiles.
                Sign up to experiment the website.
              </p>
            </div>
            <div className="row">
              <Login onUserChange={this.props.onUserChange} />
            </div>
          </div>
        }

        {this.props.currentUser &&
          <section>
            <header className="row">
              <nav>
                <a href="/recruiter">ALL CANDIDATES</a>
                <a href="/recruiter/add-job">ADD A JOB</a>
                <a className="linkHome" href="/logout" onClick={() => this.logoutClick()}>LOGOUT</a>
              </nav>
            </header>

            <div className="row">
              <h2>Welcome, recruiters!</h2>
              <AllCandidates allCandidatesArray={this.state.allCandidatesArray} />
            </div>

          </section>
        }
      </section>
    );
  }
}
export default Recruiters;
