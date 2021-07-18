import axios from "axios";
import authActions from "./auth-actions";

axios.default.baseURL = "https://connections-api.herokuapp.com";

const token = {};

const register = (credentials) => async (dispatch) => {
  axios.post("/users/signup", credentials);

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
