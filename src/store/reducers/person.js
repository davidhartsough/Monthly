const initialState = {
  loading: true,
  name: "",
  username: "",
  uid: "",
};

export default function person(state = initialState, action) {
  switch (action.type) {
    case "stop_loading_person": {
      return {
        ...state,
        loading: false,
      };
    }
    case "request_person": {
      return {
        ...state,
        loading: true,
      };
    }
    case "receive_person": {
      const { name, username, uid } = action.payload.data;
      return {
        loading: false,
        name,
        username,
        uid,
      };
    }
    default:
      return state;
  }
}
