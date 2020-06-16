import React from "react";
import "./Index.scss";
import Button from "../Button";
import EventForm from "./Form";
import ShowEvent from "./Show";
import useVisMode from "../../hooks/useVisMode";
// import Axios from 'axios';

export default function Event(props) {
  const {
    name,
    description,
    start_time,
    end_time,
    photo,
    init,
    addEvent,
  } = props;

  const { mode, transition, back } = useVisMode(init);

  return (
    <>
      {mode === "CREATE" && (
        <EventForm addEvent={addEvent} transition={transition} />
      )}
      {mode === "SHOW" && (
        <ShowEvent
          name={name}
          description={description}
          start_time={start_time}
          end_time={end_time}
          photo={photo}
        />
      )}
    </>
  );
}
