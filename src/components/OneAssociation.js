import React, { Component } from "react";
import axios from "axios";

class OneAssociation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      specs: [],
    };
  }

  componentDidMount() {
    const { params } = this.props.match;

    axios.get(
      `http://localhost:5555/api/asso/${params.assoId}`,
      { withCredentials: true } 
      )
      .then(response => {
        console.log("Association Details", response.data);
        this.setState(response.data);
      })
      .catch(err => {
        console.log("Association Details", err);
        alert("Sorry! Something went wrong. ONEASSO26");
      });
  }

  render() { 
    const { _id, name, description, associationLogo } = this.state;

    return ( 
      <section className="OneAsso">
        <h2>{name}</h2>

        <p>{description}</p>

        <img src={associationLogo} alt="" />
      </section>
     );
  }
}
 
export default OneAssociation;