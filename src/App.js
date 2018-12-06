import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
// import axios from "axios";

import HomePage from "./components/HomePage.js";
import Associations from "./components/Associations.js";
import NotFound from "./components/NotFound.js";
import Recruiters from "./components/Recruiters.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import AddJob from "./components/AddJob.js";
import Candidates from "./components/Candidates.js";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="ironhireapp">
        <header>
          <h1>Iron Hire</h1>
          <nav>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/recruiter">Recruiter</NavLink>
            <NavLink to="/associations">Associations</NavLink>
            <NavLink to="/candidates">Candidates</NavLink>
          </nav>
        </header>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/associations" component={Associations} />
          <Route path="/recruiters" component={Recruiters} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/addjob" component={AddJob} />
          <Route path="/candidates" component={Candidates} />
          <Route component={NotFound} />
        </Switch>

        <footer>Fait avec 🌈 par Chloé et Hélène</footer>
      </div>
    );
  }
}

export default App;
