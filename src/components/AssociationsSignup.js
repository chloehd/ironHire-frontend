import React, { Component } from 'react';
import axios from "axios";

class Signup extends Component {
    constructor(props) {
      super(props);

    // trouver un moyen de se connecter à recruiter ou candidats ici
      this.state = {
        name: "",
        createdOn: "",
        description: "",
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
  
      // trouver un moyen de se connecter à recruiter ou candidats ici
      axios.post(
        process.env.REACT_APP_SERVER_URL + "/api/asso/signup",
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
          alert("Sorry! Something went wrong.");
        });
    }
  
  render() {
    return (
      <section className="signup">
        <form onSubmit={(event) => {this.handleSubmit(event)}}>
          <label>
            Name of the association:
            <input value={this.state.name}
                onChange={event => this.genericSync(event)}
                type="text" name="name" placeholder="SuperOrganisation..." />
          </label>
            
          <label>
            Date of creation:
            <input value={this.state.createdOn}
                onChange={event => this.genericSync(event)}
                type="date" name="createdOn" /> 
          </label>

          <label>
            What are the actions of your association linked with this website?
            <input value={this.state.description}
                onChange={event => this.genericSync(event)}
                type="text" name="description" placeholder="In our association, we help refugees to find a job..."/> 
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
