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
    console.log(`group to get: ${group_id}`);
    const events = await axios.get(`/api/groups/${group_id - 1}/events`);
    console.log(events);
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

  async function addGroupData(group) {
    try {
      const newGroup = await axios.post(`/api/groups`, {
        headers: { "Content-Type": "application/json" },
        body: { group },
      });
      setGroupData(newGroup.data.id);
    } catch (err) {
      alert(err);
    }
  }

  useEffect(() => {
    // INIT DATA ON LANDING
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
