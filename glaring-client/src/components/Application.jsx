import React from "react";
import useAppData from "../hooks/useAppData";

import "./Application.scss";
import Testbed from "./Testbed.jsx";
import Sidebar from "./Sidebar/Index";

export default function Application() {
  const { state } = useAppData();

  return (
    <body>
      <Sidebar />
      <Testbed
        data-cy="db-response"
        users={state.users}
        groups={state.groups}
      />
    </body>
  );
}
