import React, { useState } from "react";
import LinkList from "../../../components/LinkList";
import Link from "../../../components/Link";
import SearchBox from "../../../components/SearchBox";
import Empty from "../../../components/Empty";

export default function PeopleList({ data }) {
  const [search, setSearch] = useState("");
  const [listItems, setListItems] = useState(data);
  function handleSearch(text) {
    const query = text.trim().toUpperCase();
    let people = [...data];
    if (query.length > 0) {
      people = people.filter(
        ({ name, username }) =>
          name.toUpperCase().includes(query) ||
          username.toUpperCase().includes(query)
      );
    }
    setListItems(people);
    setSearch(text);
  }
  return (
    <>
      {data.length > 10 && <SearchBox value={search} setValue={handleSearch} />}
      <LinkList
        items={listItems}
        Empty={
          <Empty text="None of your connections match that search.">
            <Link to="Search">Find friends</Link>
          </Empty>
        }
      />
    </>
  );
}
