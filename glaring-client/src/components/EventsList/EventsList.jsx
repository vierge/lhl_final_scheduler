/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import Event from "./Event";

const Header = (props) => (
  <header
    css={css`
      margin: 0;
      padding-left: 20px;
      height: 150px;
      width: calc(100vw - 200px);
      background-color: ${props.colour};
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 40px;
      line-height: 0.8;
      border-bottom: 4px solid #333;
    `}
  >
    <h1
      css={css`
        margin: 0;
        width: calc(100% - 120px);
      `}
    >
      {props.name}
    </h1>
    <button
      css={css`
        font-size: 60px;
        height: 100%;
        border-style: none;
        border-left: 4px solid #5d53d2;
        padding: 0;
        width: 120px;
        background-color: white;
        &:hover {
          background-color: #333;
          color: ${props.colour};
        }
      `}
    >
      ++
    </button>
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
        margin: 0;
        padding: 0;
        background-color: violet;
      `}
    >
      <Header name={group.name} colour={group.colour} />
      {eventsList}
    </ul>
  );
}
