import React, { useState, useEffect } from "react";
import "./Application.scss";
import axios from "axios";

import Sidebar from "./Sidebar/Index";


export default function Application() {

const [state, setState] = useState("smoko");
  const [groups, setGroups] = useState([]);



const groups = [
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
];



useEffect(() => {
    axios.get(`/api/groups`)  
      .then((response) => {

        console.log("AAA", response)
        setGroups(()=> response.data);
      });
  })
   
  return <Sidebar/>; 

}
