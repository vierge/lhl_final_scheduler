/**@jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import Event from "./Event/Index";

export default function EventsList(props) {
  const { events, addEvent, editEvent, delEvent } = props;

  const eventsList = events.map((element) => {
    const { id, name, description, location, start_time, end_time, photo } = element;
    console.log("this is firing")
    return <Event
      key={id}
      id={id}
      name={name}
      description={description}
      location={location}
      start_time={start_time}
      end_time={end_time}
      photo={photo}
      addEvent={addEvent}
      editEvent={editEvent}
      delEvent={delEvent}
    />;
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
