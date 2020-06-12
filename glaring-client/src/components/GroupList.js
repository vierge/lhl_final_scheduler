/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
// import "./GroupList.scss";
import GroupListItem from "./GroupListItem.js";

export default function GroupList(props) {
  const groupList = props.groups.map((group) => {
    //DayList component maps over the days array to return DayListItem component as children
    return (
      <GroupListItem
        key={group.id}
        id={group.id}
        name={group.name}
        selected={group.name === props.group}
        setGroup={props.setGroup}
      />
    );
  });

  return (
    <ul
      css={css`
        margin: 0;
        padding: 0;
        position: relative;
        left: 200px;
        display: flex;
        justify-content: space-evenly;
        flex-direction: row;
        flex-wrap: wrap;
        width: calc(100% - 200px);
        min-width: 400px;
        background-color: slategrey;
      `}
    >
      {groupList}
    </ul>
  );
}
