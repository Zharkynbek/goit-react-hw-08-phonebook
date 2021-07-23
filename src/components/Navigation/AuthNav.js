import { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import { gsap, Power3 } from "gsap";

export const AuthNav = ({ userName, isAuthorized, onLogout }) => {
  let navigation = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      navigation,
      1.5,
      {
        y: -150,
      },
      {
        y: 0,
        ease: Power3.easeInOut,
      }
    );
  }, []);
  return (
    <div ref={(el) => (navigation = el)}>
      <div>
        <NavLink to="/" className="Home">
          <Button variant="contained" color="secondary">
            Home
          </Button>
        </NavLink>
        {isAuthorized && (
          <NavLink to="/contacts" className="Contacts">
            <Button variant="contained" color="secondary">
              Contacts
            </Button>
          </NavLink>
        )}
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
          <p className="userName">
            Hello, <span>{userName}</span>
          </p>
          <div className="Logout">
            {" "}
            <Button variant="contained" color="secondary" onClick={onLogout}>
              Logout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
