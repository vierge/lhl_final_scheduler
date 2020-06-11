import React from 'react';
import "./Index.scss"

export default function Event() {



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
        <div className="event__attend--reso">Y/N</div>
      </div>
    </main>
    <aside className="event__TIME"><p>TI</p><p>ME</p></aside>
    </div>
  )
}