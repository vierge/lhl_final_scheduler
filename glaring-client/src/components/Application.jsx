/** @jsx jsx */

import React from "react";

import { css, jsx } from "@emotion/core";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar/Index";
import EventsList from "./EventsList/EventsList";
import GroupsList from "./GroupsList/Index";
import Login from "./Login/Index";
import "./Application.scss";
import Registration from "./Registration/RegistrationForm";

import { useDataState } from "../hooks/useDatabase";

const Main = (props) => (
  <main
    css={css`
      margin: 0;
      padding: 0;
      width: calc(100% - 200px);

      position: relative;
      left: 200px;
      top: 40px;
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
      {/* {isAuth ? ( */}

      <NavBar />
      <Sidebar groups={state.current.user.id && state.groups} />

      <Main>
        {/* {<Registration/>} */}

        {state.current.view === "login" && <Login />}
        {state.current.view === "register" && <Registration />}
        {state.current.view === "directory" && (
          <GroupsList groups={state.directory} />
        )}
        {state.current.view === "events" && (
          <EventsList group={state.current.group} events={state.group_events} />
        )}
      </Main>
    </body>
  );
}
