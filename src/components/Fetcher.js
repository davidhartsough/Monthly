import React, { useEffect } from "react";
import Loader from "./Loader";

export default function Fetcher({ loading, fetchData, children }) {
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  if (loading) return <Loader />;
  return children;
}
