import { connect } from "react-redux";
import { fetchRequests } from "../../../store/actions/requests";
import Requests from "./Requests";

const mapStateToProps = ({ requests: { loading, data } }) => ({
  loading,
  data,
});
const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchRequests()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Requests);
