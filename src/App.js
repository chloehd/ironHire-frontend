import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import HomePage from "./components/HomePage";
import Associations from "./components/Associations";
import Candidates from "./components/Candidates";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AddJob from "./components/AddJob";
import axios from "axios";

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
            <NavLink to="/signup">Signup</NavLink>
            <NavLink to="/login">Login</NavLink>
          </nav>
        </header>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/associations" component={Associations} />
          <Route path="/candidates" component={Candidates} />
          <Route path="/recruiters" component={Recruiters} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/addjob" component={AddJob} />
          <Route component={NotFound} />
        </Switch>

        <footer>Fait avec 🌈 par Chloé et Hélèn</footer>
      </div>
    );
  }
}

export default App;
