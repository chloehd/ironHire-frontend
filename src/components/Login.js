import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <section className="Login">
        <form>
          <label>
            Email:
            <input type="email" name="email" placeholder="john@email.com" />
          </label>

          <label>
            Password:
            <input type="password" name="password" placeholder="****" />
          </label>

          <button>Log In!</button>
        </form>
      </section>
    );
  }
}

export default Login;
