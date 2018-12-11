import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function getAssoUrl(oneAsso) {
  return `/asso/${oneAsso._id}`;
}


class AllAssociations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      assoArray: [],
    }
  }

  componentDidMount() {
    axios.get(
      process.env.REACT_APP_SERVER_URL + "/api/asso/all",
      { withCredentials: true } 
      )
      .then(response => {
        console.log("Asso List", response.data);
        this.setState({ assoArray: response.data });
      })
      .catch(err => {
        console.log("Asso List ERROR", err);
        alert("Sorry! Something went wrong. AllAsso30");
      });
  }

  render() {
    const { assoArray } = this.state;
    return (
      <section className="AssoList">
        <h2>All Associations</h2>

        <ul>
          {assoArray.map(oneAsso => {
            return (
              <li key={oneAsso._id}>
                <h3>
                  <Link to={getAssoUrl(oneAsso)}>
                    {oneAsso.name}
                  </Link>
                </h3>
                <p>{oneAsso.createdOn}</p>
                <img src={oneAsso.associationLogo} alt={oneAsso.name} />
              </li>
            )
          })}
        </ul>

      </section>
    );
  }
}

export default AllAssociations;