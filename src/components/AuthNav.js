import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { isAuthorized, getUsername } from "../redux/auth/auth-selectors";
import { logout } from "../redux/auth/auth-operations";

const AuthNav = ({ userName, isAuthorized, onLogout }) => {
  console.log(isAuthorized);
  return (
    <div>
      <div>
        <NavLink to="/">
          <Button variant="contained" color="secondary">
            Home
          </Button>
        </NavLink>
        <NavLink to="/contacts">
          <Button variant="contained" color="secondary">
            Contacts
          </Button>
        </NavLink>
      </div>
      {!isAuthorized ? (
        <div>
          <NavLink to="/register" className="HomePageSignUp">
            <Button variant="contained" color="secondary">
              Sign Up
            </Button>
          </NavLink>
          <NavLink to="/login" className="HomePageSignIn">
            <Button variant="contained" color="secondary">
              Sign In
            </Button>
          </NavLink>
        </div>
      ) : (
        <div>
          <p>
            Hello, <span>{userName}</span>
          </p>
          <button onClick={onLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthorized: isAuthorized(state),
  userName: getUsername(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthNav);
