/** @jsx jsx */

import React from "react";
// import axios from "axios";
// import Testbed from "./Testbed.jsx";
// import GroupList from "./GroupList";
// import Button from "./Button.js";

import { css, jsx } from "@emotion/core";

import Topnav from "./Topnav";
import Sidebar from "./Sidebar/Index";

import useAppData from "../hooks/useAppData";

export default function Application() {
  const { state, setGroupData } = useAppData();

  return (
    <main>
      <Topnav />
      <Sidebar groups={state.groups} setGroup={setGroupData} />
      {/* <GroupList groups={groupsListing} /> */}
    </main>
  );
}

// return (
//   <main>
//     <section className="sidebar">
//       <nav classname="sidebar__menu">
//         Event Scheduler
//         <GroupList groups={groupslisting} group={group} setGroup={setGroup} />
//       </nav>
//       <br />
//       <section className="creation__card-right">
//         <section className="creation__actions">
//           <Button register>CreateNewGroup</Button>
//         </section>
//       </section>

//       <br />
//       <br />
//       <br />

//       <section className="creation__card-left">
//         <section className="creation__actions">
//           <Button register>
//             MySchedule (Shows all events you are going to)
//           </Button>
//         </section>
//       </section>
//     </section>
//   </main>
// );
