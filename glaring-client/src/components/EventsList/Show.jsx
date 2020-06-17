/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import "./Index.scss";

// import Axios from 'axios';

const GridContainer = (props) => (
  <div
    css={css`
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-rows: 1fr 2fr 1fr 120px;
      grid-template-columns: 1fr 3fr;
      grid-template-areas:
        "p n t r"
        "p d t r";
    `}
    {...props}
  />
);

const PhotoFrame = (props) => (
  <div
    css={css`
      grid-area: p;
      border: 1px solid black;
      width: 100%;
      height: 100%;
    `}
    {...props}
  />
);

export default function ShowEvent(props) {
  const { name, description, start_time, end_time, photo } = props;
  function accepted() {
    console.log("Accepted invite");
  }

  function decline() {
    console.log("Declined invite");
  }

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
        border: 3px solid #333;
        background-color: #333;
        justify-content: center;
        display: flex;
        align-items: center;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      `}
      {...props}
    />
  );

  const TitleBar = (props) => (
    <div
      css={css`
        grid-area: name;
        font-size: 24px;
        border: 3px solid #333;
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

    const time = new Date();

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

  const Reserve = (props) => (
    <div
      css={css`
        grid-area: reserve;

        & button {
          display: block;
          border-style: none;
          border: none;
          background-color: #333;
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
          &:hover {
            border: 4px solid green;
            color: green;
          }
          &:active {
            background-color: green;
            color: white;
          }
        `}
      >
        GO
      </button>
      <button
        css={css`
          &:hover {
            border: 4px solid #771f1f;
            color: #771f1f;
          }
          &:active {
            background-color: #771f1f;
            color: white;
          }
        `}
      >
        NO
      </button>
    </div>
  );

  return (
    <GridContainer>
      <PhotoFrame><img css={css`max-height: 100%; max-width: 100%;`} src={photo} /></PhotoFrame>
      <TitleBar>{name}</TitleBar>
      <Text>{description}</Text>
      <Timing time={start_time}></Timing>
      <Reserve></Reserve>
    </GridContainer>
    // <div className="mom">
    //   <main className="event">
    //     <div className="event__top">
    //       <img
    //         className="event__image"
    //         src={photo}
    //         alt="PARTY TIME PHOTO PHUN"
    //       />
    //       <div className="event__content">
    //         <div className="event__title">{name}</div>
    //         <div className="event__description">{description}</div>
    //       </div>
    //     </div>
    //     <div className="event__attend">
    //       <div className="event__attend--list">123456789</div>
    //       <div className="event__attend--reso">
    //         <Button confirm onClick={accepted}>
    //           ✓
    //         </Button>
    //         <Button danger onClick={decline}>
    //           ✗
    //         </Button>
    //       </div>
    //     </div>
    //   </main>
    //   <aside className="event__TIME">
    //     <p>{start_time}</p>
    //     <p>{end_time}</p>
    //   </aside>
    // </div>
  );
}
