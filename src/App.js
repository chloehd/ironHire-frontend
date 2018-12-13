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
import OneAsso from "./components/OneAssociation.js";
import AllCandidates from "./components/AllCandidates.js";
import AllAssociations from "./components/AllAssociations.js";
import AllJobs from "./components/AllJobs.js";
import CandidatesPage from "./components/CandidatesPage.js"

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
    const additionalNav = () => (<nav>
      <a className="linkHome" href="/association/all">ALL ASSOCIATIONS</a>
      <a className="linkHome" href="/association/change-profile">YOUR PROFILE</a>
    </nav>)

    return (
      <div className="App">
        <header>

          <Switch>
            <Route path='/association' component={additionalNav} />
          </Switch>

            {currentUser ? (
              <button className="logoutButton" onClick={() => this.logoutClick()} >Log Out</button>
            ) : 
          <nav>
            <NavLink className="linkHome" exact to="/">IRONHIRE</NavLink>
            <NavLink className="linkHome" to="/candidatespage">CANDIDATES</NavLink>
            <NavLink className="linkHome" to="/recruiter">RECRUITERS</NavLink>
            <NavLink className="linkHome" to="/association">ASSOCIATIONS</NavLink>

          </nav>}


        </header>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/candidatespage" component={CandidatesPage} />
          <Route path="/recruiter/allcandidates" component={AllCandidates} />
          <Route path="/candidate/:nameofthecandidate" component={OneCandidate} />
          <Route path="/add-cv" component={AddCv} />
          <Route exact path="/association/all" component={AllAssociations} />
          <Route path="/association/all/:id" component={OneAsso} />
          <Route path="/association/change-profile" render={() =>
            <AddAssoProfile currentUser={this.state.currentUser} />
          } />
          <Route path="/association" component={Associations} />
          <Route path="/recruiter" component={Recruiters} />
          <Route path="/alljobs" component={AllJobs} />
          <Route path="/login" render={() => {
            return <Login currentUser={this.state.currentUser}
              onUserChange={userDoc => this.syncCurrentUser(userDoc)} />
          }} />
          <Route path="/association/signup" render={() => {
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

        <footer>Contact Us</footer>
      </div>
    );
  }
}

export default App;
