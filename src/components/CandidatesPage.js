import React, { Component } from 'react';
import AllJobs from "./AllJobs.js";
import axios from "axios";
import { Switch, Route, NavLink } from "react-router-dom";
import Login from "./Login.js";




class CandidatesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",

    }
  }

  syncCurrentUser(userDoc) {
    this.setState({ currentUser: userDoc });
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

    const { currentUser } = this.state;
    const additionalNav = () => (
      <nav>
        <a href="/candidate">ALL JOBS</a>
        <a href="/candidate/add-cv">ADD RESUME</a>
        <a className="linkHome" href="/logout" onClick={() => this.logoutClick()}>LOGOUT</a>
      </nav>
    )
    return (
      <section className="candidates">
        <header>

          {currentUser ? (
            <div>
              <Switch>
                <Route path='/candidate' component={additionalNav} />
              </Switch>
            </div>
          ) :
            <nav>
              <NavLink className="linkHome" exact to="/">INTÉGRATION</NavLink>
              <NavLink className="linkHome" to="/candidate">CANDIDATES</NavLink>
              <NavLink className="linkHome" to="/recruiter">RECRUITERS</NavLink>
              <NavLink className="linkHome" to="/association">ASSOCIATIONS</NavLink>

            </nav>}


        </header>

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
          <div className="candidatesJobs">
            <h1>Welcome</h1>
            <AllJobs />
          </div>
        }

      </section>
    )
  }
}

export default CandidatesPage;