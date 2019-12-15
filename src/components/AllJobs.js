import React, { Component } from "react";
import { NavLink } from "react-router-dom";
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
    const { jobsData, data } = this.props;

    if (jobsData) {
      var jobHTML = jobsData.map(oneJob => {
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
    }

    return (
      <div className="AllJobsSection">
        <div className="row">
          {!jobsData ? (
            <div key={data._id} className="searchJobDiv col s4">
              <NavLink to={getJobUrl(data)}>
                <ul className="jobDescription">
                  <li>
                    <h3>{data.name}</h3>
                  </li>
                  <p>Contract Type: {data.contractType}</p>
                  <p>Location: {data.location}</p>
                  <p>Deadline: {moment(data.deadline).format("DD/MM/YYYY")}</p>
                </ul>
              </NavLink>
            </div>
          ) : (
            <div className="row">{jobHTML}</div>
          )}
        </div>
      </div>
    );
  }
}

export default AllJobs;
