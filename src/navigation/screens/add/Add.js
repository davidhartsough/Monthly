import React from "react";
import Fetcher from "../../../components/Fetcher";
import NewMomentForm from "./NewMomentForm";
import EditableMoment from "./EditableMoment";

export default function Add({ loading, data, fetchData }) {
  return (
    <Fetcher fetchData={fetchData} loading={loading}>
      <NewMomentForm />
      {data.map((m) => (
        <EditableMoment key={m.id} moment={m} />
      ))}
    </Fetcher>
  );
}
