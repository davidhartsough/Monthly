import { connect } from "react-redux";
import { fetchConnections } from "../../../store/actions/connections";
import Home from "./Home";

const mapStateToProps = ({ connections: { loading, data } }) => ({
  loading,
  data,
});
const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchConnections()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
