/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
// import GroupsListItem from "./GroupsList/GroupsListItem";
import Login from "./Login/Index";
import Registration from "./Registration/RegistrationForm";
import GroupsList from "./GroupsList/Index";
import { useDataState } from "../hooks/useDatabase.jsx"
import GroupsCardLanding from "./GroupsCardLanding"


export default function LandingPage(props) {

  const state = useDataState();

  console.log("state are this: ---> ", state)

  const groupListRendering = state.groups.map((group) => {
    console.log("Group from the map func:", group)
    return (
      <GroupsCardLanding
      key={group.id}
      id={group.id}
      name={group.name}
      description={group.description}
      photo={group.photo}
      selected={group.name === props.group}
      setGroup={props.setGroup}
    />
    )
  })

  return (
    <body>
      <div>
        <div>
          Welcome to glaring. Use this app to create groups, or join an exsting one. When you are part of a group, you will have access to the events organized by that group!
        </div>
        <br/>
        <div>
          Take a look below to see some of the groups that you could join! All you have to do is register and login!
        </div>
      </div>

      <div>
        <Login />
      </div>
      <div>
        <Registration />
      </div>

      <div className="group__cards">
        {groupListRendering}
      </div>
 
    </body>
  )

}