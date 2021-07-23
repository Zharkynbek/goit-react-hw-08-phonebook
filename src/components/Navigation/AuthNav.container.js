import { connect } from "react-redux";
import { isAuthorized, getUsername } from "../../redux/auth/auth-selectors";
import { logout } from "../../redux/auth/auth-operations";
import { AuthNav } from "./AuthNav";

const mapStateToProps = (state) => ({
  isAuthorized: isAuthorized(state),
  userName: getUsername(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthNav);
