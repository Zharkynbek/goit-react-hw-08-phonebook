import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h1>Please, Sign In</h1>
        <NavLink to="/" className="GoBack">
          <Button variant="contained" color="primary">
            Go Back
          </Button>
        </NavLink>

        <form onSubmit={this.handleSubmit} autoComplete="off">
          <label>
            <p>Email</p>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label>
            <p>Password</p>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <Button type="submit" variant="contained" color="secondary">
            Sign In
          </Button>
        </form>
      </div>
    );
  }
}
export default LoginView;
