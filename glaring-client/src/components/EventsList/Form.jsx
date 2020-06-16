/**@jsx jsx */
import React, { useState } from "react";
import "./EventForm.scss";
import { useForm } from "react-hook-form";
import { css, jsx } from "@emotion/core";
import { useDataDispatch } from "../../hooks/useDatabase";

export default function EventForm(props) {
  const { mode } = props;
  const { callDatabase } = useDataDispatch();
  const { register, handleSubmit, errors } = useForm();
  const [display, setDisplay] = useState("display: flex;");
  async function onSubmit(data) {
    await callDatabase("ADDEVENT", data);
    setDisplay("display: none");
  }

  return (
    <form
      css={css`
        ${display}
      `}
      className="eventform"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="eventform__top">
        <div className="eventform__image">
          <input
            type="url"
            name="photo"
            placeholder="Paste event image url"
            ref={register({
              required: true
            })}
          />
          {errors.photo && errors.photo.type === "required" && <span>Field cannot be empty</span>}
        </div>

        <div className="eventform__content">
          <input
            type="text"
            name="name"
            placeholder="Enter event title"
            ref={register({
              required: true
            })}
          />
          {errors.name && errors.name.type === "required" && <span>Field cannot be empty</span>}
          <input
            type="text"
            name="description"
            placeholder="Enter event description"
            ref={register({
              required: true
            })}
          />
          {errors.description && errors.description.type === "required" && <span>Field cannot be empty</span>}
        </div>
      </div>

      <div className="eventform__submit">
        <input type="submit" />
      </div>

      <aside className="eventform__time">
        <input type="datetime-local" name="start_date" ref={register({
          required: true
        })} />
        {errors.start_date && errors.start_date.type === "required" && <span>Please specficy start time</span>}
        <br />
        {/* <input type="time" name="time" ref={register} />  */}
      </aside>
    </form>
  );
}
