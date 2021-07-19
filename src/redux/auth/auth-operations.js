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

const register = (credentials) => async (dispatch) => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post("/users/signup", credentials);

    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error));
  }
};

export default {
  register,
};
