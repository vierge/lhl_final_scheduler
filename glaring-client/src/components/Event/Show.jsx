import React from "react";
import "./Index.scss";
import Button from "../Button";
// import Axios from 'axios';

export default function ShowEvent(props) {
  const { name, description, start_time, end_time, photo } = props;
  function accepted() {
    console.log("Accepted invite");
  }

  function decline() {
    console.log("Declined invite");
  }

  return (
    <div className="mom">
      <main className="event">
        <div className="event__top">
          <img
            className="event__image"
            src={photo}
            alt="PARTY TIME PHOTO PHUN"
          />
          <div className="event__content">
            <div className="event__title">{name}</div>
            <div className="event__description">{description}</div>
          </div>
        </div>
        <div className="event__attend">
          <div className="event__attend--list">123456789</div>
          <div className="event__attend--reso">
            <Button confirm onClick={accepted}>
              ✓
            </Button>
            <Button danger onClick={decline}>
              ✗
            </Button>
          </div>
        </div>
      </main>
      <aside className="event__TIME">
        <p>{start_time}</p>
        <p>{end_time}</p>
      </aside>
    </div>
  );
}
