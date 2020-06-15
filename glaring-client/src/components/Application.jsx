/** @jsx jsx */

import React from "react";

import { css, jsx } from "@emotion/core";
import Topnav from "./Topnav";
import Sidebar from "./Sidebar/Index";
import GroupList from "./GroupList";
import EventsList from "./EventsList";

import { useDataState } from "../hooks/useDatabase";

const Main = (props) => (
  <main
    css={css`
      margin: 0;
      padding: 0;
      width: calc(100% - 200px);
      position: relative;
      left: 200px;
      background-color: black;
    `}
    {...props}
  />
);

export default function Application() {
  const state = useDataState();

  console.log(state);

  return (
    <body>
      {/* <DatabaseProvider> */}
      <Topnav />
      <Sidebar
        groups={state.groups}
        // setGroup={setGroupData}
        // addGroup={addGroupData}
        // getDirectory={getDirectoryData}
        // removeGroup={removeGroup}
      />

      <Main>
        {state.current.view === "groups" && <GroupList groups={state.groups} />}
        {state.current.view === "events" && (
          <EventsList events={state.group_events} />
        )}
      </Main>
      {/* </DatabaseProvider> */}
    </body>
  );
}
