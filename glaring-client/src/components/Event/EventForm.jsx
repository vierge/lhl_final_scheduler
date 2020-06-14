/**@jsx jsx */
import React, { useState } from "react";
import "./EventForm.scss";
import { useForm } from 'react-hook-form';
import { css, jsx } from "@emotion/core";

export default function EventForm(props) {
  const { addEvent, mode } = props;
  const {register, handleSubmit, errors } = useForm();
  const [display, setDisplay] = useState("display: flex;");
  async function onSubmit (data) {
    await addEvent(data);
    setDisplay("display: none;")
  }

  return (
    <form css={css`${display}`}className="eventform" onSubmit={handleSubmit(onSubmit)}>
     
          <div className="eventform__top">  

            <div className="eventform__image">
              <input type="url" name = "photo" placeholder="Paste event image url" ref={register} />
            </div>

            <div className="eventform__content">
              <input type="text" name="name" placeholder="Enter event title" ref={register} />
              <input type="text" name="description" placeholder="Enter event description" ref={register} />
            </div>

          </div>
            
          
          <div className="eventform__submit">
            <input type="submit"/>
          </div>
            
          

        <aside className="eventform__time">
          <input type="datetime-local" name="start_date" ref={register} />
          <br/>
          {/* <input type="time" name="time" ref={register} />  */}
        </aside>

    </form>
  )
}