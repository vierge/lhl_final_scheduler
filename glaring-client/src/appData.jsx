import React, { createContext } from "react";
import axios from "axios";

const database = {
  group: async (action, payload) => {
    if (action === "ADD") {
      const newGroup = await axios.post(`/api/groups`, group);

      const newGroups = [...state.groups, await newGroup.data.group];
      return setState((prev) => ({
        ...prev,
        groups: newGroups,
        group_events: newGroup.data.id,
      }));
    }
    if (action === "EDIT") {
      const newGroup = await axios.patch(`/api/groups/${group_id}`, group);
      const newGroups = [...state.groups, await newGroup.data.group];
      return setState((prev) => ({
        ...prev,
        groups: newGroups,
        group_events: newGroup.data.id,
      }));
    }
    if (action === "DELETE") {
      await axios.delete(`api/groups/${id}`);
      const newGroups = state.groups.filter((group) => group.id !== id);
      setState((prev) => ({
        ...prev,
        groups: newGroups,
      }));
      alert(err);
    }
  },
  event: async (action, payload) => {
    try {
      let newEvent;
      if (action === "ADD") {
        newEvent = await axios.post(`/api/events`, event);
        const newEvents = [...state.group_events, newEvent];
        setState((prev) => ({ ...prev, group_events: newEvents }));
      }
      if (action === "EDIT") {
        const newEvent = await axios.patch(`/api/events/${event_id}`, event);
        const newEvents = [...state.group_events, newEvent];
        setState((prev) => ({ ...prev, group_events: newEvents }));
      }
      if (action === "DELETE") {
        await axios.delete(`api/events/${event_id}`);
        const newEvents = state.group_events.filter(
          (event) => event.id !== event_id
        );
        setState((prev) => ({ ...prev, group_events: newEvents }));
      }
      const newEvents = [...state.group_events, newEvent];
      setState((prev) => ({ ...prev, group_events: newEvents }));
    } catch (err) {
      alert(err);
    }
  },
};
