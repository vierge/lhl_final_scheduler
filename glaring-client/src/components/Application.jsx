import React, { useState, useEffect } from "react";
import useAppData from "../hooks/useAppData.js";
// import axios from "axios";
// import Testbed from "./Testbed.jsx";
import GroupList from "./GroupList.js";
// import Button from "./Button.js";
import Topnav from "./Topnav";
import Sidebar from "./Sidebar/Index";
import { css, jsx } from "@emotion/core";

export default function Application() {
  const { state, setGroupData } = useAppData();

  const { currentGroup, setCurrentGroup } = useState("Black Lives Matter");

  // const [state, setState] = useState("smoko");
  // const [groups, setGroups] = useState([]);
  // const [group, setGroup] = useState("Group 1");

  const eventsListing = [
    {
      id: 1,
      name: "Event 1",
      color: "mediumslateblue",
    },
    {
      id: 2,
      name: "Event 2",
      color: "green",
    },
    {
      id: 3,
      name: "Event 3",
      color: "palegrey",
    },
    {
      id: 4,
      name: "Event 4",
      color: "deeppink",
    },
    {
      id: 5,
      name: "Event 5",
      color: "orange",
    },
  ];

  // useEffect(() => {
  //   axios.get(`/api/groups`).then((response) => {
  //     console.log("AAA", response);
  //     setGroups(() => response.data);
  //   });
  // });

  return (
    <main>
      <Topnav />
      {/* <GroupList groups={state.groups} /> */}

      <GroupList groups={state.events} />
      <Sidebar groups={state.groups} setCurrentGroup={setCurrentGroup} />

    </main>
  );
}
