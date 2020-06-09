import react, { useState, useEffect } from "react";
import axios from "axios";

export default async function initData() {
  const [state, setState] = useState({
    current: { user: [], group: [], event: [] },

    users: [],
    groups: null,
    group_events: [],
    memberships: [],
    reservations: [],
  });

  const setGroup = (group) => setState((prev) => ({...prev, current: group}));

  useEffect(() => {
    const data = [
      axios.get('/api/users'),
      axios.get('/api/groups')
    ]

    const [users, groups] = await data;

    setState((prev) => ({
      ...prev,
      users: users.data,
      groups: groups.data
    }))
    
  }, [])

  return { state }
}
