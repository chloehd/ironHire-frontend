import React, { Component } from "react";
import axios from "axios";

class OneJob extends Component {
  constructor(props) {
    super(props);

    this.state = {
      specs: []
    };
  }

  componentDidMount() {
    const { params } = this.props.match;

    axios.get(
      process.env.REACT_APP_SERVER_URL + `/api/candidate/alljobs/${params.id}`,
      { withCredentials: true }
    )
      .then(response => {
        console.log("Jobs deets", response.data);
        this.setState(response.data);
      })
      .catch(err => {
        console.log("Jobs deets error", err);
        alert("Oops! Something went wrong.")
      });
  }

  render() {
    const {
      name, salary, educationLevel, description,
      contractType, location, createdAt,
      deadline, owner,
    } = this.state;


    return (
      <section className="oneJob">
        <header className="row fixNavBar">
          <nav>
            <a href="/recruiter">ALL CANDIDATES</a>
            <a href="/recruiter/add-job">ADD A JOB</a>
            <a className="linkHome" href="/logout" onClick={() => this.logoutClick()}>LOGOUT</a>
          </nav>
        </header>

        <div className="row">
          <h3>
            {name} 
          </h3>
          <p>Created at: {createdAt}</p>
          <ul>
            <li>Salary: {salary}</li>
            <li>Education: {educationLevel}</li>
            <li>Description:{description}</li>
            <li>Contract: {contractType}</li>
            <li>Location: {location}</li>
            <li>Deadline: {deadline}</li>
            <li>Company: {owner}</li>
            
          </ul>

        </div>
      </section>
    );
  }
}

export default OneJob;
