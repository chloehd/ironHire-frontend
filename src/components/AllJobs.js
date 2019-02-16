import React, { Component } from "react";
import axios from "axios";


class AllJobs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobsArray: []
    };
  }

  componentDidMount() {
    axios.get(process.env.REACT_APP_SERVER_URL + "/api/candidate", {
        withCredentials: true
      })
      .then(response => {
        console.log("Jobs", response.data);
        this.setState({ jobsArray: response.data });
      })
      .catch(err => {
        console.log("Jobs ERROR 🙈", err);
        alert("Sorry! Jobs data not loading");
      });
  }

  render() {
    const { jobsArray } = this.state;
    console.log(jobsArray);
    return (
      <section className="AllJobsSection">

          {jobsArray.map(oneJob => {
            return (
                <div key={oneJob._id} className="AllJobsDiv">
              <ul className="jobDescription">
              <li><h4>{oneJob.name}</h4></li>
              <p>Description: {oneJob.description}</p>
              <p>Contract Type: {oneJob.contractType}</p>
              <p>Location: {oneJob.location}</p>
              <p>Created At: {oneJob.createdAt}</p>
              <p>Deadline: {oneJob.deadline}</p>
              </ul>
              </div>
            );
          })}
  
      </section>
    );
  }
}
export default AllJobs;
