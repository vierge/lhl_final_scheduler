/** @jsx jsx */

import React, { useState } from "react";


// import axios from "axios";
// import Testbed from "./Testbed.jsx";
// import Button from "./Button.js";

import { css, jsx } from "@emotion/core";

import Topnav from "./Topnav";
import Sidebar from "./Sidebar/Index";
import GroupList from "./GroupList";
import EventsList from "./EventsList";

import useAppData from "../hooks/useAppData";

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
   
  const { state, setGroupData, getDirectoryData, removeGroup } = useAppData();

  const { currentGroup, setCurrentGroup } = useState("Black Lives Matter");

  console.log(state);

  return (
    <body>
      <Topnav />
      <Main>
      {/* <GroupList groups={state.groups}/> */}
      {/* <GroupList groups={state.events} /> */}
            <Sidebar groups={state.groups} setGroup={setGroupData} getDirectory={getDirectoryData} setCurrentGroup={setCurrentGroup} removeGroup={removeGroup} />

        {state.current.view === "groups" && <GroupList groups={state.groups} />}
        {state.current.view === "events" && (
          <EventsList events={state.group_events} />
        )}
      </Main>
    </body>
  );
}
