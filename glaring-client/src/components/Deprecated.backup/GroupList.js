/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
// import "./GroupList.scss";
import GroupListItem from "./GroupListItem666.js";

export default function GroupList(props) {
  const groupList = props.groups.map((group) => {
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
        z-index: 5;
        position: relative;
        display: flex;
        justify-content: space-evenly;
        flex-direction: row;
        flex-wrap: wrap;
        min-width: 400px;
        background-color: slategrey;
      `}
    >
      {groupList}
    </ul>
  );
}
