import React, { useEffect, Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
// import Phonebook from "./components/Phonebook/Phonebook";
import Loader from "./loader/loader";
import { connect } from "react-redux";
// import RegisterView from "./views/RegisterView";
// import HomeView from "./views/HomeView";
// import LoginView from "./views/LoginView";
import AuthNav from "./components/AuthNav";
import getCurrentUser from "./redux/auth/auth-operations";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const HomeView = lazy(() => import("./views/HomeView"));
const RegisterView = lazy(() => import("./views/RegisterView"));
const LoginView = lazy(() => import("./views/LoginView"));
const Phonebook = lazy(() => import("./components/Phonebook/Phonebook"));

function App({ isLoading, updateUser }) {
  useEffect(() => {
    updateUser();
  }, [updateUser]);
  return (
    <div>
      {isLoading && <Loader />}
      <AuthNav />
      <Suspense fallback={<p>Loaded...</p>}>
        <Switch>
          <PublicRoute exact path="/" component={HomeView} />
          <PublicRoute
            path="/register"
            restricted
            redirectTo="/contacts"
            component={RegisterView}
          />
          <PublicRoute
            path="/login"
            restricted
            redirectTo="/contacts"
            component={LoginView}
          />
          <PrivateRoute
            path="/contacts"
            redirectTo="/contacts"
            component={Phonebook}
          />
        </Switch>
      </Suspense>
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
