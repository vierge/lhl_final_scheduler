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
      `}
      {...props}
    />
  );

  const PhotoFrame = (props) => (
    <div
      css={css`
        grid-area: photo;
        border-right: 3px solid #333;
        ${props.photo
          ? `background-image: url(${props.photo})`
          : "background-color: white"}
        width: 100%;
        height: 100%;
      `}
      {...props}
    />
  );

  const TitleBar = (props) => (
    <div
      css={css`
        grid-area: name;
        border-bottom: 3px solid #333;
      `}
    />
  );

  const Date = (props) => (
    <div
      css={css`
        grid-area: time;
        border-left: 3px solid #333;
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
      `}
    >
      <div>Day</div>
      <div>MonthYear</div>
      <div>Hours</div>
      <div>Minutes</div>
    </div>
  );

  const Reserve = (props) => (
    <div
      css={css`
        grid-area: reserve;
        border-left: 3px solid #333;
      `}
    />
  );

  return (
    <GridContainer>
      <PhotoFrame></PhotoFrame>
      <TitleBar></TitleBar>
      <Date></Date>
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
