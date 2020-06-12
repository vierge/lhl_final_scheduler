import { useState, useEffect } from "react";
import axios from "axios";

export default function useAppData() {
  const [state, setState] = useState({
    current: { user: [], group: [], event: [] },

    users: [],
    groups: [],
    group_events: [],
    memberships: [],
    reservations: [],
  });


 async function cancel(id) {
  let newGroups = state.groups.filter(group => group.id !== id);

  console.log("CLICKCANCEL", JSON.stringify(id));
  return axios.delete(`api/groups/${id}`).then((res) => {

    console.log(JSON.stringify(res))
   
    setState({ 
      ...state, 
      groups: newGroups
     });
    });
};

  console.log("STATE", state);

  // const setGroupData = (groups) => setState({ ...state, groups }); //updates the state with the new groups

  async function setGroupData(group_id) {
    console.log(state.groups);

    const events = await axios.get(`/api/groups/${group_id}/events`);

    const group = state.groups[group_id - 1];
    setState((prev) => ({
      ...prev,
      current: { group: group },
      group_events: events.data,
      // memberships,
      // reservations,
    }));
    console.log(state);
  }

  useEffect(() => {
    Promise.all([axios.get("/api/users"), axios.get("/api/groups")]).then(
      (all) => {
        console.log(all);
        const [users, groups] = all;
        setState((prev) => ({
          ...prev,
          users: users.data,
          groups: groups.data,
        }));
      }
    );
  }, []);

  return { state, setGroupData, cancel };
}
