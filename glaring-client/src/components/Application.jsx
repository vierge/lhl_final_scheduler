import React from "react";
import useAppData from "../hooks/useAppData";

import "./Application.scss";
import Testbed from "./Testbed.jsx";
import Sidebar from "./Sidebar/Index";

export default function Application() {
  const { state, setGroupData } = useAppData();

  const [state, setState] = useState("smoko");
  const [groups, setGroups] = useState([]);

  // const groups = [
  //   {
  //     id: 1,
  //     name: "Group 1",
  //   },
  //   {
  //     id: 2,
  //     name: "Group 2",
  //   },
  //   {
  //     id: 3,
  //     name: "Group 3",
  //   },
  // ];

  useEffect(() => {
    axios.get(`/api/groups`).then((response) => {
      console.log("AAA", response);
      setGroups(() => response.data);
    });
  });

  return (
    <body>
      <Sidebar />
      {/* <Testbed
        data-cy="db-response"
        users={state.users}
        groups={state.groups}
        setGroupData={setGroupData}
      /> */}
    </body>
  );
}
