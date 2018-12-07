import React, { Component } from 'react';
// import axios from "axios";


class AddCv extends Component {
  constructor(props) {
    super(props);

    this.state = {
      candidatePic: "",
      firstName: "",
      lastName: "",
      email: "",
      telNumber: "",
      employmentStatus: "",
      experience: [{}],
      education: [{}],
      languages: [""],
      addAchievements: "",
      skills: "",
      role: "candidate",
    }
  }

  genericSync(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const { onSubmit } = this.state;
    onSubmit(this.state);
    this.setState(this.getInitialState());
  }

  syncExp(event, index) {
    const { experience } = this.state;
    experience[index] = event.target.value;
    this.setState({ experience });
  }

  syncEdu(event, index) {
    const { education } = this.state;
    education[index] = event.target.value;
    this.setState({ education });
  }


  render() {
    const {
      firstName, lastName, candidatePic, email, telNumber,
      experience, education, skills, languages, addAchievements,
      employmentStatus
    } = this.state;

    return (
      <section className="AddCv">
        <form onSubmit={(event) => this.handleFormSubmit(event)}>
          <label>
            First Name:
            <input value={firstName}
              onChange={event => this.genericSync(event)}
              type="text" name="firstName" placeholder="Jon" />

          </label>

          <label>
            Last Name:
            <input value={lastName}
              onChange={event => this.genericSync(event)}
              type="text" name="lastName" placeholder="Snow" />

          </label>

          <label>
            Picture:
            <input value={candidatePic}
              onChange={event => this.genericSync(event)}
              type="url" name="candidatePic" placeholder="www.example.com/img.jpg" />
          </label>

          <label>
            Email address:
            <input value={email}
              onChange={event => this.genericSync(event)}
              type="email" name="email" placeholder="jon.snow@stark.com" />
          </label>

          <label>
            Telephone Number:
            <input value={telNumber}
              onChange={event => this.genericSync(event)}
              type="number" name="telNumber" placeholder="07 28 63 86 20" />
          </label>

          <div>
            <h4>Experience:</h4>

            {experience.map((oneExp, index) => {
              return (
                <div>
                  <label>
                    Company:
                    <input type="text" value={oneExp.companyName}
                      name="companyName"
                      onChange={event => this.syncExp(event, index)} />
                  </label>

                  <label>
                    Duration (months):
                    <input type="text" value={oneExp.duration}
                      name="duration"
                      onChange={event => this.syncExp(event, index)} />
                  </label>

                  <label>
                    Tasks:
                    <input type="text" value={oneExp.tasks}
                      name="tasks"
                      onChange={event => this.syncExp(event, index)} />
                  </label>
                </div>
              )
            })}

          </div>

          <div>
            <h4>Education:</h4>

            {education.map((oneEd, index) => {
              return (
                <div>
                  <label>
                    Subject:
                      <input key={index} type="text" value={oneEd.studyName}
                        name="studyName"
                         onChange={event => this.syncEdu(event, index)} />
                  </label>

                  <label>
                    Institution:
                    <input key={index} type="text" value={oneEd.schoolName}
                      name="schoolName"
                      onChange={event => this.syncEdu(event, index)} />
                  </label>

                  <label>
                    Dates:
                    <input key={index} type="text" value={oneEd.duration}
                      name="duration"
                      onChange={event => this.syncEdu(event, index)} />
                  </label>
                </div>
              )
            })}

          </div>

          <label>
            Skills:
            <input value={skills}
              onChange={event => this.genericSync(event)}
              type="text" name="skills" placeholder="communication, management..." />

          </label>

          <label>
            Spoken languages:
            <input value={languages}
              onChange={event => this.genericSync(event)}
              type="text" name="languages" placeholder="French, English, ..." />

          </label>

          <label>
            Additional achievements:
            <input value={addAchievements}
              onChange={event => this.genericSync(event)}
              type="text" name="addAchievements" placeholder="Driving licence... " />

          </label>

          <label>
            Employment status:
            <input value={employmentStatus}
              onChange={event => this.genericSync(event)}
              type="enum" name="employmentStatus" placeholder="Searching, open to offers or employed" />

          </label>

          <button>Save this CV</button>
        </form>
      </section>
    );
  }
}

export default AddCv;