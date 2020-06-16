/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import "./IndexGroup.scss";
import Button from "./ButtonGroup";
import GroupListItem from "../GroupListItem";
import GroupListItem2 from "./IndexGroupList";

export default function Group(props) {

  const groupList = props.groups.map((group) => {
    
    return (
      <GroupListItem2
        key={group.id}
        id={group.id}
        name={group.name}
        description={group.description}
        photo={group.photo}
        selected={group.name === props.group}
        setGroup={props.setGroup}
      />
    );
  });

  return (
    <ul
      css={css`
        list-style: none;
        display: flex;
        justify-content: space-evenly;
        flex-direction: row;
        flex-wrap: wrap;
        min-width: 400px;
        background-color: white;
      `}
    >
      {groupList}
    </ul>
  );
}