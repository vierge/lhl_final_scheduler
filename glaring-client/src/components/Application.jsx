/** @jsx jsx */

import React from "react";
// import axios from "axios";
// import Testbed from "./Testbed.jsx";
// import Button from "./Button.js";

import { css, jsx } from "@emotion/core";

import Topnav from "./Topnav";
import Sidebar from "./Sidebar/Index";
import GroupList from "./GroupList";

import useAppData from "../hooks/useAppData";

export default function Application() {
  const { state, setGroupData } = useAppData();

  return (
    <main>
      <Topnav />
      <Sidebar groups={state.groups} setGroup={setGroupData} />
      <GroupList groups={state.groups} setGroup={setGroupData} />
    </main>
  );
}
