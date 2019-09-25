import React, { Component } from "react";
import axios from "axios";
import moment from "moment";

class OneJob extends Component {
  constructor(props) {
    super(props);

    this.state = {
      specs: [],
    };
  }

  componentDidMount() {
    const { params } = this.props.match;

    axios
      .get(
        process.env.REACT_APP_SERVER_URL +
          `/api/candidate/alljobs/${params.id}`,
        { withCredentials: true }
      )
      .then(response => {
        this.setState(response.data);
      })
      .catch(err => {
        console.log("Jobs deets error", err);
      });
  }

  render() {
    const {
      name,
      salary,
      educationLevel,
      description,
      contractType,
      location,
      createdAt,
      deadline, 
      owner
    } = this.state;

    return (
      <section className="oneJob">
        <header className="row fixNavBar">
          <nav>
            <a href="/candidate">ALL JOBS</a>
            <a href="/candidate/add-cv">ADD RESUME</a>
            <a
              className="linkHome"
              href="/logout"
              onClick={() => this.logoutClick()}
            >
              LOGOUT
            </a>
          </nav>
        </header>

        <div className="row content">
          <h3>{name}</h3>
          <ul>
            <li>Salary: {salary}</li>
            <li>Education: {educationLevel}</li>
            <li>Description:{description}</li>
            <li>Contract: {contractType}</li>
            <li>Location: {location}</li>
            <li>Deadline: {moment(deadline).format("DD/MM/YYYY")}</li>
            <li>Company: {owner && owner.companyName}</li>
            <li>Company email: {owner && owner.email}</li>
          </ul>
          <p>Date of publication: {moment(createdAt).format("DD/MM/YYYY")}</p>
        </div>
      </section>
    );
  }
}

export default OneJob;
