const initialState = {
  loading: false,
  query: "",
  data: [],
};

export default function search(state = initialState, action) {
  switch (action.type) {
    case "request_results": {
      return {
        loading: true,
        query: "",
        data: [],
      };
    }
    case "receive_results": {
      const { query, data } = action.payload;
      return {
        loading: false,
        query,
        data,
      };
    }
    default:
      return state;
  }
}
