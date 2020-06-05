const initialState = {
  name: "",
  username: null,
  connections: [],
  requests: [],
  requested: [],
  ignored: [],
  uid: null,
};

/*
uid: "asdf1234",
username: "david",
name: "David Hartsough",
connections: ["steve"],
requests: ["alicia"],
requested: ["jen"],
ignored: ["alicia"],
searchTerms: ["DAVID", "HARTSOUGH", "DAVID HARTSOUGH"],
*/

export default function profile(state = initialState, action) {
  switch (action.type) {
    case "receive_profile": {
      const { profile } = action.payload;
      return profile;
    }
    case "create_profile_connection": {
      const { username } = action.payload;
      const connections = [...state.connections];
      connections.push(username);
      return {
        ...state,
        connections,
      };
    }
    case "delete_profile_connection": {
      const { username } = action.payload;
      const connection = [...state.connection];
      const index = connection.findIndex((un) => un === username);
      connection.splice(index, 1);
      return {
        ...state,
        connection,
      };
    }
    case "delete_profile_request": {
      const { username } = action.payload;
      const requests = [...state.requests];
      const index = requests.findIndex((un) => un === username);
      requests.splice(index, 1);
      return {
        ...state,
        requests,
      };
    }
    case "create_profile_request": {
      const { username } = action.payload;
      const requested = [...state.requested];
      requested.push(username);
      return {
        ...state,
        requested,
      };
    }
    case "create_profile_ignore": {
      const { username } = action.payload;
      const ignored = [...state.ignored];
      ignored.push(username);
      return {
        ...state,
        ignored,
      };
    }
    case "delete_profile_ignore": {
      const { username } = action.payload;
      const ignored = [...state.ignored];
      const index = ignored.findIndex((un) => un === username);
      if (index !== -1) ignored.splice(index, 1);
      return {
        ...state,
        ignored,
      };
    }
    case "set_profile_name": {
      const { name } = action.payload;
      return {
        ...state,
        name,
      };
    }
    default:
      return state;
  }
}
