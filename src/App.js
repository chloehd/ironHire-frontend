import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
// import axios from "axios";

import HomePage from "./components/HomePage.js";
import Associations from "./components/Associations.js";
import NotFound from "./components/NotFound.js";
import Recruiters from "./components/Recruiters.js";
import Login from "./components/Login.js";
import AssoSignup from "./components/AssociationsSignup.js";
import RecruitSignup from "./components/RecruitSignup.js";
import CandidateSignup from "./components/CandidatesSignup.js";
import AddJob from "./components/AddJob.js";
import Candidates from "./components/Candidates.js";
import AddCv from "./components/AddCv.js";
import AddAssoProfile from "./components/AddAssoProfile.js";
import axios from "axios";
import NewsPage from "./components/NewsPage.js";

import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    }
  }

  componentDidMount() {

    axios.get(
      "http://localhost:5555/api/checkuser",
      { withCredentials: true }
    )
      .then(response => {
        console.log("Check User", response.data);
        const { userDoc } = response.data;
          this.syncCurrentUser(userDoc);
      })
      .catch(err => {
        console.log("Check User ERROR", err);
        // alert("Sorry! Something went wrong. APP76");
      });
  }


  syncCurrentUser(userDoc) {
    this.setState({ currentUser: userDoc });
  }

  logoutClick() {
    axios.delete(
      "http://localhost:5555/api/logout",
      { withCredentials: true } // force axios to send cookies accross domains
    )
      .then(() => {
        // make currentUser empty again like it was at the start
        this.syncCurrentUser(null);
      })
      .catch(err => {
        console.log("Logout ERROR", err);
        // alert("Sorry! Something went wrong.")
      });
  }

  render() {
    const {currentUser} = this.state;
    return (
      <div className="App">
        <header>
          <h1>Iron Hire</h1>
          <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/recruiters">Recruiter</NavLink>
            <NavLink to="/associations">Associations</NavLink>
            <NavLink to="/candidates">Candidates</NavLink>

            {currentUser && (
              <button onClick={() => this.logoutClick()} >LogOut</button>
            )}
          </nav>
        </header>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/association-profile-change" component={AddAssoProfile} />
          <Route path="/add-cv" component={AddCv} />
          <Route path="/asso/news" component={Associations} />
          <Route path="/recruiters" component={Recruiters} />
          <Route path="/login" render={() => {
            return <Login currentUser={this.state.currentUser}
              onUserChange={userDoc => this.syncCurrentUser(userDoc)} />
          }} />
          <Route path="/asso/signup" render={() => {
            return <AssoSignup currentUser={this.state.currentUser}
              onUserChange={userDoc => this.syncCurrentUser(userDoc)} />
          }} />
          <Route path="/recruiter/signup" render={() => {
            return <RecruitSignup currentUser={this.state.currentUser}
              onUserChange={userDoc => this.syncCurrentUser(userDoc)} />
          }} />
          <Route path="/candidate/signup" render={() => {
            return <CandidateSignup currentUser={this.state.currentUser}
              onUserChange={userDoc => this.syncCurrentUser(userDoc)} />
          }} />
          <Route path="/add-job" component={AddJob} />
          <Route path="/candidates" component={Candidates} />
          <Route path="/news" component={NewsPage} />
          <Route component={NotFound} />
        </Switch>

        <footer>Fait avec  par Chloé et Hélène</footer>
      </div>
    );
  }
}

export default App;
