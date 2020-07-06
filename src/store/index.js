import React from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "./store";
import ScreenLoader from "../components/ScreenLoader";
import { initDatabase } from "./db/fb";

initDatabase();

const persistor = persistStore(store);

export default ({ children }) => (
  <Provider store={store}>
    <PersistGate loading={<ScreenLoader />} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
);
