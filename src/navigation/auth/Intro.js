import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useColorScheme,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-community/async-storage";
import * as Linking from "expo-linking";
import { connect } from "react-redux";
import ScreenLoader from "../../components/ScreenLoader";
import Button from "../../components/Button";
import CreateProfile from "./CreateProfile";
import { colors } from "../../theme";

function ThemedText({ style, children }) {
  const theme = useColorScheme();
  return <Text style={[style, { color: colors[theme].font }]}>{children}</Text>;
}

function Intro({ auth }) {
  const theme = useColorScheme();
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(null);
  useEffect(() => {
    AsyncStorage.getItem(`@ready--${auth.uid}`).then((isReady) => {
      setReady(isReady === "true");
      setLoading(false);
    });
  }, [setReady]);
  function progress() {
    setLoading(true);
    AsyncStorage.setItem(`@ready--${auth.uid}`, "true").then(() => {
      setLoading(false);
      setReady(true);
    });
  }
  const learnMore = () =>
    Linking.openURL("https://davidhartsough.com/writings/monthly-moments/");
  if (loading) return <ScreenLoader />;
  if (ready) {
    return (
      <CreateProfile
        displayName={auth.displayName || ""}
        suggestion={auth.suggestion || ""}
      />
    );
  }
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors[theme].background }]}
    >
      <ScrollView style={styles.scroll}>
        <View style={styles.header}>
          <ThemedText style={styles.heading}>Monthly Moments</ThemedText>
          <ThemedText style={styles.subheading}>Introduction</ThemedText>
        </View>
        <View style={styles.intro}>
          <ThemedText style={styles.text}>
            Welcome! This app is a minimal yet meaningful social platform for
            you and your friends to share amazing moments with each other — one
            month at a time.
          </ThemedText>
          <ThemedText style={styles.strong}>
            How Monthly Moments works
          </ThemedText>
          <ThemedText style={styles.text}>
            It's like a monthly newsletter; everyone writes about Moments from
            their lives throughout each month, and then at the beginning of the
            next month, all of those Moments are shared out to their friends.
          </ThemedText>
          <ThemedText style={styles.strong}>Examples of Moments</ThemedText>
          <ThemedText style={styles.text}>
            Generally, Moments capture the the parts of your life that you want
            to share with your friends, including:
          </ThemedText>
          <ThemedText style={styles.text}>
            Generally, Moments capture the the parts of your life that you want
            to share with your friends, including:
          </ThemedText>
        </View>
        <View style={styles.list}>
          <ThemedText style={styles.listItem}>
            • Major life events, milestones
          </ThemedText>
          <ThemedText style={styles.listItem}>
            • Events you went to or were a part of
          </ThemedText>
          <ThemedText style={styles.listItem}>
            • Happenings, life updates, changes
          </ThemedText>
          <ThemedText style={styles.listItem}>
            • Projects, accomplishments, achievements
          </ThemedText>
          <ThemedText style={styles.listItem}>
            • Activities you spent time with or found meaningful
          </ThemedText>
          <ThemedText style={styles.listItem}>
            • Media, entertainment, games, movies, books
          </ThemedText>
        </View>
        <View style={styles.actions}>
          <Button action={learnMore} text="Learn More" />
          <Button action={progress} text="Get Started" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const mapStateToProps = ({ auth }) => ({ auth });
export default connect(mapStateToProps)(Intro);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    padding: 16,
  },
  header: {},
  heading: {
    fontSize: 24,
  },
  subheading: {
    fontSize: 20,
    marginVertical: 4,
  },
  intro: {},
  text: {
    fontSize: 16,
  },
  strong: {
    marginTop: 6,
    marginBottom: 4,
    fontSize: 18,
    fontWeight: "500",
  },
  list: {
    marginVertical: 4,
    padding: 2,
  },
  listItem: {},
  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 16,
    marginBottom: 64,
  },
});
