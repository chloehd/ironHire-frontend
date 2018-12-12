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
      process.env.REACT_APP_SERVER_URL + `/api/asso/all/${params.id}`,
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
    const { name, description, associationLogo, createdOn, addInformation, email, telNumber } = this.state;

    return ( 
      <section className="OneAsso">
        <h2>{name}</h2>
        {associationLogo && <img src={associationLogo} alt=""/>}
        <p>{createdOn}</p>
        {addInformation && <p>{addInformation}</p>}
        <p>{email}</p>
        {telNumber && <p>{telNumber}</p>}

        <p>{description}</p>
      </section>
     );
  }
}
 
export default OneAssociation;