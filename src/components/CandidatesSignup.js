import React, { Component } from 'react';
import axios from "axios";

class Signup extends Component {
    constructor(props) {
      super(props);

      this.state = {
        firstName: "",
        lastName: "",
        email: "",
        originalPassword:"",
      }
    }

    genericSync(event) {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    }
  
    handleSubmit(event) {
      event.preventDefault();
  
      axios.post(
        process.env.REACT_APP_SERVER_URL + "/api/candidate/signup",
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
          alert("Sorry! Something went wrong. CANDIDATE36");
        });
    }
  
  render() {
    return (
      <section className="signup">
        <form onSubmit={(event) => {this.handleSubmit(event)}}>
          <label>
            First Name:
            <input value={this.state.firstName}
                onChange={event => this.genericSync(event)}
                type="text" name="firstName" placeholder="John" />
          </label>

              <label>
            Last Name:
            <input value={this.state.lastName}
                onChange={event => this.genericSync(event)}
                type="text" name="lastName" placeholder="Smith" />
          </label>
            

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

          <button>Sign Up!</button>
        </form>
      </section>
    );
  }
}

export default Signup;
