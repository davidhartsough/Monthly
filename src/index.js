import React from "react";
import StoreProvider from "./store";
import Authenticator from "./navigation/auth";
import Navigator from "./navigation";

export default () => (
  <StoreProvider>
    <Authenticator>
      <Navigator />
    </Authenticator>
  </StoreProvider>
);
