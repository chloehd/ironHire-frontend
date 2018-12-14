import React, { Component } from "react";
import AllCandidates from "./AllCandidates.js";
import Login from "./Login.js";

class Recruiters extends Component {

  render() {

    return (
      <section className="AllCandidatesSection">

        {!this.props.currentUser &&
        <div>
          <p>Dear Recruiters, you are looking for employees and
            you are sure that integrating people that are in difficulties is a good thing, 
            you are in the right place. You can add job offers here and see candidate profiles.
            Sign up to experiment the website.
          </p>
          <Login onUserChange={userDoc => this.props.onUserChange(userDoc)} />
          </div>
        }
        {this.props.currentUser &&
          <div>
            <h2>Welcome, recruiters!</h2>
            <AllCandidates allCandidatesArray={this.state.allCandidatesArray} />
          </div>}
      </section>
      );
    }
  }
  export default Recruiters;
