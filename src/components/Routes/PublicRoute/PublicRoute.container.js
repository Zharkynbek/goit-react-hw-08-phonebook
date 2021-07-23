import { connect } from "react-redux";
import { isAuthorized } from "../../../redux/auth/auth-selectors";
import { PublicRoute } from "./PublicRoute";

const mapStateToProps = (state) => ({
  isAuthenticated: isAuthorized(state),
});

export default connect(mapStateToProps)(PublicRoute);
