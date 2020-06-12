import React, { useState, useEffect } from "react";
import useAppData from "../hooks/useAppData.js";
// import axios from "axios";
// import Testbed from "./Testbed.jsx";
import GroupList from "./GroupList";
// import Button from "./Button.js";
import Topnav from "./Topnav";
import Sidebar from "./Sidebar/Index";
import { css, jsx } from "@emotion/core";

export default function Application() {
  const { state, setGroupData } = useAppData();

  // const [state, setState] = useState("smoko");
  // const [groups, setGroups] = useState([]);
  // const [group, setGroup] = useState("Group 1");

console.log("STATE", state);

  // const groupsListing = [
  //   {
  //     id: 1,
  //     name: "Group 1",
  //     color: "mediumslateblue",
  //   },
  //   {
  //     id: 2,
  //     name: "Group 2",
  //     color: "green",
  //   },
  //   {
  //     id: 3,
  //     name: "Group 3",
  //     color: "palegrey",
  //   },
  //   {
  //     id: 4,
  //     name: "Group 4",
  //     color: "deeppink",
  //   },
  //   {
  //     id: 5,
  //     name: "Group 5",
  //     color: "orange",
  //   },
  // ];

  // useEffect(() => {
  //   axios.get(`/api/groups`).then((response) => {
  //     console.log("AAA", response);
  //     setGroups(() => response.data);
  //   });
  // });

  return (
    <main>
      <Topnav />
        <GroupList groups={state.groups} setGroup={setGroupData} />
        <Sidebar groups={state.groups} setGroup={setGroupData} />

      {/* <Sidebar groups={groupsListing} />
      <GroupList groups={groupsListing} /> */}
    </main>
  );
}
