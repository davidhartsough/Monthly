import React, { useState, useEffect } from "react";
import { useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
import { handleAuth, setAuthLoading } from "../../store/actions/auth";
import { handleAuthState } from "../../store/db/auth";
import ScreenLoader from "../../components/ScreenLoader";
import Auth from "./Auth";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Intro from "./Intro";
import options from "../options";

const Stack = createStackNavigator();

function Authenticator({ auth, handleUser, keepLoading, children }) {
  const theme = useColorScheme();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    keepLoading();
    handleAuthState((user) => {
      setLoading(false);
      keepLoading();
      handleUser(user);
    });
  }, [keepLoading, handleUser]);
  if (auth.loading || loading) return <ScreenLoader />;
  if (auth.isSignedIn) {
    if (!auth.hasProfile) return <Intro />;
    return children;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={options(theme)}
      >
        <Stack.Screen name="Welcome" component={Auth} />
        <Stack.Screen name="Sign In" component={SignIn} />
        <Stack.Screen name="Sign Up" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapDispatchToProps = (dispatch) => ({
  handleUser: (user) => dispatch(handleAuth(user)),
  keepLoading: () => dispatch(setAuthLoading()),
});

export default connect(
  ({ auth }) => ({ auth }),
  mapDispatchToProps
)(Authenticator);
