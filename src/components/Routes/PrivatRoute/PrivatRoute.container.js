import { connect } from "react-redux";
import { isAuthorized } from "../../../redux/auth/auth-selectors";
import { PrivateRoute } from "./PrivateRoute";

const mapStateToProps = (state) => ({
  isAuthenticated: isAuthorized(state),
});

export default connect(mapStateToProps)(PrivateRoute);
