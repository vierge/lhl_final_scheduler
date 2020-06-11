import React from "react";

export default function GroupListItem(props) {
  return (
    <li
      onClick={() => props.setGroup(props.name)} //onClick used to handle item click event that sets the day
      data-testid="group"
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light"></h3>
    </li>
  );
}
