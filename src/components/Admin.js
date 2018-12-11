import React, { Component } from 'react';


class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
// asso 
    }
  }

  render() {

    return (

      // should map here to go through the different information
      <section>
        <h1>Admin Page</h1>

        {/* <p>There is {{ assoVerifNumber }} Associations to accept</p> */}

        {/* <h4>{{ this.state.name }}</h4> */}
        {/* <ul>
          <li>Date of creation: {{ this.state.createdOn }}</li>
          <li>Logo: {{ this.image }}</li>
          <li>Description: {{ this.description }}</li>

          <a href="/admin/{{this._id}}/asso"><button>Validate the association</button></a>
        </ul> */}
        
      </section>
    );
  }
}

export default Admin;
