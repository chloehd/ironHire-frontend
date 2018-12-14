import React, { Component } from "react";
import axios from "axios";


class AllJobs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobArray: []
    };
  }

  componentDidMount() {
    axios.get(process.env.REACT_APP_SERVER_URL + "/api/candidate", {
        withCredentials: true
      })
      .then(response => {
        console.log("Jobs", response.data);
        this.setState({ jobArray: response.data });
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
              <ul>
              <li><h4>{oneJob.name}</h4></li>
              <li>Description: {oneJob.description}</li>
              <li>Contract Type: {oneJob.contractType}</li>
              <li>Location: {oneJob.location}</li>
              <li>Created At: {oneJob.createdAt}</li>
              <li>Deadline: {oneJob.deadline}</li>
              </ul>
              </div>
            );
          })}
  
      </section>
    );
  }
}
export default AllJobs;
