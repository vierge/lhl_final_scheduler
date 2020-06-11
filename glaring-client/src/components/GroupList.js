import React from "react";
// import "./GroupList.scss";
import GroupListItem from "./GroupListItem.js";

export default function GroupList(props) {
  const groupList = props.groups.map((group) => {
    //DayList component maps over the days array to return DayListItem component as children
    return (
      <GroupListItem
        key={group.id}
        name={group.name}
        selected={group.name === props.group}
        setGroup={props.setGroup}
      />
    );
  });

  return <ul>{groupList}</ul>;
}
