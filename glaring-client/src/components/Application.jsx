import React, { useState, useEffect } from "react";
import "./Application.scss";
import axios from "axios";

import Sidebar from "./Sidebar/Index";


export default function Application() {

const [state, setState] = useState("smoko");
  const [groups, setGroups] = useState([]);

useEffect(() => {
    axios.get(`/api/groups`)  
      .then((response) => {

        console.log("AAA", response)
        setGroups(()=> response.data);
      });
  }, [state])
   

  return <Sidebar />;
}
