const initialState = {
  loading: true,
  hasFetched: false,
  data: [],
};

export default function requests(state = initialState, action) {
  switch (action.type) {
    case "stop_loading_requests": {
      return {
        ...state,
        loading: false,
      };
    }
    case "request_requests": {
      return {
        ...state,
        loading: true,
      };
    }
    case "receive_requests": {
      const { data } = action.payload;
      return {
        loading: false,
        hasFetched: true,
        data,
      };
    }
    case "delete_request": {
      const { username } = action.payload;
      const data = [...state.data];
      const index = data.findIndex((p) => p.username === username);
      data.splice(index, 1);
      return {
        loading: false,
        data,
      };
    }
    default:
      return state;
  }
}
