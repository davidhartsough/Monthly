import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Fetcher from "../../../components/Fetcher";
import NewMomentForm from "./NewMomentForm";
import EditableMoment from "./EditableMoment";

export default function Add({ loading, data, fetchData }) {
  return (
    <SafeAreaView style={styles.container}>
      <Fetcher fetchData={fetchData} loading={loading}>
        <ScrollView style={styles.scroll}>
          <NewMomentForm />
          {data.map((m) => (
            <EditableMoment key={m.id} moment={m} />
          ))}
        </ScrollView>
      </Fetcher>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
    paddingBottom: 48,
  },
});
