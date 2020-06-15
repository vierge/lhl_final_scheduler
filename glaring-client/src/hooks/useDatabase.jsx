import React, { useEffect, createContext, useReducer, useContext } from "react";
import axios from "axios";

function useDatabase(initialState) {
  const stateReducer = (state, action) => {
    switch (action.type) {
      // INTERFACE ACTIONS:

      case "INIT": {
        // INITIALIZE THE STATE
        return {
          ...state,
          users: action.item.users,
          groups: action.item.groups,
        };
      }
      case "SETGROUP": {
        // SET CURRENT GROUP
        console.log(action.item);
        const group = action.item.group;
        const events = action.item.events;
        return {
          ...state,
          current: {
            ...state.user,
            ...state.event,
            group: group,
            view: "events",
          },
          group_events: events,
          // memberships,
          // reservations,
        };
      }
      // GROUP ACTIONS:

      case "ADDGROUP": {
        // ADD A NEW GROUP TO DB
        console.log(action.item);
        const currentGroup = action.item.data.group;
        return {
          ...state,
          current: {
            ...state.user,
            ...state.event,
            ...state.view,
            group: currentGroup,
          },
          groups: [...state.groups, action.item.data.group],
          group_events: [],
        };
      }
      case "EDITGROUP": {
        return {
          ...state,
          groups: action.item.groups,
          group_events: action.item.id,
        };
      }
      case "DELGROUP": {
        const event_id = action.item;
        const groups = state.groups.filter((group) => group.id !== event_id);
        return {
          ...state,
          groups: groups,
        };
      }
      // EVENT ACTIONS

      //ADD AN EVENT
      case "ADDEVENT": {
        return {
          ...state,
          group_events: [action.item.data.event, ...state.group_events],
        };
      }
      // EDIT AN EVENT
      case "EDITEVENT": {
        const newEvent = action.item.event;
        return {
          ...state,
          group_events: [newEvent, ...state.group_events],
        };
      }
      // DELETE AN EVENT
      case "DELEVENT": {
        const event_id = action.item;
        const events = state.group_events.filter(
          (event) => event.id !== event_id
        );
        return {
          ...state,
          group_events: events,
        };
      }

      case "GETDIRECTORY": {
        return { ...state, current: { user: state.user, view: "groups" } };
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
      case "INIT":
        {
          Promise.all([axios.get("/api/users"), axios.get("/api/groups")]).then(
            (all) => {
              console.log(all);
              const [users, groups] = all;
              return dispatch({
                type: "INIT",
                item: { users: users.data, groups: groups.data },
              });
            }
          );
        }
        break;
      // SET CURRENT GROUP
      case "SETGROUP": {
        const group_id = payload;
        const events = await axios.get(`/api/groups/${group_id}/events`);
        console.log(events.data);
        return dispatch({
          type: "SETGROUP",
          item: { events: events.data, group: group_id },
        });
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
        await axios
          .delete(`/api/groups/${group_id}`)
          .catch((err) => alert(err));
        return dispatch({
          type: "DELGROUP",
          item: group_id,
        });
      }

      // EVENT ACTIONS

      //ADD AN EVENT
      case "ADDEVENT": {
        const event = payload;
        event["user_id"] = state.current.user.id;
        const group_id = state.current.group.id;
        return dispatch({
          type: "ADDEVENT",
          item: await axios.post(`/api/groups/${group_id}/events`, event),
        });
      }
      // // EDIT AN EVENT
      // case "EDITEVENT": {
      // }
      // // DELETE AN EVENT
      // case "DELEVENT": {
      // }
      case "GETDIRECTORY": {
        return dispatch({ type: "GETDIRECTORY" });
      }
      default: {
        return alert("INVALID INPUT");
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

const StateContext = createContext();
const DataContext = createContext();

function DatabaseProvider({ children }) {
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

  const { state, callDatabase } = useDatabase(initialState);

  return (
    <StateContext.Provider value={state}>
      <DataContext.Provider value={callDatabase}>
        {children}
      </DataContext.Provider>
    </StateContext.Provider>
  );
}

function useDataState() {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error("useStateContext must be used within a DatabaseProvider");
  }
  return context;
}

function useDataDispatch() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useDataContext must be used within a DatabaseProvider");
  }
  return context;
}

export { DatabaseProvider, useDataState, useDataDispatch };
