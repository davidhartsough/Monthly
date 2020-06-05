import React from "react";
import Page from "../../../components/Page";
import Month from "../../../components/month";
// import RequestsLink from "./RequestsLink";
// import MoreMenu from "./MoreMenu";

export default function MyPerson({ profile }) {
  const { username, name, uid, requests, ignored } = profile;
  const requestCount = requests.filter((i) => !ignored.includes(i)).length;
  return (
    <Page>
      <Month uid={uid} />
    </Page>
  );
  /*
  return (
    <Layout>
      <header className="flex-parent">
        <div className="flex-fill">
          <h1>{name}</h1>
          <h2>{username}</h2>
        </div>
        {requestCount > 0 && (
          <div className="flex-center">
            <RequestsLink requestCount={requestCount} />
          </div>
        )}
        <div className="flex-center">
          <MoreMenu />
        </div>
      </header>
      <hr />
      <Month initialMonth={month} uid={uid} />
    </Layout>
  );
  */
}
