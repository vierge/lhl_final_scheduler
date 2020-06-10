import React, {useState, useEffect} from "react";
// import useAppData from "../hooks/useAppData";

import "./Application.scss";
import axios from "axios"
// import Testbed from "./Testbed.jsx";
import Sidebar from "./Sidebar/Index";
import GroupList from "./GroupList.js";
import Button from "./Button.js";



export default function Application() {
  // const { state, setGroupData } = useAppData();

  // const [state, setState] = useState("smoko");
  // const [groups, setGroups] = useState([]);
  const [group, setGroup] = useState("Group 1");


  const groupslisting = [
    {
      id: 1,
      name: "Group 1",
    },
    {
      id: 2,
      name: "Group 2",
    },
    {
      id: 3,
      name: "Group 3",
    },
     {
      id: 4,
      name: "Group 4",
    },
     {
      id: 5,
      name: "Group 5",
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
     <section className="sidebar">
       <nav classname = "sidebar__menu">
        Event Scheduler
        <GroupList
          groups={groupslisting}
          group={group}
          setGroup={setGroup}
        />
      </nav>
      <br/>
     <section className = "creation__card-right">
          <section className = "creation__actions">
                  <Button register>CreateNewGroup</Button>
          </section>
      </section>

      <br/>
      <br/>
      <br/>

      <section className = "creation__card-left">
          <section className = "creation__actions">
                  <Button register>MySchedule (Shows all events you are going to)</Button>
          </section>
      </section>
    </section>

   </main>
  );
}
