/**@jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import Event from "./Event/Index";

export default function EventsList(props) {
  const { events } = props;

  const eventsList = events.map((element) => {
    return <Event>{element.name}</Event>;
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
