const initialState = {
  loading: true,
  hasFetched: false,
  data: [],
};

export default function connections(state = initialState, action) {
  switch (action.type) {
    case "stop_loading_connections": {
      return {
        ...state,
        loading: false,
      };
    }
    case "request_connections": {
      return {
        ...state,
        loading: true,
      };
    }
    case "receive_connections": {
      const { data } = action.payload;
      return {
        loading: false,
        hasFetched: true,
        data,
      };
    }
    case "create_connection": {
      const { created } = action.payload;
      const data = [...state.data];
      data.push(created);
      return {
        loading: false,
        data,
      };
    }
    case "delete_connection": {
      const { deleted } = action.payload;
      const data = [...state.data];
      const index = data.findIndex(
        ({ username }) => username === deleted.username
      );
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
