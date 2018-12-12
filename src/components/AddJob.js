import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import axios from "axios";

class AddJob extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      salary: "",
      educationLevel: "",
      description: "",
      contractType: "",
      location: "",
      createdAt: "",
      deadline: "",
      owner: "recruiter",
      isSubmitSuccessful: false,
    }
  }


  genericSync(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    axios.post(
      process.env.REACT_APP_SERVER_URL + "/api/recruiter/addjob",
      {
        name: this.state.name,
        salary: this.state.salary,
        educationLevel: this.state.educationLevel,
        description: this.state.description,
        contractType: this.state.contractType,
        location: this.state.location,
        createdAt: this.state.createdAt,
        deadline: this.state.deadline,
        owner: this.state.owner.name,
      },
      { withCredentials: true }
    )
      .then(response => {
        console.log("Add Job", response.data);
        this.setState({ isSubmitSuccessful: true });
      })
      .catch(err => {
        console.log("Add Job ERROR", err);
        alert("Sorry! Something went wrong. AddJob52")
      });
  }


  render() {
    if (this.state.isSubmitSuccessful) {
      return <Redirect to="/recruiter/addjob" />
    }

    return (
      <section className="AddJob">
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            Job's name:
            <input value={this.state.name}
              onChange={event => this.genericSync(event)}
              type="text" name="name" placeholder="Communication officer" />
          </label>

          <label>
            Salary:
            <input value={this.state.salary}
              onChange={event => this.genericSync(event)}
              type="number" name="salary" placeholder="30K" />
          </label>

          <label>
            Education Level:
            <input value={this.state.educationLevel}
              onChange={event => this.genericSync(event)}
              type="text" name="educationLevel" placeholder="Bachelor required" />
          </label>

          <label>
            Description:
            <input value={this.state.description}
              onChange={event => this.genericSync(event)}
              type="text" name="description" placeholder="As a communication officer, you will have to..." />
          </label>

          <label>
            Contrat Type:
            <input value={this.state.contractType}
              onChange={event => this.genericSync(event)}
              type="text" name="contratType" placeholder="6 months contract" />
          </label>

          <label>
            Location:
            <input value={this.state.location}
              onChange={event => this.genericSync(event)}
              type="text" name="location" placeholder="London" />
          </label>

          <label>
            Deadline:
            <input value={this.state.deadline}
              onChange={event => this.genericSync(event)}
              type="date" name="deadline" placeholder="London" />
          </label>

          <button>Add a job offer</button>

        </form>
      </section>
    )
  }
}

export default AddJob;