import React from 'react';
import "./Index.scss"

export default function Event() {



  return (
    <main className="event">
      <img className="event__image" src="https://www.sciencenews.org/wp-content/uploads/2019/07/071019_MT_poker-ai_feat.jpg" />
      <div className="event__content">
        <div className="event__title">EVENT TITLE</div>
        <div className="event__description">Event Descrtipion goes here</div>
      </div>
      <div className="event__TIME"><p>TI</p><p>ME</p></div>
    </main>
  )
}