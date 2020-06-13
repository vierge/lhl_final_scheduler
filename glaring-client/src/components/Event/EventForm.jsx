/**@jsx jsx */
import React from "react";
import "./EventForm.scss";
import { useForm } from 'react-hook-form';
import { css, jsx } from "@emotion/core";

export default function EventForm() {
  const {register, handleSubmit, errors} = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form className="eventform" onSubmit={handleSubmit(onSubmit)}>
     
          <div className="eventform__top">
            {/* event image */}
            {/* <label for="img">Select image:</label>
            <input type="file" id="img" name="img" accept="image/*" /> */}
            

            <div className="eventform__image">
              <input type="url" name = "image" placeholder="Paste event image url" ref={register} />
            </div>

            <div className="eventform__content">
              <input type="text" name="title" placeholder="Enter event title" ref={register} />
              <input type="text" name="description" placeholder="Enter event description" ref={register} />
            </div>

          </div>
            
          
          <div className="eventform__submit">
            <input type="submit"/>
          </div>
            
          

        <aside className="eventform__time">
          <input type="date" name="date" ref={register} />
          <br/>
          <input type="time" name="time" ref={register} /> 
        </aside>

    </form>
  )
}