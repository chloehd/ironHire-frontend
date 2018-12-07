import React, { Component } from 'react';

class Signup extends Component {


  
  render() {
    return (
      <section className="signup">
        <form>
          <label>
            Full Name:
            <input type="text" name="fullName" placeholder="John Doe" />
          </label>

          <label>
            Email:
            <input type="email" name="email" placeholder="John@email.com" />
          </label>

          <label>
            Password:
            <input type="password" name="password" placeholder="****" />
          </label>

          <button>Sign Up!</button>
        </form>
      </section>
    );
  }
}

export default Signup;
