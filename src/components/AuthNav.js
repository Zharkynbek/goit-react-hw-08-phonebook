import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";

const AuthNav = () => (
  <div>
    <NavLink to="/register" className="HomePageSignIn">
      <Button variant="contained" color="secondary">
        Sign Up
      </Button>
    </NavLink>
    <NavLink to="/login" className="HomePageSignUp">
      <Button variant="contained" color="secondary">
        Sign In
      </Button>
    </NavLink>
  </div>
);

export default AuthNav;
