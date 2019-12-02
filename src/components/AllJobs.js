import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import axios from "axios";
import moment from "moment";

function getJobUrl(oneJob) {
  return `/candidate/alljobs/${oneJob._id}`;
}

class AllJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { jobsData } = this.props;
    console.log("kjskdlkslks", jobsData);

    const jobHTML = jobsData.map(oneJob => {
      return (
        <div key={oneJob._id} className="AllJobsDiv col s4">
          <NavLink to={getJobUrl(oneJob)}>
            <ul className="jobDescription">
              <li>
                <h3>{oneJob.name}</h3>
              </li>
              <p>Contract Type: {oneJob.contractType}</p>
              <p>Location: {oneJob.location}</p>
              <p>Deadline: {moment(oneJob.deadline).format("DD/MM/YYYY")}</p>
            </ul>
          </NavLink>
        </div>
      );
    });
    return (
      <section className="AllJobsSection">
        <div className="row">{jobHTML}</div>
      </section>
    );
  }
}

export default AllJobs;
