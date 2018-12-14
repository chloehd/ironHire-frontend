import React, { Component } from "react";
import AllCandidates from "./AllCandidates.js";
import Login from "./Login.js";

class Recruiters extends Component {

  render() {

    return (
      <section className="AllCandidatesSection">

        {!this.props.currentUser &&
          <Login onUserChange={userDoc => this.props.onUserChange(userDoc)} />
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
