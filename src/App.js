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
import AllAssociations from "./components/AllAssociations.js";
import AllJobs from "./components/AllJobs.js";
import CandidatesPage from "./components/CandidatesPage.js"

import "./App.css";
import "./materialize.css";


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      role: "",
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
    const { currentUser } = this.state;
    const additionalNav = () => (
    <nav>
      <a className="linkHome" href="/association">HOME</a>
      <a className="linkHome" href="/association/all">ALL ASSOCIATIONS</a>
      <a className="linkHome" href="/association/change-profile">YOUR PROFILE</a>
      <a className="linkHome" href="/logout" onClick={() => this.logoutClick()}>LOGOUT</a>
    </nav>
    )


    return (
      <div className="App">
        <header className="row">

          {currentUser ? (
            <div>
            <Switch>
              <Route path='/association' component={additionalNav} />
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

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/candidate/add-cv" component={AddCv} />
          <Route exact path="/candidate" render={()=> 
            <CandidatesPage currentUser={this.state.currentUser}
            onUserChange={userDoc => this.syncCurrentUser(userDoc)}  />
          } />
          <Route path="/association/signup" render={() => {
            return <AssoSignup currentUser={this.state.currentUser}
            onUserChange={userDoc => this.syncCurrentUser(userDoc)} />
          }} />
          <Route path="/association/all/:id" component={OneAsso} />
          <Route exact path="/association/all" component={AllAssociations} />
          <Route path="/association/change-profile" render={() =>
            <AddAssoProfile currentUser={this.state.currentUser} />
          } />
          <Route path="/association" render={() =>
            <Associations currentUser={this.state.currentUser}
                onUserChange={userDoc => this.syncCurrentUser(userDoc)} />
          } />

          <Route path="/logout" render={() => {
            return <Login currentUser={this.state.currentUser}
            onUserChange={userDoc => this.syncCurrentUser(userDoc)} />
          }} />
          
          <Route path="/recruiter/allcandidates/:id" component={OneCandidate} />

          <Route path="/recruiter/signup" render={() => {
            return <RecruitSignup currentUser={this.state.currentUser}
            onUserChange={userDoc => this.syncCurrentUser(userDoc)} />
          }} />
          <Route path="/candidate/signup" render={() => {
            return <CandidateSignup currentUser={this.state.currentUser}
            onUserChange={userDoc => this.syncCurrentUser(userDoc)} />
          }} />
          <Route path="/recruiter/add-job" component={AddJob} />
          <Route path="/recruiter" render={() =>
            <Recruiters currentUser={this.state.currentUser}
                onUserChange={userDoc => this.syncCurrentUser(userDoc)} />
          }  />
          <Route path="/candidate/alljobs" component={AllJobs} />
          <Route path="/news" component={NewsPage} />
          <Route component={NotFound} />
        </Switch>

        <footer className="footer"></footer>
      </div>
    );
  }
}

export default App;
