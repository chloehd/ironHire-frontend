import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
// import axios from "axios";

import HomePage from "./components/HomePage.js";
import Associations from "./components/Associations.js";
import NotFound from "./components/NotFound.js";
import Recruiters from "./components/Recruiters.js";
import Login from "./components/Login.js";
import Signup from "./components/AssociationsSignup.js";
import AddJob from "./components/AddJob.js";
import Candidates from "./components/Candidates.js";
import AddCv from "./components/AddCv.js";
import AddAssoProfile from "./components/AddAssoProfile.js";
import axios from "axios";

import "./App.css";


class App extends Component {

  componentDidMount() {

    axios.get(
      "http://localhost:5555/api/checkuser", 
      { withCredentials: true } 
      )
      .then(response => {
        const { userDoc } = response.data;
        this.syncCurrentUser(userDoc);
      })
      .catch(err => {
        alert("Sorry! Something went wrong.");
      });
  }

 
  render() {
    return (
      <div className="App">
        <header>
          <h1>Iron Hire</h1>
          <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/recruiters">Recruiter</NavLink>
            <NavLink to="/associations">Associations</NavLink>
            <NavLink to="/candidates">Candidates</NavLink>
          </nav>
        </header>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/association-profile-change" component={AddAssoProfile} />
          <Route path="/add-cv" component={AddCv} />
          <Route path="/associations" component={Associations} />
          <Route path="/recruiters" component={Recruiters} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/add-job" component={AddJob} />
          <Route path="/candidates" component={Candidates} />
          <Route component={NotFound} />
        </Switch>

       <footer>Fait avec 🌈 par Chloé et Hélène</footer>
      </div>
    );
  }
}

export default App;
