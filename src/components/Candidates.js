import React, { Component } from 'react';
import 

class Candidates extends Component {
  constructor(props) {
  super (props);

  }

  this.state = {
    itmes: [ ' ' ],
    isLoaded: false,
  }

  ComponentDidMount() {
    fetch()
    .then(res => res.json())

  }

  render() {
    return (
      <section className="candidates">

      <h1>Welcome, candidates!</h1>



      
      <ul>
        <li>View Jobs</li>
        <li>Add a Job</li>
      </ul>


      </section>
    )
  }
}

export default Candidates;