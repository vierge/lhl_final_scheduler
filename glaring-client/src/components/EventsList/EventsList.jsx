/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import Event from "./Event";

const Header = (props) => (
  <header
    css={css`
      margin: 0;
      height: 150px;
      width: calc(100vw - 200px);
      background-color: ${props.colour};
    `}
  >
    <h1>{props.name}</h1>
    <button></button>
  </header>
);

export default function EventsList(props) {
  const { group, events } = props;
  console.log(events);

  const eventsList = events.map((element) => {
    const {
      id,
      name,
      description,
      location,
      start_time,
      end_time,
      photo,
    } = element;
    return (
      <Event
        key={id}
        id={id}
        name={name}
        description={description}
        location={location}
        start_time={start_time}
        end_time={end_time}
        photo={photo}
        init="SHOW"
      />
    );
  });

  return (
    // <Event init={"CREATE"} />
    <ul
      css={css`
        list-style: none;
        margin: 0 auto;
        padding: 0;
        background-color: violet;
      `}
    >
      <Header name={group.name} />
      {/* {eventsList} */}
    </ul>
  );
}
