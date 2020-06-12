/**@jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

export default function EventsList(props) {
  const { events } = props;

  const eventsList = events.map((element) => {
    return (
      <li
        css={css`
      width: 80%
      margin: 0 auto;
      background-color: white;
    `}
      >
        {element.name}
      </li>
    );
  });

  return (
    <ul
      css={css`
        list-style: none;
        margin: 0;
        padding: 0;
        background-color: violet;
      `}
    >
      {eventsList}
    </ul>
  );
}
