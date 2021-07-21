import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import authOperations from "../redux/auth/auth-operations";

class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onRegister(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h1>Registration Page</h1>

        <form onSubmit={this.handleSubmit} autoComplete="on">
          <label>
            <p> Name</p>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

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
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
