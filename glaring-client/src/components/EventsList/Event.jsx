/**@jsx jsx */

import { css, jsx } from "@emotion/core";
import EventForm from "./Form";
import ShowEvent from "./Show";
import useVisMode from "../../hooks/useVisMode";
// import Axios from 'axios';

const Frame = (props) => (
  <div
    css={css`
      margin-top: 18px;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      width: 100%;
      height: 150px;
      background-color: white;
    `}
    {...props}
  />
);

export default function Event(props) {
  const {
    id,
    name,
    description,
    start_time,
    end_time,
    photo,
    init,
    going,
    addEvent,
  } = props;

  const { mode, transition, back } = useVisMode(init);

  return (
    <Frame>
      {mode === "CREATE" && (
        <EventForm addEvent={addEvent} transition={transition} />
      )}
      {mode === "SHOW" && (
        <ShowEvent
          id={id}
          name={name}
          description={description}
          start_time={start_time}
          end_time={end_time}
          photo={photo}
          going={going}
        />
      )}
    </Frame>
  );
}
