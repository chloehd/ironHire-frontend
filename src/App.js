import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import axios from "axios";

import HomePage from "./components/HomePage.js";
import Associations from "./components/Associations.js";
import NotFound from "./components/NotFound.js";
import Recruiters from "./components/Recruiters.js";
import Login from "./components/Login.js";
import AssoSignup from "./components/AssociationsSignup.js";
import RecruitSignup from "./components/RecruitSignup.js";
import CandidateSignup from "./components/CandidatesSignup.js";
import AddJob from "./components/AddJob.js";
import AddCv from "./components/AddCv.js";
import AddAssoProfile from "./components/AddAssoProfile.js";
import NewsPage from "./components/NewsPage.js";
import OneCandidate from "./components/OneCandidate.js";
import AllCandidates from "./components/AllCandidates.js";
import AllAssociations from "./components/AllAssociations.js";
import OneAsso from "./components/OneAssociation.js";
import AllJobs from "./components/AllJobs.js";

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
      process.env.REACT_APP_SERVER_URL + "/api/checkuser",
      { withCredentials: true }
    )
      .then(response => {
        console.log("Check User", response.data);
        const { userDoc } = response.data;
          this.syncCurrentUser(userDoc);
      })
      .catch(err => {
        console.log("Check User ERROR", err);
      });
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
    const {currentUser} = this.state;
    return (
      <div className="App">
        <header>
          <h1>Iron Hire</h1>
            {currentUser ? (
              <button onClick={() => this.logoutClick()} >LogOut</button>
            ) : 
          <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/recruiter">Recruiter</NavLink>
            <NavLink to="/asso/news">Associations</NavLink>
            <NavLink to="/candidate">Candidates</NavLink>

          </nav>}
        </header>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/recruiter/allcandidates" component={AllCandidates} />
          <Route path="/candidate/:nameofthecandidate" component={OneCandidate} />
          <Route path="/add-cv" component={AddCv} />
          <Route path="/asso/news" component={Associations} />
          <Route path="/asso/all" component={AllAssociations} />
          <Route path="/asso/all/:id" component={OneAsso} />
          <Route path="/asso/change-profile" component={AddAssoProfile} />
          <Route path="/recruiter" component={Recruiters} />
          <Route path="/all-jobs" component={AllJobs} />
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
          <Route path="/news" component={NewsPage} />
          <Route component={NotFound} />
        </Switch>

        <footer>Nous contacter</footer>
      </div>
    );
  }
}

export default App;
