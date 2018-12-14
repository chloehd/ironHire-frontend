import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function getAssoUrl(oneAsso) {
  return `/association/all/${oneAsso._id}`;
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
      process.env.REACT_APP_SERVER_URL + "/api/association/all",
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
      <div>
        <h3>List of all Associations</h3>

        <ul>
          {assoArray.map(oneAsso => {
            return (
              <div key={oneAsso._id} className="AllList">
              <li>
                <h5>
                  <Link to={getAssoUrl(oneAsso)}>
                    {oneAsso.name}
                  </Link>
                </h5>
                <p>{oneAsso.createdOn}</p>
                { oneAsso.associationLogo && <img src={oneAsso.associationLogo} alt={oneAsso.name} />}
              </li>
              </div>
            )
          })}
        </ul>
        </div>

      </section>
    );
  }
}

export default AllAssociations;