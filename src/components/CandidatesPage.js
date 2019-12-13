import React, { Component } from "react";
import AllJobs from "./AllJobs";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Search from "./Search";

class CandidatesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      data: [],
      userInput: ""
    };
  }

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_SERVER_URL + "/api/candidate", {
        withCredentials: true
      })
      .then(response => {
        console.log("Jobs", response.data);
        this.setState({ data: response.data });
      })
      .catch(err => {
        console.log("Jobs ERROR 🙈", err);
      });
  }

  syncCurrentUser(userDoc) {
    this.setState({ currentUser: userDoc });
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

  handleChange = e => {
    this.setState({ userInput: e.target.value });
    console.log(e.target.value);
  };

  render() {
    const { data, userInput } = this.state;

    const filteredArray = data.filter(dataFilter => {
      return (
        dataFilter.name.toLowerCase().indexOf(userInput.toLowerCase()) !== -1
      );
    });

    const additionalNav = () => (
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
    );
    return (
      <section className="candidates">
        {this.props.currentUser ? (
          <div>
            <header className="row fixNavBar">
              <Switch>
                <Route path="/candidate" component={additionalNav} />
              </Switch>
            </header>

            <div className="candidatesJobs">
              <h2>Welcome {this.props.currentUser.first_name}!</h2>

              <Search onChange={this.handleChange} />

              {userInput &&
                filteredArray.map(oneData => {
                  return <AllJobs data={oneData} />;
                })}

              {!userInput && <AllJobs jobsData={data} />}
            </div>
          </div>
        ) : (
          <div className="container row">
            <div className="text">
              <p>
                Dear Candidates, you just arrived in France and you are looking
                for a job to begin a new life. You found the great place. Here
                are some job offers but you profile will also be shared with
                companies looking for someone to hire. So it is possible that a
                company directly contact you. It is important to file you resume
                in order to be easy to contact. Please login to enter to your
                account.
              </p>
              <Login onUserChange={this.props.onUserChange} />
            </div>
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1513171920216-2640b288471b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1709&q=80"
                alt="People walking in a street"
              />
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default CandidatesPage;
