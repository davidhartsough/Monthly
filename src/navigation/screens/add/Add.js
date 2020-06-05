import React from "react";
import { currentMonthFormatted } from "../../../date-utils";
import Layout from "../../../components/Layout";
import Fetcher from "../../../components/Fetcher";
import NewMomentForm from "../../../components/moment/NewMomentForm";
import EditableMoment from "../../../components/moment/EditableMoment";

export default function Add({ loading, data, fetchData }) {
  return (
    <Layout>
      <header>
        <h1>Add to your month</h1>
        <h2>{currentMonthFormatted}</h2>
      </header>
      <Fetcher fetchData={fetchData} loading={loading}>
        <NewMomentForm />
        {data.map((m) => (
          <EditableMoment key={m.id} moment={m} />
        ))}
      </Fetcher>
    </Layout>
  );
}
