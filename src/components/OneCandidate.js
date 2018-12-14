import React, { Component } from "react";
import axios from "axios";

class OneCandidate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      specs: []
    };
  }

<<<<<<< HEAD



componentDidMount() { 
  const { params } = this.props.match;
  axios.get (process.env.REACT_APP_SERVER_URL + "/api/recruiter/allcandidates", {
    withCredentials: true
  })
.then(response => {
  console.log("candidate deets", response.data);
  this.setState({specs:response.data});
})
.catch(err => {
  console.log("candidate deets error", err);
  alert("Oops! Something went wrong.")
});
}

  render() {

    const candidateHTML = this.state.specs.map(oneSpec =>{
        return(
            <div>
                <h3>{oneSpec.first_name}</h3>
                <div>
                     <img src={oneSpec.candidate_pic} alt="" />
                     <p>{oneSpec.email}</p>
                    <p>{oneSpec.telephone_number}</p>
                    <p>{oneSpec.employment_status}</p>
                    <p>{oneSpec.skills}</p>
                    <p>{oneSpec.experience}</p>
                    <p>{oneSpec.languages}</p>
               </div>
            
            </div>
        )
    })

    return (
      <section className="oneCandidate">
        {candidateHTML}
=======
  componentDidMount() {
    const { params } = this.props.match;

    axios.get(
      process.env.REACT_APP_SERVER_URL + `/api/recruiter/allcandidates/${params.id}`, 
    { withCredentials: true }
    )
      .then(response => {
        console.log("candidate deets", response.data);
        this.setState(response.data);
      })
      .catch(err => {
        console.log("candidate deets error", err);
        alert("Oops! Something went wrong.")
      });
  }

  render() {
    const {
      candidate_pic, first_name, last_name, email,
      telephone_number, employment_status, skills,
      experience, languages, education
    } = this.state;
    return (
      <section className="oneCandidate">
        <h3>
          {first_name} {last_name}
        </h3>
        <ul>
          <img src={candidate_pic} alt="" />
          <p>Email: {email}</p>
          {telephone_number && <p>Telephone Number: {telephone_number}</p>}
          <p>Employment status:{employment_status}</p>
          <p>Skills: {skills}</p>
          {experience.map((oneExp, index) => {
            return <p key={index}>{oneExp[index]}</p>
          })}
          {education.map((oneEdu, index) => {
            return <p key={index}>{oneEdu[index]}</p>
          })}
          {languages.map((oneLanguage, index) => {
            return <p key={index}>{oneLanguage}</p>
          })}
        </ul>
>>>>>>> fd8eaa3ab86f16412488dda61fe1299a7d7852e0
      </section>
    );
  }
}

export default OneCandidate;
