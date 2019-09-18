import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import moment from "moment";

function getJobUrl(oneJob) {
  return `/candidate/alljobs/${oneJob._id}`;
}

class AllJobs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobsArray: []
    };
  }

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_SERVER_URL + "/api/candidate", {
        withCredentials: true
      })
      .then(response => {
        console.log("Jobs", response.data);
        this.setState({ jobsArray: response.data });
      })
      .catch(err => {
        console.log("Jobs ERROR 🙈", err);
      });
  }

  render() {
    const { jobsArray } = this.state;
    const jobHTML = jobsArray.map(oneJob => {
      return (
        <div className="row">
          <div key={oneJob._id} className="AllJobsDiv">
            <NavLink to={getJobUrl(oneJob)}>
              <ul className="jobDescription">
                <li>
                  <h4>{oneJob.name}</h4>
                </li>
                <p>Description: {oneJob.description}</p>
                <p>Contract Type: {oneJob.contractType}</p>
                <p>Location: {oneJob.location}</p>
                <p>
                  Created At: {moment(oneJob.createdAt).format("DD/MM/YYYY")}
                </p>
                <p>Deadline: {moment(oneJob.deadline).format("DD/MM/YYYY")}</p>
              </ul>
            </NavLink>
          </div>
        </div>
      );
    });
    return (<section className="AllJobsSection">
      {jobHTML}
      </section>
    )
  }
}

export default AllJobs;
