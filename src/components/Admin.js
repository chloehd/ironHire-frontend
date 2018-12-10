import React, { Component } from 'react';


class Admin extends Component {

  render() {
    return (
      <section>
        <h1>Admin Page</h1>

        <p>There is {{ assoVerifNumber }} Associations to accept</p>

        {{#each assoArray}}
        <h4>{{ this.name }}</h4>
        <ul>
          <li>Date of creation: {{ this.createdOn }}</li>
          <li>Logo: {{ this.image }}</li>
          <li>Description: {{ this.description }}</li>

          <a href="/admin/{{this._id}}/asso"><button>Validate the association</button></a>
        </ul>
        {{/ each}}
        
        
      </section>
    );
  }
}

export default Admin;
