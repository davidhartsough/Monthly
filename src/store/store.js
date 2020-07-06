import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import rootReducer from "./reducers";

const persistConfig = {
  key: "Monthly_Moments_Root",
  storage: AsyncStorage,
  blacklist: ["auth", "profile", "requests"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default createStore(persistedReducer, applyMiddleware(thunk));
