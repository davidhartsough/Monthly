import React, { useState } from "react";
import MonthPicker from "./MonthPicker";
import Recap from "./Recap";
import { lastMonth } from "../../date-utils";

export default function Month({ uid }) {
  const [month, setMonth] = useState(lastMonth);
  return (
    <>
      <MonthPicker updateMonth={setMonth} />
      <Recap month={month} uid={uid} />
    </>
  );
}
