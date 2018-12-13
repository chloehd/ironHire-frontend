import React, { Component } from 'react';
import axios from "axios";
import AllCandidates from './AllCandidates';



class Recruiters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      candidateArray: []
    };

  }

  componentDidMount() {

axios.get(
    process.env.REACT_APP_SERVER_URL + "/api/candidate/candidates",
    { withCredentials: true }
)
.then(response => {
  console.log("Candidates", response.data);
  this.setState({candidateArray: response.data});
})

      .catch(err => {
        console.log("candidates ERROR 🦄", err);
        alert("Sorry! Candidate data not loading");
      });
  }

render() {
  const { candidateArray } = this.state;
    return (
      <section className="AllCandidatesSection">
        <h2>Welcome</h2>

       <AllCandidates candidateArray={candidateArray} />
      </section>

    );
  }
}
export default Recruiters;