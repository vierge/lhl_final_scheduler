import React from "react";
import "./GroupList.scss";

const classnames = require("classnames");

export default function GroupListItem(props) {
  const groupClass = classnames("group-list__item", {
    "group-list__item--selected": props.selected,
    // "group-list__item--full": props.spots === 0,
  });

  return (
    <li
      className={groupClass}
      onClick={() => props.setGroup(props.name)} //onClick used to handle item click event that sets the day
      data-testid="group"
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light"></h3>
    </li>
  );
}
