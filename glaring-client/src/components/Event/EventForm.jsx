import React from "react";
import { useForm } from 'react-hook-form';

export default function EventForm() {
  const {register, handleSubmit, errors} = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* event image */}
      <label for="img">Select image:</label>
      <input type="file" id="img" name="img" accept="image/*" />

      <input type="url" placeholder="Paste event image url" />

      <input type="text" name="title" placeholder="Enter event title" ref={register} />
      <input type="text" name="description" placeholder="Enter event description" ref={register} />

      {/* date */}
      <input type="date" />
      {/* time */}
      <input type="time" /> 

      <input type="submit"/>
    </form>
  )
}