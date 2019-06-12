import React, { Component } from 'react';


class NeedHelp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: props.currentUser 
      ? props.currentUser.first_name
      : "",
      last_name: props.currentUser 
      ? props.currentUser.last_name
      : "",
      email:props.currentUser 
      ? props.currentUser.email
      : "",
      role: "candidate",
    }
  }



  handleFormSubmit(event) {
    event.preventDefault();
    const { onSubmit } = this.state;
    onSubmit(this.state);
    this.setState(this.getInitialState());
  }

 addOneHelp(event) {
   
 }

  render() {
    const { firstName, lastName,  email } = this.state;

    return (
      <section className="NeedHelp">
        <form onSubmit={(event) => this.handleFormSubmit(event)}>
          <label>
            First Name:
            <input value={firstName}
              onChange={event => this.addOneHelp(event)}
              type="text" name="firstName" placeholder="Jon" />

          </label>

          <label>
            Last Name:
            <input value={lastName}
              onChange={event => this.genericSync(event)}
              type="text" name="lastName" placeholder="Snow" />

          </label>

          <label>
            Email address:
            <input value={email}
              onChange={event => this.genericSync(event)}
              type="email" name="email" placeholder="jon.snow@stark.com" />
          </label>


          <button className="waves-effect waves-light btn-small">Need Help</button>
        </form>
      </section>
    );
  }
}

export default NeedHelp;