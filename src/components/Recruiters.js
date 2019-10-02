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
    axios
      .delete(process.env.REACT_APP_SERVER_URL + "/api/logout", {
        withCredentials: true
      })
      .then(() => {
        this.syncCurrentUser(null);
      })
      .catch(err => {
        console.log("Logout ERROR", err);
      });
  }

  render() {
    return (
      <section className="recruiters">
        {!this.props.currentUser && (
          <div className="div-recruiters">
            <div className="container row">
              <div className="text">
                <p>
                  Dear Recruiters, you are looking for employees and you are
                  sure that integrating people that are in difficulties is a
                  good thing, you are in the right place. You can add job offers
                  here and see candidate profiles. Sign up to experiment the
                  website.
                </p>
              </div>
              <div className="image">
                <img
                  src="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  alt="Man with a briefcase"
                />
              </div>
            </div>
            <Login onUserChange={this.props.onUserChange} />
          </div>
        )}

        {this.props.currentUser && (
          <section className="recruiters1">
            <div className="container row">
              <h2>Welcome, {this.props.currentUser.companyName}!</h2>
              <AllCandidates
                allCandidatesArray={this.state.allCandidatesArray}
              />
            </div>

            <header className="fixNavBar">
              <nav>
                <a href="/recruiter">ALL CANDIDATES</a>
                <a href="/recruiter/add-job">ADD A JOB</a>
                <a
                  className="linkHome"
                  href="/logout"
                  onClick={() => this.logoutClick()}
                >
                  LOGOUT
                </a>
              </nav>
            </header>
          </section>
        )}
      </section>
    );
  }
}
export default Recruiters;
