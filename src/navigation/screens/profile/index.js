import { connect } from "react-redux";
import Profile from "./Profile";

const mapStateToProps = ({ profile }) => ({ profile });
export default connect(mapStateToProps)(Profile);
