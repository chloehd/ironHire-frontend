import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class AddCv extends Component {
  constructor(props) {
    super(props);

    this.state = {
      candidate_pic: "",
      first_name: "",
      last_name: "",
      email: "",
      telephone_number: "",
      employment_status: "searching",
      experience: [],
      education: [],
      languages: [""],
      add_achievements: "",
      skills: "",
      role: "candidate"
    };
  }

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_SERVER_URL + "/api/candidate/cv", {
        withCredentials: true
      })
      .then(res => {
        console.log(res);
        this.setState(res.data);
      })
      .catch();
  }

  genericSync(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit(event) {
    event.preventDefault();

    axios
      .put(process.env.REACT_APP_SERVER_URL + "/api/candidate", this.state, {
        withCredentials: true
      })
      .then(response => {
        console.log("Add CV", response.data);
        this.setState({ isSubmitSuccessful: true });
      })
      .catch(err => {
        console.log("Add CV ERROR", err);
        alert("Sorry! Something went wrong. AddJob52");
      });
  }

  syncExp(event, index) {
    const { name, value } = event.target;

    this.setState(currentState => {
      const { experience } = currentState;
      experience[index][name] = value;
      return { ...currentState, experience };
    });
  }

  syncEdu(event, index) {
    const { education } = this.state;
    const { name, value } = event.target;

    education[index][name] = value;
    this.setState({ education });
  }

  logoutClick() {
    axios
      .delete(process.env.REACT_APP_SERVER_URL + "/api/logout", {
        withCredentials: true
      })
      .then(() => {
        this.syncCurrentUser(null);
      })
      .catch(err => {
        console.log("Logout ERROR", err);
      });
  }

  render() {
    if (this.state.isSubmitSuccessful) {
      return <Redirect to="/candidate" />;
    }

    const {
      first_name,
      last_name,
      candidate_pic,
      email,
      telephone_number,
      experience,
      education,
      skills,
      languages,
      add_achievements,
      employment_status
    } = this.state;

    return (
      <section className="AddCv">
        <header className="row fixNavBar">
          <nav>
            <a href="/candidate">ALL JOBS</a>
            <a href="/candidate/add-cv">ADD RESUME</a>
            <a
              className="linkHome"
              href="/logout"
              onClick={() => this.logoutClick()}
            >
              LOGOUT
            </a>
          </nav>
        </header>

        <form onSubmit={event => this.handleFormSubmit(event)}>
          <label>
            First Name:
            <input
              value={first_name}
              onChange={event => this.genericSync(event)}
              type="text"
              name="first_name"
              placeholder="Jon"
            />
          </label>

          <label>
            Last Name:
            <input
              value={last_name}
              onChange={event => this.genericSync(event)}
              type="text"
              name="last_name"
              placeholder="Snow"
            />
          </label>

          <label>
            Picture:
            <input
              value={candidate_pic}
              onChange={event => this.genericSync(event)}
              type="url"
              name="candidate_pic"
              placeholder="www.example.com/img.jpg"
            />
          </label>

          <label>
            Email address:
            <input
              value={email}
              onChange={event => this.genericSync(event)}
              type="email"
              name="email"
              placeholder="jon.snow@stark.com"
            />
          </label>

          <label>
            Telephone Number:
            <input
              value={telephone_number}
              onChange={event => this.genericSync(event)}
              type="number"
              name="telephone_number"
              placeholder="07 28 63 86 20"
            />
          </label>

          <div>
            <h4>Experience:</h4>
            <button
              className="waves-effect waves-light btn-small indigo lighten-1"
              onClick={e => {
                e.preventDefault();
                const experience = this.state.experience;
                experience.push({});
                this.setState({ experience });
              }}
            >
              +
            </button>

            {experience.map((oneExp, index) => {
              return (
                <div key={index}>
                  <label>
                    Company:
                    <input
                      type="text"
                      value={oneExp.companyName}
                      name="companyName"
                      onChange={event => this.syncExp(event, index)}
                    />
                  </label>

                  <label>
                    Duration (months):
                    <input
                      type="text"
                      value={oneExp.duration}
                      name="duration"
                      onChange={event => this.syncExp(event, index)}
                    />
                  </label>

                  <label>
                    Tasks:
                    <input
                      type="text"
                      value={oneExp.tasks}
                      name="tasks"
                      onChange={event => this.syncExp(event, index)}
                    />
                  </label>
                </div>
              );
            })}
          </div>

          <div>
            <h4>Education:</h4>
            <button
              className="waves-effect waves-light btn-small indigo lighten-1"
              onClick={e => {
                e.preventDefault();
                const education = this.state.education;
                education.push({});
                this.setState({ education });
              }}
            >
              +
            </button>

            {education.map((oneEd, index) => {
              return (
                <div key={index}>
                  <label>
                    Subject:
                    <input
                      key={index}
                      type="text"
                      value={oneEd.studyName}
                      name="studyName"
                      onChange={event => this.syncEdu(event, index)}
                    />
                  </label>

                  <label>
                    Institution:
                    <input
                      key={index}
                      type="text"
                      value={oneEd.schoolName}
                      name="schoolName"
                      onChange={event => this.syncEdu(event, index)}
                    />
                  </label>

                  <label>
                    Dates:
                    <input
                      key={index}
                      type="text"
                      value={oneEd.duration}
                      name="duration"
                      onChange={event => this.syncEdu(event, index)}
                    />
                  </label>
                </div>
              );
            })}
          </div>

          <label>
            Skills:
            <input
              value={skills}
              onChange={event => this.genericSync(event)}
              type="text"
              name="skills"
              placeholder="communication, management..."
            />
          </label>

          <label>
            Spoken languages:
            <input
              value={languages}
              onChange={event => this.genericSync(event)}
              type="text"
              name="languages"
              placeholder="French, English, ..."
            />
          </label>

          <label>
            Additional achievements:
            <input
              value={add_achievements}
              onChange={event => this.genericSync(event)}
              type="text"
              name="add_achievements"
              placeholder="Driving licence... "
            />
          </label>

          <label>
            Employment status:
            <select
              name="employment_status"
              value={employment_status}
              onChange={event => this.genericSync(event)}
            >
              <option value="searching">Searching</option>
              <option value="open to offers">Open to Offers</option>
              <option value="employed">Employed</option>
            </select>
          </label>

          <button className="waves-effect waves-light btn-small indigo lighten-1">
            Save this CV
          </button>
        </form>
      </section>
    );
  }
}

export default AddCv;
