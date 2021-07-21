import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import authOperations from "../redux/auth/auth-operations";

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  };

  componentDidMount() {
    this.setState({
      email: "klklklkl@mail.com",
      password: "klklklkl123",
    });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h1>Please, Sign In</h1>
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

const mapDispatchToProps = {
  onLogin: authOperations.login,
};
export default connect(null, mapDispatchToProps)(LoginView);
