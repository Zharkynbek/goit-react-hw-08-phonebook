import React from "react";
import { Route, Switch } from "react-router-dom";
// import Phonebook from "./components/Phonebook/Phonebook";
import Loader from "./loader/loader";
import { connect } from "react-redux";
import RegisterView from "./views/RegisterView";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";

function App({ isLoading }) {
  return (
    <div>
      {isLoading && <Loader />}
      {/* <Phonebook /> */}
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.loading,
});

export default connect(mapStateToProps)(App);
