import { useState, useEffect } from "react";
import axios from "axios";

export default function useAppData() {
  const [state, setState] = useState({
    current: { user: [], group: [], event: [], view: "" },

    users: [],
    groups: [],
    group_events: [],
    memberships: [],
    reservations: [],
  });

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

  console.log("STATE", state);

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

  async function getDirectoryData() {
    setState((prev) => ({ ...prev, current: { view: "groups" } }));
  }

  async function addGroupData(group) {
    console.log(group);
    const newGroup = await axios.post(`/api/groups`, group);
    console.log("group to make:");
    console.log(newGroup);
    const newGroups = [...state.groups, await newGroup.data.group];
    setState((prev) => ({
      ...prev,
      groups: newGroups,
      group_events: newGroup.data.id,
    }));
  }

  async function addEventData(event) {
    try {
      const newEvent = await axios.post(`/api/events`, {
        headers: {
          "Content-Type": "application/json",
        },
        body: event,
      });
      const newEvents = [...state.group_events, newEvent];
      setState((prev) => ({ ...prev, group_events: newEvents }));
    } catch (err) {
      alert(err);
    }
  }

  async function editGroupData(group) {}

  // THIS IS EXPERIMENTAL:
  const dataReducer = (action, payload) => {
    switch (action) {
      case "ADDGROUP":
        return addGroupData(payload);
      case "ADDEVENT":
        return addEventData(payload);
      default:
        return false;
    }
  };

  async function removeGroup(id) {
    let newGroups = state.groups.filter((group) => group.id !== id);

    console.log("CLICKCANCEL", JSON.stringify(id));
    return axios.delete(`api/groups/${id}`).then((res) => {
      console.log(JSON.stringify(res));

      setState((prev) => ({
        ...prev,
        groups: newGroups,
      }));
    });
  }

  return {
    state,
    setGroupData,
    getDirectoryData,
    addGroupData,
    addEventData,
    removeGroup,
  };
}
