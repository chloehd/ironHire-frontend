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
    const { jobArray } = this.state;

    const jobHTML = jobArray.map(oneJob => {
      return (
        <div className="AllJobsDiv">
        
        
        <div> 
      Position: {oneJob.name}
      Description: {oneJob.description}
      Contract Type: {oneJob.contractType}
      Location: {oneJob.location}
      Posted: {oneJob.createdAt}
      Deadline: {oneJob.deadline}
          
        </div>
    </div>);
    })
    return (
      <section className="AllJobz">
      {jobHTML}
      </section>
    );
  }
}
export default AllJobs;
