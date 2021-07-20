import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Phonebook from "./components/Phonebook/Phonebook";
import Loader from "./loader/loader";
import { connect } from "react-redux";
import RegisterView from "./views/RegisterView";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import AuthNav from "./components/AuthNav";
import getCurrentUser from "./redux/auth/auth-operations";

function App({ isLoading, updateUser }) {
  useEffect(() => {
    updateUser();
  }, [updateUser]);
  return (
    <div>
      {isLoading && <Loader />}
      <AuthNav />
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={Phonebook} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: () => dispatch(getCurrentUser.getCurrentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
