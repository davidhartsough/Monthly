import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { trySignInWithGoogle } from "../../store/db/auth";
import ScreenLoader from "../../components/ScreenLoader";
import Button from "../../components/Button";
import Divider from "../../components/Divider";

export default function Auth({ navigation }) {
  const [loading, setLoading] = useState(false);
  function googlePress() {
    setLoading(true);
    trySignInWithGoogle().then((status) => {
      if (status !== "success") setLoading(false);
    });
  }
  const goToSignIn = () => navigation.push("Sign In");
  const goToSignUp = () => navigation.push("Sign Up");
  if (loading) return <ScreenLoader />;
  return (
    <View style={styles.outer}>
      <View style={styles.inner}>
        <View>
          <Button action={goToSignIn} text="Sign in with email" />
          <Button
            action={googlePress}
            text="Sign in with Google"
            color="#4185f3"
          />
          <View style={styles.divider}>
            <Divider />
          </View>
          <Button
            action={goToSignUp}
            text="Sign up with email"
            color="#03a9f4"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inner: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  divider: {
    marginVertical: 8,
  },
});
