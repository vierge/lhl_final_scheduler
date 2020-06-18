/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import "./Index.scss";
import { useDataDispatch } from "../../hooks/useDatabase";

// import Axios from 'axios';

export default function ShowEvent(props) {
  const { id, name, description, start_time, end_time, photo, going } = props;

  const callDatabase = useDataDispatch();

  console.log(`${id}, ${name}, ${going}`);

  const GridContainer = (props) => (
    <div
      css={css`
        display: grid;
        height: 150px;
        width: 100%;
        grid-template-rows: 1fr 3fr;
        grid-template-columns: 225px auto 170px 120px;
        grid-template-areas:
          "photo name time reserve"
          "photo desc time reserve";
        font-family: "Quicksand", sans-serif;
      `}
      {...props}
    />
  );

  const PhotoFrame = (props) => (
    <div
      css={css`
        grid-area: photo;
        border: 3px solid #555;
        justify-content: center;
        display: flex;
        align-items: center;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        overflow: hidden;
      `}
      {...props}
    />
  );

  const TitleBar = (props) => (
    <div
      css={css`
        grid-area: name;
        font-size: 24px;
        border: 3px solid #555;
        margin: 0 10px;
        padding-left: 7px;
        width: calc(100% - 20px);
      `}
      {...props}
    />
  );

  const Text = (props) => (
    <div
      css={css`
        border: 3px solid black;
        margin: 10px;
        margin-bottom: 0;
        padding: 7px;
      `}
      {...props}
    />
  );

  const Timing = (props) => {
    // const { time } = props;
    const time = new Date(props.time);
    return (
      <div
        css={css`
          padding-right: 13px;
          grid-area: time;
          display: grid;
          grid-template-rows: 1fr 1fr;
          grid-template-columns: 1fr 1fr;
          font-size: 64px;
          color: #12006887;

          & p {
            margin: 0;
          }
        `}
        {...props}
      >
        <div>{time.getDate()}</div>
        <div
          css={css`
            font-size: 31px;
            text-align: center;
          `}
        >
          <p>
            {time.toLocaleString("default", { month: "short" }).toUpperCase()}
          </p>
          <p>{time.getFullYear()}</p>
        </div>
        <div>
          {time.getHours().toLocaleString("en-US", { minimumIntegerDigits: 2 })}
        </div>
        <div>
          :
          {time
            .getMinutes()
            .toLocaleString("en-US", { minimumIntegerDigits: 2 })}
        </div>
      </div>
    );
  };

  const Reserve = (props) => {
    const { going } = props;
    console.log(going);
    const green = going === true ? `green` : `#555`;
    const red = going === false ? `#771f1f` : `#555`;

    return (
      <div
        css={css`
          grid-area: reserve;

          & button {
            display: block;
            border-style: none;
            border: none;
            color: white;
            height: 50%;
            width: 100%;
            font-size: 32px;
          }
        `}
        {...props}
      >
        <button
          css={css`
            background-color: ${green};
            &:hover {
              border: 4px solid green;
              color: green;
            }
            &:active {
              background-color: green;
              color: white;
            }
          `}
          onClick={
            going !== true
              ? (event) => {
                  callDatabase("RESERVE", { id: id, going: true });
                }
              : null
          }
          {...props}
        >
          GO
        </button>
        <button
          css={css`
            background-color: ${red};
            &:hover {
              border: 4px solid #771f1f;
              color: #771f1f;
            }
            &:active {
              background-color: #771f1f;
              color: white;
            }
          `}
          onClick={
            going !== false
              ? (event) => {
                  callDatabase("RESERVE", { id: id, going: false });
                }
              : null
          }
          {...props}
        >
          NO
        </button>
      </div>
    );
  };

  return (
    <GridContainer>
      <PhotoFrame>
        <img
          css={css`
            max-width: 100%;
          `}
          src={photo}
        />
      </PhotoFrame>
      <TitleBar>{name}</TitleBar>
      <Text>{description}</Text>
      <Timing time={start_time}></Timing>
      <Reserve going={going} />
    </GridContainer>
  );
}
