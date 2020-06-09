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

  async function setGroupData(group_id) {
    const { events, memberships, reservations } = await axios.get(
      `/api/groups/${group_id}/events`
    );
    const group = state.groups[group_id];
    setState((prev) => ({
      ...prev,
      current: group,
      group_events: events,
      memberships,
      reservations,
    }));
    return setGroup(group);
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
