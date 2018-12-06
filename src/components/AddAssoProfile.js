import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';

class AddAssoProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      associationLogo: "",
      name: "",
      createdOn: "",
      description: "",
      addInformation: "",
      telNumber: "",
      email: "",
      role: "association",
    }
  }

  genericSync(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit(event) {
    event.preventDefault();

    // faire le lien avec le backend !!!
    axios.post(
      "http://localhost:5555/api/associations",
      this.state,
      { withCredentials: true }
    )
      .then(response => {
        console.log("Add Association", response.data);
        this.setState({ isSubmitSuccessful: true })
      })
      .catch(err => {
        console.log("Add Association ERROR", err);
        alert("Sorry! Something went wrong.")
      });
  }


  render() {
    const { associationLogo, name, createdOn, description,
      addInformation, telNumber, email } = this.state;

    if (this.state.isSubmitSuccessful) {
      return <Redirect to="/" />
    }

    // ajouter ici le fait que si l'association existe alors 
    // on est redirigé vers page /associations et si non, vers Home

    return (
      <section className="AddAssoProfile">
        <form onSubmit={(event) => this.handleFormSubmit(event)}>
          <label>
            Association's name:
              <input value={name}
              onChange={event => this.genericSync(event)}
              type="text" name="name" placeholder="WWF..." />
          </label>

          <label>
            Date of creation:
              <input value={createdOn}
              onChange={event => this.genericSync(event)}
              type="date" name="createdOn" placeholder="2005" />
          </label>

          <label>
            Description of actions:
              <input value={description}
              onChange={event => this.genericSync(event)}
              type="text" name="description" placeholder="This association helps people to..." />
          </label>

          <label>
            Additional Information:
              <input value={addInformation}
              onChange={event => this.genericSync(event)}
              type="text" name="addInformation" placeholder="We work closely to this association..." />
          </label>

          <label>
            Email:
              <input value={email}
              onChange={event => this.genericSync(event)}
              type="email" name="email" placeholder="association@asso.org" />
          </label>

          <label>
            Telephone Number:
              <input value={telNumber}
              onChange={event => this.genericSync(event)}
              type="number" name="telNumber" placeholder="01 45 76 18 01" />

          </label>

          <label>
            Logo:
              <input value={associationLogo}
              onChange={event => this.genericSync(event)}
              type="url" name="associationLogo" placeholder="www.image.com/img.jpg" />
          </label>


          <button>Submit your profile</button>
        </form>
      </section>
    );
  }
}

export default AddAssoProfile;