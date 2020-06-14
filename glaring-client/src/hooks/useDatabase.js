import { useState, useEffect, createContext, useReducer } from "react";
import axios from "axios";

export default function useAppData() {
  const initialState = {
    current: {
      user: {
        id: 1,
        name: "dummy",
        password: "i.am.insecure",
        email: "person@website.thing",
      },
      group: [],
      event: [],
      view: "",
    },

    users: [],
    groups: [],
    group_events: [],
    memberships: [],
    reservations: [],
  };

  const stateReducer = (state, action) => {
    switch (action.type) {
      // INTERFACE ACTIONS:

      case "INIT":
        // INITIALIZE THE STATE
        return {
          ...state,
          users: action.item.users,
          groups: action.item.groups,
        };
      case "SETGROUP":
        // SET CURRENT GROUP
        const group = action.item.group;
        const events = action.item.events;
        return {
          ...state,
          current: {
            ...state.user,
            ...state.event,
            group: group,
          },
          events: events,
          // memberships,
          // reservations,
        };

      // GROUP ACTIONS:

      case "ADDGROUP":
        // ADD A NEW GROUP TO DB
        const currentGroup = action.item.group;
        return {
          ...state,
          current: {
            ...state.user,
            ...state.event,
            ...state.view,
            group: currentGroup,
          },
          group_events: action.item.events,
        };
      case "EDITGROUP":
        return {
          ...state,
          groups: action.item.groups,
          group_events: action.item.id,
        };
      case "DELGROUP": {
        const groups = state.groups.filter((group) => group.id !== event_id);
        return {
          ...state,
          groups: action.item.groups,
        };
      }
      // EVENT ACTIONS

      //ADD AN EVENT
      case "ADDEVENT": {
        return {
          ...state,
          group_events: [action.item.event, ...state.group_events],
        };
      }
      // EDIT AN EVENT
      case "EDITEVENT": {
        return {
          ...state,
          group_events: [newEvents, ...state.group_events],
        };
      }
      // DELETE AN EVENT
      case "DELEVENT": {
        const events = state.group_events.filter(
          (event) => event.id !== event_id
        );
        return {
          ...state,
          group_events: events,
        };
      }
      default: {
        alert("INVALID INPUT");
      }
    }
  };

  // to use database: callDatabase(string, object: {data to send})

  const [state, dispatch] = useReducer(stateReducer, initialState);

  const callDatabase = async (action, payload) => {
    switch (action) {
      case "INIT": {
        Promise.all([axios.get("/api/users"), axios.get("/api/groups")]).then(
          (all) => {
            const [users, groups] = all;
            return dispatch({ type: "INIT", item: { users, groups } });
          }
        );
      }
      // SET CURRENT GROUP
      case "SETGROUP": {
        group_id = payload.group_id;
        const events = await axios.get(`/api/groups/${group_id}/events`)[data];
        return dispatch({ type: "SETGROUP", item: events });
      }

      // GROUP ACTIONS:

      case "ADDGROUP": {
        const group = payload;
        return dispatch({
          type: "ADDGROUP",
          item: await axios.post(`/api/groups`, group),
        });
      }
      // ADD A NEW GROUP TO DB

      case "EDITGROUP": {
        const { group, group_id } = payload;
        return dispatch({
          type: "EDITGROUP",
          item: await axios.patch(`/api/groups/${group_id}`, group),
        });
      }

      case "DELGROUP": {
        const group_id = payload;
        return dispatch({
          type: "DELGROUP",
          item: await axios.delete(`/api/groups/${group_id}`),
        });
      }
      // EVENT ACTIONS

      //ADD AN EVENT
      // case "ADDEVENT": {
      // }
      // // EDIT AN EVENT
      // case "EDITEVENT": {
      // }
      // // DELETE AN EVENT
      // case "DELEVENT": {
      // }
      default: {
        alert("INVALID INPUT");
      }
    }
  };

  useEffect(() => {
    callDatabase("INIT");
  }, []);
  return {
    state,
    callDatabase,
  };
}
