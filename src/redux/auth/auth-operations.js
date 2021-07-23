import axios from "axios";
import authActions from "./auth-actions";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (credentials) => (dispatch) => {
  dispatch(authActions.registerRequest());

  axios
    .post("/users/signup", credentials)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(authActions.registerSuccess(data));
    })
    .catch((error) => dispatch(authActions.registerError(error.message)));
};

export const login = (credentials) => (dispatch) => {
  dispatch(authActions.loginRequest());

  axios
    .post("/users/login", credentials)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(authActions.loginSuccess(data));
    })
    .catch((error) => dispatch(authActions.loginError(error.message)));
};

export const logout = () => (dispatch) => {
  dispatch(authActions.logoutRequest());

  axios
    .post("/users/logout")
    .then(({ data }) => {
      token.unset();
      dispatch(authActions.logoutSuccess(data));
    })
    .catch((error) => dispatch(authActions.logoutError(error.message)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);

  dispatch(authActions.getCurrentUserRequest());

  axios
    .get("/users/current")
    .then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))
    .catch((err) => dispatch(authActions.getCurrentUserError(err.message)));
};
const obj = {
  register,
  login,
  getCurrentUser,
};
export default obj;
