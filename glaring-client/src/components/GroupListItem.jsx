/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

export default function GroupListItem(props) {
  const { id, name, colour, description, setGroup } = props;
  return (
    <li
      css={css`
        background-color: ${colour}
        list-style: none;
        margin: 20px;
        padding: 0;
        width: 450px;
        height: 400px;
      `}
      onClick={() => setGroup(id)} //onClick used to handle item click event that sets the day
      data-testid="group"
    >
      <h2 className>{name}</h2>
      <h3 className="text--light">{description}</h3>
    </li>
  );
}
