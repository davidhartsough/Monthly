import React from "react";
import Fetcher from "../../../components/Fetcher";
import Link from "../../../components/Link";
import Empty from "../../../components/Empty";
import PeopleList from "./PeopleList";

export default function Home({ data, loading, fetchData }) {
  return (
    <Fetcher fetchData={fetchData} loading={loading}>
      {data.length > 0 ? (
        <PeopleList data={data} />
      ) : (
        <Empty text="You haven't made any connections yet.">
          <Link to="Search" text="Find friends" />
        </Empty>
      )}
    </Fetcher>
  );
}
