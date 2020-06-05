const initialState = {
  loading: true,
  month: null,
  uid: null,
  moments: [],
};

export default function recap(state = initialState, action) {
  switch (action.type) {
    case "stop_loading_recap": {
      return {
        ...state,
        loading: false,
      };
    }
    case "request_recap": {
      return {
        ...state,
        loading: true,
      };
    }
    case "receive_recap": {
      const { month, uid, moments } = action.payload;
      return {
        loading: false,
        month,
        uid,
        moments,
      };
    }
    default:
      return state;
  }
}
