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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mom">
        <main className="eventform">
          <div className="eventform__top">
            {/* event image */}
            {/* <label for="img">Select image:</label>
            <input type="file" id="img" name="img" accept="image/*" /> */}

            <input className="image" type="url" placeholder="Paste event image url" />

            <div className="eventform__content">
              <input type="text" name="title" placeholder="Enter event title" ref={register} />
              <input type="text" name="description" placeholder="Enter event description" ref={register} />
            </div>
            
            <input type="submit"/>

          </div>
        </main>

        <aside>
          <input type="date" ref={register}/>
          <input type="time" ref={register}/> 
        </aside>

      </div>
    </form>
  )
}