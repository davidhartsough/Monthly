const initialState = {
  loading: true,
  isSignedIn: false,
  uid: null,
  suggestion: "",
  displayName: "",
  hasProfile: false,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case "set_auth_loading": {
      return {
        ...state,
        loading: true,
      };
    }
    case "sign_in": {
      const { uid, displayName, suggestion, hasProfile } = action.payload;
      return {
        loading: false,
        isSignedIn: true,
        uid,
        suggestion,
        displayName,
        hasProfile,
      };
    }
    case "sign_out": {
      return {
        ...initialState,
        loading: false,
      };
    }
    case "finish_creating_profile": {
      return {
        ...state,
        loading: false,
        hasProfile: true,
      };
    }
    default:
      return state;
  }
}
