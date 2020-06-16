/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import "./IndexGroup.scss";
import GroupsListItem from "./GroupsListItem";

export default function GroupsList(props) {
  const groupList = props.groups.map((group) => {
    return (
      <GroupsListItem
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
