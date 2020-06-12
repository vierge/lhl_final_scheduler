import React from 'react';
import "./Index.scss"
import Button from "../Button"

export default function Event() {

  function accepted() {
    console.log("Accepted invite")
  }

  function decline() {
    console.log("Declined invite");
  }


  return (
    <div className="mom">
    <main className="event">
      <div className="event__top">
      <img className="event__image" src="https://www.sciencenews.org/wp-content/uploads/2019/07/071019_MT_poker-ai_feat.jpg" />
      <div className="event__content">
        <div className="event__title">EVENT TITLE</div>
        <div className="event__description">Event Descrtipion goes here</div>
      </div>
      </div>
      <div className="event__attend">
        <div className="event__attend--list">123456789</div>
        <div className="event__attend--reso">
          <Button confirm onClick={accepted}>Going</Button>
          <Button danger onClick={decline}>Not Going</Button>
        </div>
      </div>
    </main>
    <aside className="event__TIME"><p>TI</p><p>ME</p></aside>
    </div>
  )
}