const initialState = {
  loading: true,
  hasFetched: false,
  data: [],
};

/*
month: "2020-3",
text: "Worked on the Moments app. Check out the web app https://moments-memories.web.app/ and the Android app https://play.google.com/store/apps/details?id=com.davidhartsough.moments",
uid: "david",
username: "david",
*/

export default function thisMonthsMoments(state = initialState, action) {
  switch (action.type) {
    case "stop_loading_this_months_moments": {
      return {
        ...state,
        loading: false,
      };
    }
    case "request_this_months_moments": {
      return {
        ...state,
        loading: true,
      };
    }
    case "receive_this_months_moments": {
      const { data } = action.payload;
      return {
        loading: false,
        hasFetched: true,
        data,
      };
    }
    case "create_moment": {
      const { created } = action.payload;
      const data = [...state.data];
      data.push(created);
      return {
        ...state,
        loading: false,
        data,
      };
    }
    case "update_moment": {
      const { id, text } = action.payload;
      const data = [...state.data];
      const index = data.findIndex((m) => m.id === id);
      const moment = data[index];
      moment.text = text;
      data[index] = moment;
      return {
        ...state,
        loading: false,
        data,
      };
    }
    case "delete_moment": {
      const { id } = action.payload;
      const data = [...state.data];
      const index = data.findIndex((m) => m.id === id);
      data.splice(index, 1);
      return {
        ...state,
        loading: false,
        data,
      };
    }
    default:
      return state;
  }
}
