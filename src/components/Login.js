import React, { Component } from 'react';
import axios from "axios";
import { Redirect } from "react-router-dom";


class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      originalPassword: "",
    }
  }

  genericSync(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    axios.post(
      process.env.REACT_APP_SERVER_URL + "/api/login",
      this.state,
      { withCredentials: true }
      )
      .then(response => {
          console.log("Login Page", response.data);
          const { userDoc } = response.data;
          this.props.onUserChange(userDoc);
        })
      .catch(err => {
        console.log("Login Page ERROR.", err);
        alert("Sorry! Something went wrong. Login35");
      });
  }

  getPhoneUrl(role) {
    return `/${role}s`;
  }

  render() {
    if(this.props.currentUser) {
      return <Redirect to={this.getPhoneUrl(this.props.currentUser.role)} /> 
    } 

    return (
      <section className="Login">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>
            Email:
            <input value={this.state.email}
                onChange={event => this.genericSync(event)}
                type="email" name="email" placeholder="john@email.com" />
          </label>

          <label>
            Password:
            <input value={this.state.originalPassword}
                onChange={event => this.genericSync(event)}
                type="password" name="originalPassword" placeholder="****" />
          </label>

          <button>Log In!</button>
        </form>
      </section>
    );
  }
}

export default Login;
