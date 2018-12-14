import React, { Component } from "react";
import axios from "axios";
import AllCandidates from "./AllCandidates.js";
import Login from "./Login.js";

class Recruiters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCandidatesArray: []
    };
  }

  componentWillMount() {
    if (this.props.currentUser) {
      this.getCandidates();
    }
  }

  componentDidUpdate(oldProps) {
    if (!oldProps.currentUser && this.props.currentUser) {
      this.getCandidates();
    }
  }

  getCandidates() {
    axios.get(process.env.REACT_APP_SERVER_URL + "/api/recruiter")
      .then(response => {
        console.log("Get Candidates", response.data);
        this.setState({ allCandidatesArray: response.data })
      })
      .catch(err => {
        console.log("Get Candidates ERROR", err);
        alert("Sorry! Something went wrong. ADDASSOProfile34");
      });
  }

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
          <Login onUserChange={this.props.onUserChange} />
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
