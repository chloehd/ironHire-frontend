import React, { Component } from "react";
import axios from "axios";

class OneCandidate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      specs: []
    };
  }




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
      </section>
    );
  }
}

export default OneCandidate;
