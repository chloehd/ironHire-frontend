import React, { Component } from "react";

class OneCandidate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      specs: []
    };
  }



  render() {
    const {
      candidatePic,
      firstName,
      lastName,
      email,
      telephoneNumber,
      employmentStatus,
      skills,
      experience,
      languages,
      education
    } = this.state;
    return (
<section className="oneCandidate">
        <h2>Candidates</h2>
        <h3>
          {firstName} {lastName}
        </h3>
        <ul>
        <img src={candidatePic} alt="" />
          <li>{email}</li>
          <li>{telephoneNumber}</li>
          <li>{employmentStatus}</li>
          <li>{skills}</li>
          <li>{experience}</li>
          <li>{languages}</li>
          <li>{education}</li>
        </ul>
      </section>
    );
  }
}

export default OneCandidate;
