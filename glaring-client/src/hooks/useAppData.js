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

  const setGroupData = (groups) => setState({ ...state, groups }); //updates the state with the new groups

  async function setGroupData(group_id) {
    console.log(state.groups);
    const { events, memberships, reservations } = await axios.get(
      `/api/groups/${group_id}/events`
    );
    // console.log(events.data);
    const group = state.groups[group_id - 1];
    setState((prev) => ({
      ...prev,
      current: { group: group },
      group_events: events.data,
      memberships,
      reservations,
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

  return { state, setGroupData };
}
