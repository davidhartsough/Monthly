import { connect } from "react-redux";
import Search from "./Search";
import { runQuery } from "../../../store/actions/search";

const mapStateToProps = ({ search: { loading, query, data } }) => ({
  loading,
  query,
  data,
});
const mapDispatchToProps = (dispatch) => ({
  submit: (query) => dispatch(runQuery(query)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Search);
