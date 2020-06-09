import React from "react";
import useFetchData from "../hooks/fetchAppData";

import Testbed from "Testbed.jsx";

import "./Application.scss";
import Sidebar from "./Sidebar/Index";

export default function Application() {
  const state = useApplicationData();

  return (
    <body>
      <Sidebar />
      <Testbed users={state.users} groups={state.groups} />
    </body>
  );
}
